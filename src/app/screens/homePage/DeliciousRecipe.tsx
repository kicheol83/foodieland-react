import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveRecipeDelicious } from "./selector";
import { Recipe } from "../../../libs/types/recipe";
import { serverApi } from "../../../libs/config";
import LikeService from "../../services/LikeService";

/** REDUX SLICE & SELECTOR **/

const recipeDeliciousRetrieve = createSelector(
  retrieveRecipeDelicious,
  (recipeDelicious) => ({ recipeDelicious })
);

export default function DeliciousRecipe() {
  const { recipeDelicious } = useSelector(recipeDeliciousRetrieve);

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

  const choosenRecipeHandlar = (id: string) => {
    history.push(`/recipe-details/${id}`);
  };

  return (
    <div className="delicious-recipe-frame">
      <Container>
        <Stack className="del-box" flexDirection={"column"}>
          <Box
            className="del-title"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Typography className="del-text1">
              Try this delicious recipe to make your day
            </Typography>
            <Typography className="del-text2">
              With the right guidance and ingredients, you can turn everyday
              meals into restaurant-quality experiences
            </Typography>
          </Box>
          <Box
            className="del-card"
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            {recipeDelicious.length !== 0 ? (
              recipeDelicious.map((ele: Recipe) => {
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
                        {ele.recipePrepTime} minutes
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
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
