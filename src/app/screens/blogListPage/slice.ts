import { createSlice } from "@reduxjs/toolkit";
import { BlogPageState } from "../../../libs/types/screen";

const initialState: BlogPageState = {
  setBlogRecipe: [],
  setBlogAuthor: [],
  setBlogManyLike: [],
  setBlogTastRecipe: [],
  setBlogList: null,
};

const blogPageSlice = createSlice({
  name: "blogPage",
  initialState,
  reducers: {
    setBlogPageRecipe: (state, action) => {
      state.setBlogRecipe = action.payload;
    },
    setBlogPageAuthor: (state, action) => {
      state.setBlogAuthor = action.payload;
    },
    setBlogPageManyLike: (state, action) => {
      state.setBlogManyLike = action.payload;
    },
    setBlogTastRecipe: (state, action) => {
      state.setBlogTastRecipe = action.payload;
    },
    setBlogList: (state, action) => {
      state.setBlogList = action.payload;
    },
  },
});

export const {
  setBlogPageRecipe,
  setBlogPageAuthor,
  setBlogPageManyLike,
  setBlogTastRecipe,
  setBlogList,
} = blogPageSlice.actions;

const BlogPageReducer = blogPageSlice.reducer;
export default BlogPageReducer;
