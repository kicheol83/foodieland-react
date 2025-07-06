import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";
import RecipePageReducer from "./screens/recipeDetailsPage/slice";
import BlogPageReducer from "./screens/blogListPage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    recipePage: RecipePageReducer,
    blogPage: BlogPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
