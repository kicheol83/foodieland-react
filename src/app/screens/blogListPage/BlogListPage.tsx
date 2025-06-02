import React, { useState } from "react";
import moment from "moment";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";

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

/** TASTY RECIPE DATA **/
interface recipe {
  id: number;
  name: string;
  image: string;
  creator: string;
}

const list: recipe[] = [
  {
    id: 1,
    name: "Chicken Meatball with Creamy Chees",
    image: "/img/baliq.webp",
    creator: "By Adreas Paula",
  },
  {
    id: 1,
    name: "Chicken Meatball with Creamy Chees",
    image: "/img/pasta.webp",
    creator: "By Adreas Paula",
  },
  {
    id: 1,
    name: "Chicken Meatball with Creamy Chees",
    image: "/img/honey.webp",
    creator: "By Adreas Paula",
  },
];

const listData = [
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

/** RECIPE **/
interface information {
  id: number;
  recipeName: string;
  recipeDesc: string;
  recipeImg: string;
  creatorImg: string;
  creaotorName: string;
}
const blogData: information[] = [
  {
    id: 1,
    recipeName: "Crochet Projects for Noodle Lovers",
    recipeDesc:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    recipeImg: "/img/rice.webp",
    creatorImg: "/img/creator-img.png",
    creaotorName: "Taylor Smith",
  },
  {
    id: 2,
    recipeName: "Crochet Projects for Noodle Lovers",
    recipeDesc:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    recipeImg: "/img/hot-dog.webp",
    creatorImg: "/img/creator-img.png",
    creaotorName: "Taylor Smith",
  },
  {
    id: 3,
    recipeName: "Crochet Projects for Noodle Lovers",
    recipeDesc:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    recipeImg: "/img/blueberry.webp",
    creatorImg: "/img/creator-img.png",
    creaotorName: "Taylor Smith",
  },
  {
    id: 4,
    recipeName: "Crochet Projects for Noodle Lovers",
    recipeDesc:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    recipeImg: "/img/fresh.webp",
    creatorImg: "/img/creator-img.png",
    creaotorName: "Taylor Smith",
  },
  {
    id: 5,
    recipeName: "Crochet Projects for Noodle Lovers",
    recipeDesc:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    recipeImg: "/img/baliq.webp",
    creatorImg: "/img/creator-img.png",
    creaotorName: "Taylor Smith",
  },
];

// ... import va data'lar o‘zgarmagan ...

export default function BlogListPage() {
  const [blogArticle, setBlogarticle] = useState<information[]>(blogData);

  const data = moment("2025-06-01");

  const [likedIndex, setLikedIndex] = useState<number[]>([]);
  const toggleLiked = (index: number) => {
    setLikedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
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
          >
            <Stack className="blogs" flexDirection={"column"} flex={3}>
              {blogArticle.map((item) => (
                <Box
                  key={item.id}
                  className="recipe-info"
                  flexDirection={"row"}
                  display="flex"
                  mt={"15px"}
                >
                  <Box
                    className="recipe-boxs"
                    flexDirection={"row"}
                    display="flex"
                  >
                    <img className="img-recipe" src={item.recipeImg} alt="" />
                    <Box ml={"40px"} mt={"13px"} flexDirection={"column"}>
                      <Typography className="txt1">
                        {item.recipeName}
                      </Typography>
                      <Typography className="txt2">
                        {item.recipeDesc}
                      </Typography>
                      <Box flexDirection={"row"} display={"flex"}>
                        <Avatar
                          alt="Remy Sharp"
                          src={item.creatorImg}
                          sx={{
                            width: "40px",
                            height: "40px",
                            marginTop: "32px",
                          }}
                        />
                        <Typography className="creator">
                          {item.creaotorName}
                        </Typography>
                        <div className="line"></div>
                        <Typography className="moment" mt={"30px"}>
                          {data.format("D MMMM YYYY")}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>

            <Box className="recipe" flex={1}>
              <Stack className="recipe-box" flexDirection={"column"}>
                <Typography className="recipe-text">Tasty Recipe</Typography>

                {list.map((item) => (
                  <Box
                    key={item.id}
                    className="recipes"
                    display="flex"
                    flexDirection="row"
                    mt={2}
                  >
                    <img className="img" src={item.image} alt="" />
                    <Box className="recipe-text">
                      <Typography className="big" ml={"24px"}>
                        {item.name}
                      </Typography>
                      <Typography className="small" ml={"24px"}>
                        {item.creator}
                      </Typography>
                    </Box>
                  </Box>
                ))}
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
              count={5}
              page={1}
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
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            {listData.length !== 0 ? (
              listData.map((ele, index) => {
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
