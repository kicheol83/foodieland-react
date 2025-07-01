import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Categories from "./Categories";
import CheckInstagram from "./CheckInstagram";
import ChickenAfisha from "./ChickenAfisha";
import DeliciousRecipe from "./DeliciousRecipe";
import LeanMore from "./LeanMore";
import Process from "./Process";
import Simple from "./Simple";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setRecipeTasty } from "./slice";
import { Recipe } from "../../../libs/types/recipe";
import RecipeService from "../../services/RecipeService";
import { RecipeCategories } from "../../../libs/enums/categories.enum";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setRecipeTasty: (data: Recipe[]) => dispatch(setRecipeTasty(data)),
});

export default function HomePage() {
  const { setRecipeTasty } = actionDispatch(useDispatch());

  useEffect(() => {
    const recipe = new RecipeService();
    recipe
      .getRecipes({
        page: 1,
        limit: 9,
        recipe: "createdAt",
        recipeType: RecipeCategories.BREAKFAST,
      })
      .then((data) => {
        setRecipeTasty(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-page">
      <Container>
        <ChickenAfisha />
        <Categories />
        <Simple />
        <LeanMore />
        <Process />
        <CheckInstagram />
        <DeliciousRecipe />
      </Container>
    </div>
  );
}

/** 42-qatorga moment qoyilishi kerak **/
