import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveRecipeAfisha = createSelector(
  selectHomePage,
  (HomePage) => HomePage.recipeAfisha
);

export const retrieveRecipeCategories = createSelector(
  selectHomePage,
  (HomePage) => HomePage.recipeCategories
);

export const retrieveRecipeTasty = createSelector(
  selectHomePage,
  (HomePage) => HomePage.recipeTasty
);

export const retrieveRecipeInstagram = createSelector(
  selectHomePage,
  (HomePage) => HomePage.recipeInstagram
);

export const retrieveRecipeDelicious = createSelector(
  selectHomePage,
  (HomePage) => HomePage.recipeDelicious
);