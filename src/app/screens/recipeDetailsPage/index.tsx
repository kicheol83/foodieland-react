import React from "react";
import HealthRice from "./HealthRice";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import LikeRecipe from "./LikeRecipe";

export function RecipeDetailsPage() {
  return (
    <div className="recipe-details-frame">
      <HealthRice />
      <Ingredients />
      <Directions />
      <LikeRecipe />
    </div>
  );
}
