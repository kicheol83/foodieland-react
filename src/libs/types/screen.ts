import { Recipe } from "./recipe";

/** REACT AP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  recipePage: RecipePageState;
}

export interface HomePageState {
  recipeAfisha: Recipe[];
  recipeCategories: Recipe[];
  recipeTasty: Recipe[];
  recipeInstagram: Recipe[];
  recipeDelicious: Recipe[];
}

export interface RecipePageState {
  recipeHealthRce: Recipe[];
  recipeIngredients: Recipe[];
  recipeDirections: Recipe[];
  recipeManyLik: Recipe[];
}
