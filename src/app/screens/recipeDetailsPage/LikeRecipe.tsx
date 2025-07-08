import { Box, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { serverApi } from "../../../libs/config";
import { retrieveRecipeManyLike } from "./selector";
import LikeService from "../../services/LikeService";
import { Recipe } from "../../../libs/types/recipe";
import { useHistory } from "react-router-dom";

/** REDUX SLICE & SELECTOR **/
const recipeManyLikeRetrieve = createSelector(
  retrieveRecipeManyLike,
  (likeMany) => ({ likeMany })
);

export default function LikeRecipe() {
  const likeService = new LikeService();
  const history = useHistory();

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

  const { likeMany } = useSelector(recipeManyLikeRetrieve);
  const choosenRecipeHandlar = (id: string) => {
    console.log("id=>", id);
    history.push(`/recipe-details/${id}`);
  };
  return (
    <div className="like-recipe-frame">
      <Container>
        <Stack className="like-recipe-box" flexDirection={"column"}>
          <Typography className="like-recipe-title">
            You may popular these recipe too
          </Typography>
          <Stack
            display={"flex"}
            flexWrap={"wrap"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            {likeMany.length !== 0 ? (
              likeMany.map((ele: Recipe) => {
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
