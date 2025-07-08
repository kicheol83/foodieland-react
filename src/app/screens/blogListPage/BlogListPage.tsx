import React, { ChangeEvent, useEffect, useState } from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import dayjs from "dayjs";

import {
  Avatar,
  Box,
  Button,
  Container,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveBlogAuthor,
  retrieveBlogManyLIke,
  retrieveBlogTastRecipe,
  retrieveRecipeBlogPage,
} from "./selector";
import { serverApi } from "../../../libs/config";
import { Recipe, RecipeInquiry } from "../../../libs/types/recipe";
import LikeService from "../../services/LikeService";
import { setBlogPageAuthor, setBlogPageRecipe } from "./slice";
import { Author } from "../../../libs/types/author";
import RecipeService from "../../services/RecipeService";
import AuthorService from "../../services/AuthorService";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobal";

const actionDispatch = (dispatch: Dispatch) => ({
  setBlogPageRecipe: (data: Recipe[]) => dispatch(setBlogPageRecipe(data)),
  setBlogPageAuthor: (data: Author[]) => dispatch(setBlogPageAuthor(data)),
});

const recipeBlogPageRetrieve = createSelector(
  retrieveRecipeBlogPage,
  (blogRecipe) => ({
    blogRecipe,
  })
);

const recipeCreateAuthorRetrieve = createSelector(
  retrieveBlogAuthor,
  (blogAuthor) => ({ blogAuthor })
);

const recipeBlogLikeRetrieve = createSelector(
  retrieveBlogManyLIke,
  (blogLike) => ({ blogLike })
);

const recipeBlogTastRecipeRetrieve = createSelector(
  retrieveBlogTastRecipe,
  (tastRecipe) => ({ tastRecipe })
);

export default function BlogListPage() {
  const { setBlogPageRecipe } = actionDispatch(useDispatch());
  const { setBlogPageAuthor } = actionDispatch(useDispatch());
  const { blogRecipe } = useSelector(recipeBlogPageRetrieve);
  const { blogAuthor } = useSelector(recipeCreateAuthorRetrieve);
  const { blogLike } = useSelector(recipeBlogLikeRetrieve);
  const { tastRecipe } = useSelector(recipeBlogTastRecipeRetrieve);

  const likeService = new LikeService();

  const [likedIndex, setLikedIndex] = useState<string[]>([]);
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedIndex") || "[]");
    setLikedIndex(savedLikes);
  }, []);

  const [recipeSearch, setRecipeSearch] = useState<RecipeInquiry>({
    page: 1,
    limit: 5,
    recipe: "createdAt",
    search: "",
  });

  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const recipeService = new RecipeService();
    const authorService = new AuthorService();

    recipeService
      .getRecipes(recipeSearch)
      .then(async (recipes) => {
        setBlogPageRecipe(recipes);

        const authorPromises = recipes.map((recipe) => {
          if (recipe.authorId) {
            return authorService.getAuthor(recipe.authorId);
          }
          return null;
        });

        const authors = await Promise.all(authorPromises);

        const validAuthors = authors.filter(
          (author) => author !== null
        ) as Author[];

        setBlogPageAuthor(validAuthors);
      })
      .catch((err) => console.log("Blog page error:", err));
  }, [recipeSearch]);

  useEffect(() => {
    if (searchText === "") {
      recipeSearch.search = "";
      setRecipeSearch({ ...recipeSearch });
    }
  }, [searchText]);

  /** HANDLERS **/
  const searchRecipeHandler = () => {
    recipeSearch.search = searchText;
    setRecipeSearch({ ...recipeSearch });
  };

  const toggleLiked = async (id: string) => {
    try {
      await likeService.toggleRecipeLike(id);

      setLikedIndex((prev) => {
        const updated = prev.includes(id)
          ? prev.filter((i) => i !== id)
          : [...prev, id];

        localStorage.setItem("likedIndex", JSON.stringify(updated));

        return updated;
      });
    } catch (err) {
      console.error("Toggle like error:", err);
    }
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    recipeSearch.page = value;
    setRecipeSearch({ ...recipeSearch });
  };

  const choosenRecipeHandler = (id: string) => {
    history.push(`/blog-page/${id}`);
  };

  const { authMember } = useGlobals();
  if (!authMember) history.push("/");
  const choosenRecipeHandlar = (blogId: string) => {
    history.push(`/recipe-details/${blogId}`);
  };

  return (
    <div className="blog-list-page">
      <Container>
        <Stack className="blog-list-frame" flexDirection={"column"}>
          <Box
            className="list-title"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography className="list-text1">Blog & Article</Typography>
            <Typography className="list-text2">
              Stay inspired with our latest cooking stories, expert advice, and
              helpful tips to make the most of your culinary journey
            </Typography>
          </Box>

          <Box justifyContent={"center"} display={"flex"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "700px",
                height: "80px",
                borderRadius: "40px",
                border: "1px solid #ccc",
                px: 2,
                bgcolor: "white",
                mt: "80px",
              }}
            >
              <TextField
                type="search"
                value={searchText}
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchRecipeHandler();
                }}
                onChange={(e) => setSearchText(e.target.value)}
                variant="standard"
                placeholder="Search article, news or recipe..."
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    flex: 1,
                    fontSize: "16px",
                  },
                }}
                fullWidth
              />
              <Button
                onClick={searchRecipeHandler}
                variant="contained"
                sx={{
                  width: "150px",
                  bgcolor: "#000",
                  color: "#fff",
                  borderRadius: "20px",
                  textTransform: "none",
                  px: 4,
                  height: "55px",
                  ml: 2,
                  "&:hover": {
                    bgcolor: "#333",
                  },
                }}
              >
                Search
              </Button>
            </Box>
          </Box>

          <Box
            className="content-area"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            gap={4}
            mt={6}
            height={"1193px"}
          >
            <Stack className="blogs" flexDirection={"column"} flex={3}>
              {blogRecipe.length !== 0 ? (
                blogRecipe.map((recipe: Recipe) => {
                  const imagePath = `${serverApi}/${recipe.recipeImage[0]}`;
                  const author = blogAuthor.find(
                    (a) => a._id === recipe.authorId
                  );
                  const authorImagePath = `${serverApi}/${author?.authorImage}`;

                  return (
                    <Box
                      key={recipe._id}
                      className="recipe-info"
                      flexDirection={"row"}
                      display="flex"
                      mt={"15px"}
                      onClick={() => choosenRecipeHandler(recipe._id)}
                    >
                      <Box
                        className="recipe-boxs"
                        flexDirection={"row"}
                        display="flex"
                      >
                        <img className="img-recipe" src={imagePath} alt="" />
                        <Box ml={"40px"} mt={"13px"} flexDirection={"column"}>
                          <Typography className="txt1">
                            {recipe.recipeName}
                          </Typography>
                          <Typography className="txt2">
                            {recipe.recipeDirections}
                          </Typography>
                          <Box flexDirection={"row"} display={"flex"}>
                            <Avatar
                              alt="Remy Sharp"
                              src={authorImagePath}
                              sx={{
                                width: "40px",
                                height: "40px",
                                marginTop: "32px",
                              }}
                            />
                            <Typography className="creator">
                              {author?.authorNick}
                            </Typography>
                            <div className="line"></div>
                            <Typography className="moment" mt={"30px"}>
                              {dayjs(author?.createdAt).format("YYYY-MM-DD")}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Box className="no-data">Blog & Article are not available</Box>
              )}
            </Stack>

            <Box className="recipe" flex={1}>
              <Stack className="recipe-box" flexDirection={"column"}>
                <Typography className="recipe-text">Tasty Recipe</Typography>
                {tastRecipe.length !== 0 ? (
                  tastRecipe.map((ele: Recipe) => {
                    const imagePath = `${serverApi}/${ele.recipeImage[0]}`;
                    return (
                      <Box
                        key={ele._id}
                        className="recipes"
                        display="flex"
                        flexDirection="row"
                        mt={2}
                        onClick={() => choosenRecipeHandlar(ele._id)}
                      >
                        <img className="img" src={imagePath} alt="" />
                        <Box className="recipe-text">
                          <Typography className="big" ml={"24px"}>
                            {ele.recipeName}
                          </Typography>
                          <Typography className="small" ml={"24px"}>
                            {dayjs(ele?.createdAt).format("YYYY-MM-DD")}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })
                ) : (
                  <Box className="no-data">not available</Box>
                )}
              </Stack>
              <Box className="icon-foto">
                <img className="green" src="/img/green-back.png" alt="" />
                <img className="dont" src="/img/dont.png" alt="" />
                <img className="star" src="/icons/star.svg" alt="" />
                <img className="www" src="/icons/www.svg" alt="" />
                <img className="one" src="/icons/01.svg" alt="" />
              </Box>
            </Box>
          </Box>
          <Stack
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
            mt={"100px"}
          >
            <Pagination
              count={
                blogRecipe.length !== 0
                  ? recipeSearch.page + 1
                  : recipeSearch.page
              }
              page={recipeSearch.page}
              shape="rounded"
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    width: "60px",
                    height: "60px",
                    fontSize: "18px",
                    fontWeight: 500,
                    bgcolor: item.selected ? "#000" : "#fff",
                    color: item.selected ? "#black" : "#000",
                    borderRadius: "12px",
                    border: "1px solid #ccc",
                    "&:hover": {
                      bgcolor: item.selected ? "#111" : "#f5f5f5",
                    },
                  }}
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
        <Stack
          className="like-recipe-box"
          flexDirection={"column"}
          mt={"160px"}
        >
          <Typography className="like-recipe-title">
            You may like these recipe too
          </Typography>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            display={"flex"}
            flexWrap={"wrap"}
          >
            {blogLike.length !== 0 ? (
              blogLike.map((ele: Recipe) => {
                const imagePath = `${serverApi}/${ele.recipeImage[0]}`;

                return (
                  <Stack
                    className="recipe-box"
                    key={ele._id}
                    flexDirection={"row"}
                    mt={"40px"}
                  >
                    <img
                      className="ellipse-white"
                      src="/icons/ellipse-white.svg"
                      alt=""
                    />
                    <img
                      className="heart"
                      src={
                        likedIndex.includes(ele._id)
                          ? "/icons/heart-red.svg"
                          : "/icons/heart-white.svg"
                      }
                      alt=""
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLiked(ele._id);
                      }}
                    />
                    <img className="recipe-img" src={imagePath} alt="" />
                    <Typography
                      className={"recipe-name"}
                      mt={"27px"}
                      ml={"3px"}
                    >
                      {ele.recipeName}
                    </Typography>
                    <Stack flexDirection={"row"} ml={"3px"} mt={"20px"}>
                      <AccessTimeOutlinedIcon />
                      <Typography ml={"11px"}>
                        {ele.recipeCookTime} minutes
                      </Typography>
                      <FlatwareOutlinedIcon sx={{ ml: "30px" }} />
                      <Typography ml={"11px"}>{ele.recipeType}</Typography>
                    </Stack>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
