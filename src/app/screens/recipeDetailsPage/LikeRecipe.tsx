import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";

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
];

export default function LikeRecipe() {
  const [likedIndex, setLikedIndex] = useState<number[]>([]);
  const toggleLiked = (index: number) => {
    setLikedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="like-recipe-frame">
      <Container>
        <Stack className="like-recipe-box" flexDirection={"column"}>
          <Typography className="like-recipe-title">
            You may like these recipe too
          </Typography>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            {list.length !== 0 ? (
              list.map((ele, index) => {
                return (
                  <Stack
                    className="recipe-box"
                    key={index}
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
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
