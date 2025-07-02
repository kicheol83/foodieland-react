import { Author } from "./author";
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
  recipeHealthRice: Recipe[];
  recipeManyLike: Recipe[];
  recipeCreateAuthor: Author[];
}
