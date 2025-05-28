import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useHistory } from "react-router-dom";

const list = [
  {
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    minut: "30 minutes",
    type: "Sanack",
    imgPath: "/img/hot-dog.webp",
    view: 1,
  },
  {
    name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    minut: "30 minutes",
    type: "Noodles",
    imgPath: "/img/pasta.webp",
    view: 1,
  },
  {
    name: "Strawberry Oatmeal Pancake with Honey Syrup",
    minut: "30 minutes",
    type: "Fresh",
    imgPath: "/img/fresh.webp",
    view: 1,
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Sanack",
    imgPath: "/img/rice.webp",
    view: 1,
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Sweets",
    imgPath: "/img/chees.webp",
    view: 1,
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Fish",
    imgPath: "/img/baliq.webp",
    view: 1,
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Sweets",
    imgPath: "/img/honey.webp",
    view: 1,
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Sanack",
    imgPath: "/img/pasta.webp",
    view: 1,
  },
  {
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    minut: "30 minutes",
    type: "Fish",
    imgPath: "/img/baliq.webp",
    view: 1,
  },
];

export default function Simple() {
  const history = useHistory();

  const recipeHandlers = () => {
    history.push("/recipe-details");
  };
  return (
    <div className="simple-frame">
      <Container>
        <Stack className="simple-box">
          <Stack
            className="simple-box-title"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography className="box-title1">
              Simple and tasty recipes
            </Typography>
            <Typography className="box-title2" mt={"24px"}>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            {list.length !== 0 ? (
              list.map((ele, index) => {
                return (
                  <Stack
                    className="recipe-box"
                    key={index}
                    flexDirection={"row"}
                    mt={"40px"}
                    onClick={recipeHandlers}
                  >
                    <img className="recipe-img" src={ele.imgPath} alt="" />
                    <Typography
                      className={"recipe-name"}
                      mt={"27px"}
                      ml={"24px"}
                    >
                      {ele.name}
                    </Typography>
                    <Stack flexDirection={"row"} ml={"20px"} mt={"20px"}>
                      <AccessTimeOutlinedIcon />
                      <Typography ml={"11px"}>{ele.minut}</Typography>
                      <FlatwareOutlinedIcon sx={{ ml: "30px" }} />
                      <Typography ml={"11px"}>{ele.type}</Typography>
                      <RemoveRedEyeIcon
                        sx={{ ml: "30px" }}
                        className="view-icon"
                      />
                      <p style={{ marginTop: "1px", marginLeft: "5px" }}>
                        {ele.view}
                      </p>
                    </Stack>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available</Box>
            )}
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            className="box1"
          ></Stack>
        </Stack>
      </Container>
    </div>
  );
}
