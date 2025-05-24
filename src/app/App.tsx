import React from "react";
import { Route, Switch } from "react-router-dom";
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
import "../css/app.css";
import "../css/navbar.css";
import "../css/home.css";

function App() {
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
