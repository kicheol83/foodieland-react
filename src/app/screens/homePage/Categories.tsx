import React, { useEffect, useState } from "react";
import { Box, Button, Collapse, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveRecipeTasty } from "./selector";
import { Recipe, RecipeInquiry } from "../../../libs/types/recipe";
import { RecipeCategories } from "../../../libs/enums/categories.enum";
import { setRecipeTasty } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import RecipeService from "../../services/RecipeService";

/** REDUX SLICE & SELECTOR **/

const recipeTastyRetrieve = createSelector(
  retrieveRecipeTasty,
  (recipeTasty) => ({ recipeTasty })
);
const actionDispatch = (dispatch: Dispatch) => ({
  setRecipeTasty: (data: Recipe[]) => dispatch(setRecipeTasty(data)),
});

export default function Categories() {
 const { setRecipeTasty } = actionDispatch(useDispatch());
  const { recipeTasty } = useSelector(recipeTastyRetrieve);

  const [showMore, setShowMore] = useState(true);
  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };
  const [recipeSearch, setRecipeSearch] = useState<RecipeInquiry>({
    page: 1,
    limit: 9,
    recipe: "createdAt",
    recipeType: RecipeCategories.BREAKFAST,
  });

  useEffect(() => {
    const recipe = new RecipeService();
    recipe
      .getRecipes(recipeSearch)
      .then((data) => {
        setRecipeTasty(data);
      })
      .catch((err) => console.log(err));
  }, [recipeSearch]);

  /** HANDLERS **/
  const searchTypeHandler = (recipeType: RecipeCategories) => {
    recipeSearch.page = 1;
    recipeSearch.recipeType = recipeType;
    setRecipeSearch({ ...recipeSearch });
  };

  return (
    <div className="categories-frame">
      <Container>
        <Stack className="category-box" flexDirection={"column"}>
          <Stack
            className="category-title"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Typography width={"238px"} height={"50px"} className="cate-text">
              Categories
            </Typography>
            <Button
              onClick={handleToggle}
              className="cate-button"
              variant="outlined"
            >
              <p className="button-text">
                {showMore ? "Hide Categories" : "View All Categories"}
              </p>
            </Button>
          </Stack>
          <Collapse in={showMore}>
            <Stack
              className="category-recipes"
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box"
                mt={"90px"}
                onClick={() => searchTypeHandler(RecipeCategories.BREAKFAST)}
              >
                <img className="cate-icons" src="/icons/breakfast.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  BREAKFAST
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box vegan"
                mt={"90px"}
                sx={{ backgroundColor: "FFE5E5" }}
                onClick={() => searchTypeHandler(RecipeCategories.VEGAN)}
              >
                <img className="cate-icons" src="/icons/vegan.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  VEGAN
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box meat"
                mt={"90px"}
                onClick={() => searchTypeHandler(RecipeCategories.MEAT)}
              >
                <img className="cate-icons" src="/icons/meat.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  MEAT
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box dessert"
                mt={"90px"}
                onClick={() => searchTypeHandler(RecipeCategories.DESSERT)}
              >
                <img className="cate-icons" src="/icons/dessert.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  DESSERT
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box lunch"
                mt={"90px"}
                onClick={() => searchTypeHandler(RecipeCategories.LUNCH)}
              >
                <img className="cate-icons" src="/icons/lunch.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  LUNCH
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box chocolate"
                mt={"90px"}
                onClick={() => searchTypeHandler(RecipeCategories.CHOCOLATE)}
              >
                <img className="cate-icons" src="/icons/chocolate.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  CHOCOLATE
                </Typography>
              </Box>
            </Stack>
          </Collapse>
          {}
        </Stack>
      </Container>
    </div>
  );
}
