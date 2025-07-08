import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveRecipeTasty } from "./selector";
import { Recipe } from "../../../libs/types/recipe";
import { serverApi } from "../../../libs/config";

/** REDUX SLICE & SELECTOR **/

const recipeTastyRetrieve = createSelector(
  retrieveRecipeTasty,
  (recipeTasty) => ({ recipeTasty })
);

export default function Simple() {
  const history = useHistory();

  const { recipeTasty } = useSelector(recipeTastyRetrieve);

  const choosenRecipeHandlar = (id: string) => {
    history.push(`/recipe-details/${id}`);
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
              Explore quick and wholesome recipes made with fresh ingredients to
              elevate your everyday meals with minimal effort
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            {recipeTasty.length !== 0 ? (
              recipeTasty.map((ele: Recipe) => {
                const imagePath = `${serverApi}/${ele.recipeImage[0]}`;
                return (
                  <Stack
                    className="recipe-box"
                    key={ele._id}
                    flexDirection={"row"}
                    mt={"40px"}
                    onClick={() => choosenRecipeHandlar(ele._id)}
                  >
                    <img className="recipe-img" src={imagePath} alt="" />
                    <Typography
                      className={"recipe-name"}
                      mt={"27px"}
                      ml={"24px"}
                    >
                      {ele.recipeName}
                    </Typography>
                    <Stack flexDirection={"row"} ml={"20px"} mt={"20px"}>
                      <AccessTimeOutlinedIcon />
                      <Typography ml={"11px"}>
                        {ele.recipePrepTime} minutes
                      </Typography>
                      <FlatwareOutlinedIcon sx={{ ml: "30px" }} />
                      <Typography ml={"11px"}>{ele.recipeType}</Typography>
                      <RemoveRedEyeIcon
                        sx={{ ml: "30px" }}
                        className="view-icon"
                      />
                      <p style={{ marginTop: "1px", marginLeft: "5px" }}>
                        {ele.recipeView}
                      </p>
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
