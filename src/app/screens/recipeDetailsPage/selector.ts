import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectRecipePage = (state: AppRootState) => state.recipePage;

export const retrieveRecipeHealthRice = createSelector(
  selectRecipePage,
  (RecipePage) => RecipePage.recipeHealthRice
);

export const retrieveRecipeManyLike = createSelector(
  selectRecipePage,
  (RecipePage) => RecipePage.recipeManyLike
);

export const retrieveRecipeCreateAuthor = createSelector(
  selectRecipePage,
  (RecipePage) => RecipePage.recipeCreateAuthor
);
