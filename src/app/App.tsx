import React from "react";
import "../css/app.css";
import { Route, Link, Switch } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { RecipeDetailsPage } from "./screens/recipeDetailsPage";
import { BlogListPage } from "./screens/blogListPage";
import { BlogPostPage } from "./screens/blogPostPage";
import { ContactPage } from "./screens/contactPage";
import { UserPage } from "./screens/userPage";
import { HelpPage } from "./screens/helpPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe-details">Recipe Details Page</Link>
          </li>
          <li>
            <Link to="/blog-list">Blog List Page</Link>
          </li>
          <li>
            <Link to="/blog-post">Blog Post Page</Link>
          </li>
          <li>
            <Link to="/contact">Contact Page</Link>
          </li>
          <li>
            <Link to="/user">User Page</Link>
          </li>
          <li>
            <Link to="/help">Help Page</Link>
          </li>
        </ul>
      </nav>

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
    </div>
  );
}

export default App;
