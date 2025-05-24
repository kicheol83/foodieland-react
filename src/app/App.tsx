import React from "react";
import "../css/app.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { RecipeDetailsPage } from "./screens/recipeDetailsPage";
import { BlogListPage } from "./screens/blogListPage";
import { BlogPostPage } from "./screens/blogPostPage";
import { ContactPage } from "./screens/contactPage";
import { UserPage } from "./screens/userPage";
import { HelpPage } from "./screens/helpPage";
import { Navbar } from "./components/header/Navbar";
import { Footer } from "./components/footer";
import { Inbox } from "./components/inbox";

function App() {
  // const location = useLocation();
  // console.log("location", location);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/recipe-details">
          <RecipeDetailsPage />
        </Route>
        <Route path="/blog-list">
          <BlogListPage />
        </Route>
        <Route path="/blog-post">
          <BlogPostPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
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
