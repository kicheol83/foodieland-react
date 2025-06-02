import React, { useState } from "react";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import moment from "moment";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
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

export default function BlogPostPage() {
  const data = moment("2025-06-01");
  const [likedIndex, setLikedIndex] = useState<number[]>([]);
  const toggleLiked = (index: number) => {
    setLikedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
                src="/img/creator-img.png"
                sx={{
                  width: "40px",
                  height: "40px",
                  marginTop: "32px",
                }}
              />
              <Typography className="creator">John Smith</Typography>
              <div className="line"></div>
              <Typography className="moment" mt={"48px"}>
                {data.format("D MMMM YYYY")}
              </Typography>
            </Box>
            <Typography mt={"48px"} flexDirection={"row"} className="post-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar.
            </Typography>
          </Box>
          <img className="shef-img" src="/img/shef.png" alt="" />
          <Stack flexDirection={"row"} className="bott-box">
            <Box className="information" flexDirection={"column"}>
              <Typography className="text">
                How did you start out in the food industry?
              </Typography>
              <Typography className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </Typography>

              <Typography className="text">
                What do you like most about your job?
              </Typography>
              <Typography className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </Typography>

              <Typography className="text">
                Do you cook at home on your days off?
              </Typography>
              <img className="img1" src="/img/shef-vomen.png" alt="" />
              <Typography className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </Typography>

              <Typography className="text">
                What would your advice be to young people looking to get their
                foot in the door?
              </Typography>
              <Typography className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </Typography>

              <Box className="bottom-text" mt={"64px"}>
                <Typography className="bottom-txt">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.”
                </Typography>
              </Box>

              <Typography className="text">
                What would your advice be to young people looking to get their
                foot in the door?
              </Typography>
              <Typography className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
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
