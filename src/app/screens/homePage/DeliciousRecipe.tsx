import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import { useHistory } from "react-router-dom";

const list = [
  {
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    minut: "30 minutes",
    type: "Sanack",
    imgPath: "/img/hot-dog.webp",
  },
  {
    name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    minut: "30 minutes",
    type: "Noodles",
    imgPath: "/img/pasta.webp",
  },
  {
    name: "Strawberry Oatmeal Pancake with Honey Syrup",
    minut: "30 minutes",
    type: "Fresh",
    imgPath: "/img/fresh.webp",
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Sanack",
    imgPath: "/img/rice.webp",
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Sweets",
    imgPath: "/img/chees.webp",
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Fish",
    imgPath: "/img/baliq.webp",
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Sweets",
    imgPath: "/img/honey.webp",
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Sanack",
    imgPath: "/img/pasta.webp",
  },
];

export default function DeliciousRecipe() {
  const history = useHistory();

  const recipeHandler = () => {
    history.push("/recipe-details");
  };

  const [likedIndex, setLikedIndex] = useState<number[]>([]);
  const toggleLiked = (index: number) => {
    setLikedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </Typography>
          </Box>
          <Box
            className="del-card"
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            {list.length !== 0 ? (
              list.map((ele, index) => {
                return (
                  <Stack
                    className="recipe-box"
                    key={index}
                    flexDirection={"row"}
                    mt={"40px"}
                    onClick={recipeHandler}
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
                    <img className="recipe-img" src={ele.imgPath} alt="" />
                    <Typography
                      className={"recipe-name"}
                      mt={"27px"}
                      ml={"3px"}
                    >
                      {ele.name}
                    </Typography>
                    <Stack flexDirection={"row"} ml={"3px"} mt={"20px"}>
                      <AccessTimeOutlinedIcon />
                      <Typography ml={"11px"}>{ele.minut}</Typography>
                      <FlatwareOutlinedIcon sx={{ ml: "30px" }} />
                      <Typography ml={"11px"}>{ele.type}</Typography>
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
