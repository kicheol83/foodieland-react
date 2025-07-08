import React, { useEffect, useState } from "react";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import dayjs from "dayjs";
import { retrieveBlogList, retrieveBlogManyLIke } from "./selector";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Recipe } from "../../../libs/types/recipe";
import { serverApi } from "../../../libs/config";
import LikeService from "../../services/LikeService";
import { useHistory, useParams } from "react-router-dom";
import RecipeService from "../../services/RecipeService";
import { setBlogList } from "./slice";
import { Author } from "../../../libs/types/author";
import AuthorService from "../../services/AuthorService";

const actionDispatch = (dispatch: Dispatch) => ({
  setBlogList: (data: Recipe) => dispatch(setBlogList),
});

const recipeBlogLikeRetrieve = createSelector(
  retrieveBlogManyLIke,
  (blogLike) => ({ blogLike })
);

const blogListRetrieve = createSelector(retrieveBlogList, (blogList) => ({
  blogList,
}));

export default function BlogPostPage() {
  const history = useHistory();
  const [recipeAuthor, setRecipeAuthor] = useState<Author | null>(null);
  const { blogLike } = useSelector(recipeBlogLikeRetrieve);
  const likeService = new LikeService();
  // const { blogList } = useSelector(blogListRetrieve);

  const [likedIndex, setLikedIndex] = useState<string[]>([]);
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedIndex") || "[]");
    setLikedIndex(savedLikes);
  }, []);

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

  const { blogId } = useParams<{ blogId: string }>();
  console.log("blogId", blogId);

  useEffect(() => {
    const recipeService = new RecipeService();
    const authorService = new AuthorService();

    recipeService
      .getRecipe(blogId)
      .then(async (data) => {
        setBlogList(data);

        if (data.authorId) {
          const author = await authorService.getAuthor(data.authorId);
          if (author) {
            setRecipeAuthor(author);
          }
        }
      })
      .catch((err) => console.log("Blog page error:", err));
  }, []);
  const interviews = recipeAuthor?.authorInterview;

  const choosenRecipeHandlar = (blogId: string) => {
    history.push(`/recipe-details/${blogId}`);
  };

  return (
    <div className="blog-post-page">
      <Container>
        <Stack className="blog-post-frame" flexDirection={"column"} mt={"80px"}>
          <Box
            className="post-box"
            flexDirection={"column"}
            justifyContent={"center"}
            display={"flex"}
          >
            <Typography className="post-box-title" flexDirection={"row"}>
              Full Guide to Becoming a Professional Chef
            </Typography>
            <Box
              flexDirection={"row"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Avatar
                alt="Remy Sharp"
                src={`${serverApi}/${recipeAuthor?.authorImage}`}
                sx={{
                  width: "40px",
                  height: "40px",
                  marginTop: "32px",
                }}
              />
              <Typography className="creator">
                {recipeAuthor?.authorNick}
              </Typography>
              <div className="line"></div>
              <Typography className="moment" mt={"48px"}>
                {dayjs(recipeAuthor?.createdAt).format("YYYY-MM-DD")}
              </Typography>
            </Box>
            <Typography mt={"48px"} flexDirection={"row"} className="post-desc">
              From basic techniques to expert-level cooking, this complete guide
              will help you master the art of cuisine step by step pulvinar
            </Typography>
          </Box>
          <img className="shef-img" src="/img/shef.png" alt="" />
          <Stack flexDirection={"row"} className="bott-box">
            <Box className="information" flexDirection={"column"}>
              <Typography className="text">
                {interviews?.[0]?.question}
              </Typography>
              <Typography className="desc">
                {interviews?.[0]?.answer}
              </Typography>

              <Typography className="text">
                {interviews?.[1]?.question}
              </Typography>
              <Typography className="desc">
                {interviews?.[1]?.answer}
              </Typography>

              <Typography className="text">
                {interviews?.[2]?.question}
              </Typography>
              <img className="img1" src="/img/shef-vomen.png" alt="" />
              <Typography className="desc">
                {interviews?.[2]?.answer}
              </Typography>

              <Typography className="text">
                {interviews?.[3]?.question}
              </Typography>
              <Typography className="desc">
                {interviews?.[3]?.answer}
              </Typography>

              <Box className="bottom-text" mt={"64px"}>
                <Typography className="bottom-txt">
                  Believe in your passion, practice with patience, and never
                  stop learning—great things take time and dedication
                </Typography>
              </Box>

              <Typography className="text">
                {interviews?.[4]?.question}
              </Typography>
              <Typography className="desc">
                {interviews?.[4]?.answer}
              </Typography>
            </Box>
            <Box
              flexDirection={"column"}
              display={"flex"}
              alignItems={"center"}
              mt={"87px"}
              ml={"124px"}
            >
              <Typography className="share">SHARE THIS ONE</Typography>
              <Facebook sx={{ marginTop: "20px" }} />
              <Instagram sx={{ marginTop: "20px" }} />
              <Twitter sx={{ marginTop: "20px" }} />
            </Box>
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
                    onClick={() => choosenRecipeHandlar(ele._id)}
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
                      <Typography ml={"11px"}>{ele.recipeCookTime}</Typography>
                      <FlatwareOutlinedIcon sx={{ ml: "30px" }} />
                      <Typography ml={"11px"}>{ele.recipeType}</Typography>
                    </Stack>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">Popular recipe are not available</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
