import { Author } from "./author";
import { Recipe } from "./recipe";

/** REACT AP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  recipePage: RecipePageState;
  blogPage: BlogPageState;
}

export interface HomePageState {
  recipeAfisha: Recipe[];
  recipeCategories: Recipe[];
  recipeTasty: Recipe[];
  recipeInstagram: Recipe[];
  recipeDelicious: Recipe[];
}

export interface RecipePageState {
  recipeHealthRice: Recipe | null;
  recipeManyLike: Recipe[];
  recipeCreateAuthor: Author | null;
}

export interface BlogPageState {
  setBlogRecipe: Recipe[];
  setBlogAuthor: Author[];
  setBlogManyLike: Recipe[];
  setBlogTastRecipe: Recipe[];
}
