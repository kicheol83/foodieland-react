import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";

const initialState: HomePageState = {
  recipeAfisha: [],
  recipeCategories: [],
  recipeTasty: [],
  recipeInstagram: [],
  recipeDelicious: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setRecipeAfisha: (state, action) => {
      state.recipeAfisha = action.payload;
    },
    setRecipeCategories: (state, action) => {
      state.recipeCategories = action.payload;
    },
    setRecipeTasty: (state, action) => {
      state.recipeTasty = action.payload;
    },
    setReipeInstagram: (state, action) => {
      state.recipeInstagram = action.payload;
    },
    setRecipeDelicious: (state, action) => {
      state.recipeDelicious = action.payload;
    },
  },
});

export const {
  setRecipeAfisha,
  setRecipeCategories,
  setRecipeTasty,
  setReipeInstagram,
  setRecipeDelicious,
} = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
