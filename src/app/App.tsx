import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./screens/homePage";
import RecipeDetailsPage from "./screens/recipeDetailsPage";
import BlogPage from "./screens/blogListPage";
import UserPage from "./screens/userPage";
import Navbar from "./components/header";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import Inbox from "./components/inbox";
import "../css/app.css";
import "../css/navbar.css";
import "../css/home.css";
import "../css/footer.css";
import "../css/inbox.css";
import "../css/recipe.css";
import "../css/blog.css";
import "../css/help.css";
import "../css/userPage.css";

import Button from "@mui/material/Button";



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/recipe-details">
          <RecipeDetailsPage />
        </Route>
        <Route path="/blog-page">
          <BlogPage />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Inbox />
      <Footer />
    </>
  );
}

export default App;
