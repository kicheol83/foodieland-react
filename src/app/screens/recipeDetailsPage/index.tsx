import React, { useEffect } from "react";
import HealthRice from "./HealthRice";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import LikeRecipe from "./LikeRecipe";

import { Dispatch } from "@reduxjs/toolkit";
import { Recipe } from "../../../libs/types/recipe";
import {
  setRecipeCreateAuthor,
  setRecipeHealthRice,
  setRecipeManyLike,
} from "./slice";
import RecipeService from "../../services/RecipeService";
import { useParams } from "react-router-dom";
import { Author } from "../../../libs/types/author";
import { setRecipeTasty } from "../homePage/slice";
import { RecipeCategories } from "../../../libs/enums/categories.enum";
import { useDispatch } from "react-redux";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setRecipeHealthRice: (data: Recipe[]) => dispatch(setRecipeHealthRice(data)),
  setRecipeManyLike: (data: Recipe[]) => dispatch(setRecipeManyLike(data)),
  setRecipeCreateAuthor: (data: Author) =>
    dispatch(setRecipeCreateAuthor(data)),
  setRecipeTasty: (data: Recipe[]) => dispatch(setRecipeTasty(data)),
});

export default function RecipeDetailsPage() {
  const { authorId } = useParams<{ authorId: string }>();
  const { setRecipeTasty } = actionDispatch(useDispatch());
  const { setRecipeManyLike } = actionDispatch(useDispatch());


  useEffect(() => {
    const recipe = new RecipeService();
    recipe
      .getRecipes({
        page: 1,
        limit: 3,
        recipe: "recipeLike",
      })
      .then((data) => {
        setRecipeTasty(data);
      })
      .catch((err) => console.log(err));

    recipe
      .getRecipes({
        page: 1,
        limit: 8,
        recipe: "recipeView",
      })
      .then((data) => {
        setRecipeManyLike(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="recipe-details-frame">
      <HealthRice />
      <Ingredients />
      <Directions />
      <LikeRecipe />
    </div>
  );
}
