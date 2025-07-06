import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectBlogPage = (state: AppRootState) => state.blogPage;

export const retrieveRecipeBlogPage = createSelector(
  selectBlogPage,
  (BlogPage) => BlogPage.setBlogRecipe
);

export const retrieveBlogAuthor = createSelector(
  selectBlogPage,
  (BlogPage) => BlogPage.setBlogAuthor
);

export const retrieveBlogManyLIke = createSelector(
  selectBlogPage,
  (BlogPage) => BlogPage.setBlogManyLike
);

export const retrieveBlogTastRecipe = createSelector(
  selectBlogPage,
  (BlogPage) => BlogPage.setBlogTastRecipe
);

export const retrieveBlogList = createSelector(
  selectBlogPage,
  (BlogPage) => BlogPage.setBlogList
);
