import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { retrieveRecipeTasty } from "./selector";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const recipeTastyRetrieve = createSelector(
  retrieveRecipeTasty,
  (recipeTasty) => ({ recipeTasty })
);

export default function ChickenAfisha() {
  const history = useHistory();

  const { recipeTasty } = useSelector(recipeTastyRetrieve);

  const choosenRecipeHandlar = (id: string) => {
    history.push(`/recipe-details/${id}`);
  };

  return (
    <div className="check-afisha-frame">
      <Container>
        <Stack className="stk">
          <Stack className="box-item">
            <Stack
              className="hot-recipes"
              flexDirection={"row"}
              mt={"50px"}
              ml={"50px"}
            >
              <img src="/icons/book.svg" alt="" />
              <p>Hot Recipes</p>
            </Stack>
            <Typography ml={"50px"} mt={"32px"} className="tp-1">
              Spicy delicious chicken wings
            </Typography>
            <Typography ml={"50px"} mt={"24px"} className="tp-2">
              These bold, juicy wings pack a flavorful punch. Perfect for game
              nights, parties, or whenever you're craving something spicy and
              satisfying.
            </Typography>
            <Stack flexDirection={"row"} mt={"30px"}>
              <Box className="rectangle" ml={"50px"}>
                <AccessTimeOutlinedIcon />
                <Typography ml={"10px"}>30 Minutes</Typography>
              </Box>
              <Box className="rectangle-1" ml={"16px"}>
                <FlatwareOutlinedIcon />
                <Typography ml={"10px"}>Chicken</Typography>
              </Box>
            </Stack>
            <Stack flexDirection={"row"}>
              <Box className="men-icon" mt={"99px"}>
                <Avatar
                  alt="Remy Sharp"
                  src="/icons/ellipse-men.svg"
                  sx={{ width: "60px", height: "60px" }}
                />
              </Box>
              <Box className="men-title" mt={"108px"} ml={"20px"}>
                <Typography className="typ-1">John Smith</Typography>
                <Typography className="typ-2" mt={"5px"}>
                  15 March 2022
                </Typography>
              </Box>
              <Box
                className="view-button"
                flexDirection={"row"}
                ml={"157px"}
                mt={"99px"}
              >
                <Button className="view">View Recipes</Button>
                <PlayCircleOutlineOutlinedIcon sx={{ color: "white" }} />
              </Box>
            </Stack>
          </Stack>
          <Stack className="box-img">
            <img src="/img/chicken-back.webp" alt="" />
          </Stack>
          <Box className="center-icon">
            <img
              className="icon-ellipse"
              src="/icons/ellipse-white.svg"
              alt=""
            />
            <img className="icon-hand" src="/img/ramen.webp" alt="" />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
