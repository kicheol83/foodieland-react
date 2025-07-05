import React, { useEffect } from "react";
import HealthRice from "./HealthRice";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import LikeRecipe from "./LikeRecipe";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Recipe } from "../../../libs/types/recipe";
import {
  setRecipeCreateAuthor,
  setRecipeHealthRice,
  setRecipeManyLike,
} from "./slice";
import RecipeService from "../../services/RecipeService";
import AuthorService from "../../services/AuthorService";
import { useParams } from "react-router-dom";
import { Author } from "../../../libs/types/author";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setRecipeHealthRice: (data: Recipe[]) => dispatch(setRecipeHealthRice(data)),
  setRecipeManyLike: (data: Recipe[]) => dispatch(setRecipeManyLike(data)),
  setRecipeCreateAuthor: (data: Author) =>
    dispatch(setRecipeCreateAuthor(data)),
});

export default function RecipeDetailsPage() {
  const { setRecipeHealthRice } = actionDispatch(useDispatch());
  const { setRecipeManyLike } = actionDispatch(useDispatch());
  const { setRecipeCreateAuthor } = actionDispatch(useDispatch());
  const { authorId } = useParams<{ authorId: string }>();

  // useEffect(() => {
  //   const author = new AuthorService();
  //   author
  //     .getAuthors()
  //     .then((data) => {
  //       setRecipeCreateAuthor(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="recipe-details-frame">
      <HealthRice />
      <Ingredients />
      <Directions />
      <LikeRecipe />
    </div>
  );
}
