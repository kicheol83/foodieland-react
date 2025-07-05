import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveRecipeTasty } from "../homePage/selector";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../libs/config";
import { retrieveRecipeManyLike } from "./selector";

/** REDUX SLICE & SELECTOR **/
const recipeManyLikeRetrieve = createSelector(
  retrieveRecipeManyLike,
  (likeMany) => ({ likeMany })
);


export default function LikeRecipe() {
  const [likedIndex, setLikedIndex] = useState<number[]>([]);
  const toggleLiked = (index: number) => {
    setLikedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const { likeMany } = useSelector(recipeManyLikeRetrieve);


  return (
    <div className="like-recipe-frame">
      <Container>
        <Stack className="like-recipe-box" flexDirection={"column"}>
          <Typography className="like-recipe-title">
            You may popular these recipe too
          </Typography>
          <Stack display={"flex"} flexWrap={"wrap"} flexDirection={"row"} justifyContent={"space-between"}>
            {likeMany.length !== 0 ? (
              likeMany.map((ele, index) => {
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
                        likedIndex.includes(index)
                          ? "/icons/heart-red.svg"
                          : "/icons/heart-white.svg"
                      }
                      alt=""
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLiked(index);
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
