import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogPostPage from "./BlogPostPage";
import BlogListPage from "./BlogListPage";
import { Author } from "../../../libs/types/author";
import {
  setBlogPageAuthor,
  setBlogPageManyLike,
  setBlogPageRecipe,
  setBlogTastRecipe,
} from "./slice";
import { Recipe, RecipeInquiry } from "../../../libs/types/recipe";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import RecipeService from "../../services/RecipeService";
import AuthorService from "../../services/AuthorService";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  // setBlogPageRecipe: (data: Recipe[]) => dispatch(setBlogPageRecipe(data)),
  // setBlogPageAuthor: (data: Author[]) => dispatch(setBlogPageAuthor(data)),
  setBlogPageManyLike: (data: Recipe[]) => dispatch(setBlogPageManyLike(data)),
  setBlogTastRecipe: (data: Recipe[]) => dispatch(setBlogTastRecipe(data)),
});

export default function BlogPage() {
  // const { setBlogPageRecipe } = actionDispatch(useDispatch());
  // const { setBlogPageAuthor } = actionDispatch(useDispatch());
  const { setBlogPageManyLike } = actionDispatch(useDispatch());
  const { setBlogTastRecipe } = actionDispatch(useDispatch());

 
  useEffect(() => {
    const recipeService = new RecipeService();

    recipeService
      .getRecipes({
        page: 1,
        limit: 8,
        recipe: "createdAt",
      })
      .then((data) => {
        setBlogPageManyLike(data);
      })
      .catch((err) => console.log(err));

    recipeService
      .getRecipes({
        page: 1,
        limit: 3,
        recipe: "recipeLike",
      })
      .then((data) => {
        setBlogTastRecipe(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const blog = useRouteMatch();
  return (
    <div className="blog-page">
      <Switch>
        <Route path={`${blog.path}/:blogId`}>
          <BlogPostPage />
        </Route>
        <Route path={`${blog.path}`}>
          <BlogListPage />
        </Route>
      </Switch>
    </div>
  );
}
