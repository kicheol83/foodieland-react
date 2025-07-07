import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./screens/homePage";
import RecipeDetailsPage from "./screens/recipeDetailsPage";
import BlogPage from "./screens/blogListPage";
import UserPage from "./screens/userPage";
import Navbar from "./components/header";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import Inbox from "./components/inbox";
import ScrollToTop from "../libs/scroll/scroll";
import "../css/app.css";
import "../css/navbar.css";
import "../css/home.css";
import "../css/footer.css";
import "../css/inbox.css";
import "../css/recipe.css";
import "../css/blog.css";
import "../css/help.css";
import "../css/userPage.css";
import AuthenticationModal from "./components/auth";

function App() {
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  /** HANDLERS **/
  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginpClose = () => setLoginOpen(false);

  return (
    <>
      <Navbar setSignupOpen={setSignupOpen} setLoginOpen={setLoginOpen} />
      <ScrollToTop />
      <Switch>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/blog-page">
          <BlogPage />
        </Route>
        <Route path="/recipe-details/:recipeId">
          <RecipeDetailsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Inbox />
      <Footer />

      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginpClose}
        handleSignupClose={handleSignupClose}
      />
    </>
  );
}

export default App;
