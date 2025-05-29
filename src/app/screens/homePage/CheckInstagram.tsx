import React from "react";
import { Button, Container, Stack } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { CssVarsProvider } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

export default function CheckInstagram() {
  const instaCard = [
    {
      name: "Foodieland",
      icon: "/img/ramen.webp",
      img: "/img/salad-card.png",
      desc: "Foodieland. The vegetables dishes need to have",
      likes: 5,
    },
     {
      name: "Foodieland",
      icon: "/img/ramen.webp",
      img: "/img/dessert-card.png",
      desc: "Foodieland. The vegetables dishes need to have",
      likes: 100,
    },
     {
      name: "Foodieland",
      icon: "/img/ramen.webp",
      img: "/img/onion-card.png",
      desc: "Foodieland. The vegetables dishes need to have",
      likes: 500,
    },
     {
      name: "Foodieland",
      icon: "/img/ramen.webp",
      img: "/img/dish-card.png",
      desc: "Foodieland. The vegetables dishes need to have",
      likes: 888,
    },
  ];
  return (
    <div className="check-instagram-frame">
      <Container>
        <Stack
          className="check-inst-box"
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box className="check-inst-title">
            <Typography className="inst-text1">
              Check out @foodieland on Instagram
            </Typography>
            <Typography className="inst-text2">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </Typography>
          </Box>
          <Box className="insta-boxs" mt={"80px"}>
            {instaCard.length !== 0 ? (
              instaCard.map((ele, index) => {
                return (
                  <CssVarsProvider key={index}>
                    <Card
                      className="inst-card"
                      variant="outlined"
                      sx={{
                        "--Card-radius": (theme) => theme.vars.radius.xs,
                      }}
                    >
                      <CardContent
                        orientation="horizontal"
                        sx={{ alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              m: "-2px",
                              borderRadius: "50%",
                              background:
                                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                            },
                          }}
                        >
                          <Avatar
                            size="sm"
                            src={ele.icon}
                            sx={{
                              p: 0.5,
                              border: "2px solid",
                              borderColor: "background.body",
                            }}
                          />
                        </Box>
                        <Typography sx={{ fontWeight: "lg" }}>
                          {ele.name}
                        </Typography>
                        <IconButton
                          variant="plain"
                          color="neutral"
                          size="sm"
                          sx={{ ml: "auto" }}
                        >
                          <MoreHoriz />
                        </IconButton>
                      </CardContent>
                      <CardOverflow>
                        <AspectRatio>
                          <img src={ele.img} alt="" loading="lazy" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardContent
                        orientation="horizontal"
                        sx={{ alignItems: "center", mx: -1 }}
                      >
                        <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
                          <IconButton variant="plain" color="neutral" size="sm">
                            <FavoriteBorder />
                          </IconButton>
                          <IconButton variant="plain" color="neutral" size="sm">
                            <ModeCommentOutlined />
                          </IconButton>
                          <IconButton variant="plain" color="neutral" size="sm">
                            <SendOutlined />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            mx: "auto",
                          }}
                        >
                          {[...Array(5)].map((_, index) => (
                            <Box
                              key={index}
                              sx={[
                                {
                                  borderRadius: "50%",
                                  width: `max(${6 - index}px, 3px)`,
                                  height: `max(${6 - index}px, 3px)`,
                                },
                                index === 0
                                  ? { bgcolor: "primary.solidBg" }
                                  : { bgcolor: "background.level3" },
                              ]}
                            />
                          ))}
                        </Box>
                        <Box
                          sx={{
                            width: 0,
                            display: "flex",
                            flexDirection: "row-reverse",
                          }}
                        >
                          <IconButton variant="plain" color="neutral" size="sm">
                            <BookmarkBorderRoundedIcon />
                          </IconButton>
                        </Box>
                      </CardContent>
                      <CardContent>
                        <Link
                          component="button"
                          underline="none"
                          textColor="text.primary"
                          sx={{ fontSize: "sm", fontWeight: "lg" }}
                        >
                          {ele.likes} Likes
                        </Link>
                        <Typography sx={{ fontSize: "sm" }}>
                          <Link
                            component="button"
                            color="neutral"
                            textColor="text.primary"
                            sx={{ fontWeight: "lg" }}
                          >
                            {ele.name}
                          </Link>{" "}
                          {ele.desc}
                        </Typography>
                        <Link
                          component="button"
                          underline="none"
                          startDecorator="…"
                          sx={{ fontSize: "sm", color: "text.tertiary" }}
                        >
                          more
                        </Link>
                        <Link
                          component="button"
                          underline="none"
                          sx={{
                            fontSize: "10px",
                            color: "text.tertiary",
                            my: 0.5,
                          }}
                        >
                          2 DAYS AGO
                        </Link>
                      </CardContent>
                      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
                        <IconButton
                          size="sm"
                          variant="plain"
                          color="neutral"
                          sx={{ ml: -1 }}
                        >
                          <Face />
                        </IconButton>
                        <Input
                          variant="plain"
                          size="sm"
                          placeholder="Add a comment…"
                          sx={{
                            flex: 1,
                            px: 0,
                            "--Input-focusedThickness": "0px",
                          }}
                        />
                        <Link disabled underline="none" role="button">
                          Post
                        </Link>
                      </CardContent>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available</Box>
            )}
          </Box>
          <Button
            variant="contained"
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="visit-button"
          >
            Visit Our Isntagram <Instagram sx={{ marginLeft: "8px" }} />
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
