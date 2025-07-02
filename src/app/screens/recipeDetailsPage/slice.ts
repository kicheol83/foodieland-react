import { createSlice } from "@reduxjs/toolkit";
import { RecipePageState } from "../../../libs/types/screen";

const initialState: RecipePageState = {
  recipeHealthRice: [],

  recipeManyLike: [],
  recipeCreateAuthor: [],
};

const recipePaageSlice = createSlice({
  name: "recipePage",
  initialState,
  reducers: {
    setRecipeHealthRice: (state, action) => {
      state.recipeHealthRice = action.payload;
    },

    setRecipeManyLike: (state, action) => {
      state.recipeManyLike = action.payload;
    },
    setRecipeCreateAuthor: (state, action) => {
      state.recipeCreateAuthor = action.payload;
    },
  },
});

export const {
  setRecipeHealthRice,
  setRecipeManyLike,
  setRecipeCreateAuthor,
} = recipePaageSlice.actions;

const RecipePageReducer = recipePaageSlice.reducer;
export default RecipePageReducer;
