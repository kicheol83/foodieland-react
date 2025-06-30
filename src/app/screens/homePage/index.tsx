import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Categories from "./Categories";
import CheckInstagram from "./CheckInstagram";
import ChickenAfisha from "./ChickenAfisha";
import DeliciousRecipe from "./DeliciousRecipe";
import LeanMore from "./LeanMore";
import Process from "./Process";
import Simple from "./Simple";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setRecipeCategories } from "./slice";
import { retrieveRecipeCategories } from "./selector";
import { Recipe } from "../../../libs/types/recipe";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setRecipeCategories: (data: Recipe[]) => dispatch(setRecipeCategories(data)),
});
const recipeCategoriesRetrieve = createSelector(
  retrieveRecipeCategories,
  (recipeCategories) => ({ recipeCategories })
);

export default function HomePage() {
  const { setRecipeCategories } = actionDispatch(useDispatch());
  const { recipeCategories } = useSelector(recipeCategoriesRetrieve);

  useEffect(() => {}, []);

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
