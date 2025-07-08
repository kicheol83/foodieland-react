import { Avatar, Box, Container, Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ShareIcon from "@mui/icons-material/Share";
import dayjs from "dayjs";
import html2canvas from "html2canvas";

import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrieveRecipeCreateAuthor,
  retrieveRecipeHealthRice,
} from "./selector";
import { Recipe } from "../../../libs/types/recipe";
import { serverApi } from "../../../libs/config";
import { useParams } from "react-router-dom";
import RecipeService from "../../services/RecipeService";
import {
  setRecipeCreateAuthor,
  setRecipeHealthRice,
  setRecipeManyLike,
} from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import AuthorService from "../../services/AuthorService";
import { Author } from "../../../libs/types/author";
import { useReactToPrint } from "react-to-print";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setRecipeHealthRice: (data: Recipe) => dispatch(setRecipeHealthRice(data)),
  setRecipeManyLike: (data: Recipe[]) => dispatch(setRecipeManyLike(data)),
  setRecipeCreateAuthor: (data: Author) =>
    dispatch(setRecipeCreateAuthor(data)),
});

/** REDUX SLICE & SELECTOR **/

const recipeHealthRiceRetrieve = createSelector(
  retrieveRecipeHealthRice,
  (healthRice) => ({ healthRice })
);

const recipeCreateAuthorRetrieve = createSelector(
  retrieveRecipeCreateAuthor,
  (createAuthor) => ({ createAuthor })
);

export default function HealthRice() {
  const { healthRice } = useSelector(recipeHealthRiceRetrieve);
  const { createAuthor } = useSelector(recipeCreateAuthorRetrieve);
  const { setRecipeHealthRice, setRecipeCreateAuthor } = actionDispatch(
    useDispatch()
  );
  const { recipeId } = useParams<{ recipeId: string }>();

  console.log("recipeId:", recipeId);

  useEffect(() => {
    const recipeService = new RecipeService();
    const authorService = new AuthorService();

    recipeService
      .getRecipe(recipeId)
      .then((data) => {
        setRecipeHealthRice(data);

        if (data.authorId) {
          return authorService.getAuthor(data.authorId);
        }
      })
      .then((authorData) => {
        if (authorData) {
          console.log("Author info:", authorData);
          setRecipeCreateAuthor(authorData);
        }
      })
      .catch((err) => console.log(err));
  }, [recipeId]);

  const handleScreenshotPrint = async () => {
    const element = document.getElementById("print-section");
    if (element) {
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL();
      const windowContent = `<img src="${dataUrl}" style="width: 100%;"/>`;

      const printWindow = window.open("", "_blank");
      printWindow?.document.write(windowContent);
      printWindow?.document.close();
      printWindow?.focus();
      printWindow?.print();
      printWindow?.close();
    }
  };
  return (
    <div className="health-rice-frame">
      <Container>
        <div id="print-section">
          <Stack className="health-box" flexDirection={"row"}>
            <Box className="rice-box" flexDirection={"row"}>
              <Typography className="health-title">
                Health Japanese Fried Rice
              </Typography>
              <Box
                className="creator"
                display={"flex"}
                flexDirection={"row"}
                mt={"51px"}
              >
                <Box className="men-icon">
                  <Avatar
                    alt="Remy Sharp"
                    src={`${serverApi}/${createAuthor?.authorImage}`}
                    sx={{ width: "50px", height: "50px" }}
                  />
                </Box>
                <Box className="men-title" ml={"16px"} mt={"7px"}>
                  <Typography className="typ-1">
                    {createAuthor?.authorNick || "Unknown Author"}
                  </Typography>
                  <Typography className="typ-2" mt={"5px"}>
                    {dayjs(createAuthor?.createdAt).format("YYYY-MM-DD") ||
                      "no data"}
                  </Typography>
                </Box>
                <div className="line"></div>
                <Box
                  className="prep-time"
                  flexDirection={"row"}
                  display={"flex"}
                >
                  <AccessTimeOutlinedIcon sx={{ mt: "11px" }} />
                  <Box flexDirection={"column"} sx={{ ml: "10px" }}>
                    <Typography className="text1">PREP TIME</Typography>
                    <Typography className="minutes">
                      {healthRice?.recipePrepTime} MINUTES
                    </Typography>
                  </Box>
                </Box>
                <div className="line"></div>
                <Box
                  className="cook-time"
                  flexDirection={"row"}
                  display={"flex"}
                >
                  <AccessTimeOutlinedIcon sx={{ mt: "11px" }} />
                  <Box flexDirection={"column"} sx={{ ml: "10px" }}>
                    <Typography className="text1">COOK TIME</Typography>
                    <Typography className="minutes">
                      {healthRice?.recipeCookTime} MINUTES
                    </Typography>
                  </Box>
                </Box>
                <div className="line"></div>
                <Box
                  className="chicken"
                  flexDirection={"row"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <FlatwareOutlinedIcon />
                  <Typography className="chicken-text" sx={{ ml: "10px" }}>
                    {healthRice?.recipeName}
                  </Typography>
                </Box>
              </Box>
              <Box className="video-box">
                <img src="/img/brooke-lark.jpg" alt="" />
                {/** SHU YERNI OZGARTIRSAM RECIPE OINI RASMI CHIQIB  **/}
                {/* <img src={`${serverApi}/${healthRice?.recipeImage}`} alt="" /> */}
              </Box>
            </Box>
            <Stack
              className="information-frame"
              flexDirection={"column"}
              ml={"120px"}
              mt={"126px"}
            >
              <Box
                className="print"
                flexDirection={"row"}
                sx={{ cursor: "pointer" }}
                onClick={handleScreenshotPrint}
              >
                <LocalPrintshopIcon className="print-icon" />
                <img src="/icons/print-back.svg" alt="" />
                <ShareIcon className="share" />
                <img className="print-img" src="/icons/print-back.svg" alt="" />
              </Box>
              <Box flexDirection={"row"} ml={"50px"} display={"flex"}>
                <Typography className="print-text">PRINT</Typography>
                <Typography className="share-text">SHARE</Typography>
              </Box>
              <Box className="info" flexDirection="row" mt={"80px"}>
                <Typography className="nut" mt={"32px"} ml={"32px"}>
                  Nutrition Information
                </Typography>
                <Box
                  className="info-title"
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  mt={"25px"}
                  ml={"32px"}
                >
                  <Typography className="name">Calories</Typography>
                  <Typography className="kgm">
                    {healthRice?.recipeNutrition?.[0]?.calories}
                  </Typography>
                </Box>
                <div className="bot-line"></div>
                <Box
                  className="info-title"
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  mt={"25px"}
                  ml={"32px"}
                >
                  <Typography className="name">Total Fat</Typography>
                  <Typography className="kgm">
                    {healthRice?.recipeNutrition?.[0]?.fat}
                  </Typography>
                </Box>
                <div className="bot-line"></div>
                <Box
                  className="info-title"
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  mt={"25px"}
                  ml={"32px"}
                >
                  <Typography className="name">Protein</Typography>
                  <Typography className="kgm">
                    {healthRice?.recipeNutrition?.[0]?.protein}
                  </Typography>
                </Box>
                <div className="bot-line"></div>
                <Box
                  className="info-title"
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  mt={"25px"}
                  ml={"32px"}
                >
                  <Typography className="name">Carbohydrate</Typography>
                  <Typography className="kgm">
                    {healthRice?.recipeNutrition?.[0]?.carbs}
                  </Typography>
                </Box>
                <div className="bot-line"></div>
                <Box
                  className="info-title"
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  mt={"25px"}
                  ml={"32px"}
                >
                  <Typography className="name">Cholesterol</Typography>
                  <Typography className="kgm">
                    {healthRice?.recipeNutrition?.[0]?.sugar}
                  </Typography>
                </Box>
                <div className="bot-line"></div>
                <Typography className="bottom-title" mt={"150px"} ml={"32px"}>
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </div>

        <Typography className="text-bott" mt={"40px"}>
          A balanced, nutritious, and tasty dish that combines traditional
          Japanese flavors with modern healthy twists A balanced, nutritious,
          and tasty dish that combines traditional Japanese flavors with modern
          healthy twists A balanced, nutritious, and tasty dish that combines
          traditional Japanese flavors with modern healthy twists A balanced,
          nutritious, and tasty dish that combines traditional Japanese flavors
          with modern healthy twists
        </Typography>
      </Container>
    </div>
  );
}
