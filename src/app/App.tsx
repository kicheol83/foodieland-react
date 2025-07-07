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
import AuthenticationModal from "./components/auth";
import { useGlobals } from "./hooks/useGlobal";
import MemberService from "./services/MemberService";
import { sweetErrorHandling, sweetTopSuccessAlert } from "../libs/sweetAlert";
import { Messages } from "../libs/config";
import "../css/app.css";
import "../css/navbar.css";
import "../css/home.css";
import "../css/footer.css";
import "../css/inbox.css";
import "../css/recipe.css";
import "../css/blog.css";
import "../css/help.css";
import "../css/userPage.css";

function App() {
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  /** HANDLERS **/
  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginpClose = () => setLoginOpen(false);
  const { setAuthMember } = useGlobals();
  const authService = new MemberService();
  useEffect(() => {
    const fetchMemberFromCookie = async () => {
      try {
        const existing = localStorage.getItem("memberData");
        if (!existing || existing === "undefined") {
          const member = await authService.loginViaCookie();
          setAuthMember(member);
        }
      } catch (err) {
        console.log("No active session from cookie.");
      }
    };

    fetchMemberFromCookie();
  }, []);

  const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseLogout = () => setAnchorEl(null);
  const handleLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();

      await sweetTopSuccessAlert("logout sucess", 900);
      setAuthMember(null);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1);
    }
  };

  return (
    <>
      <Navbar
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
        anchorEl={anchorEl}
        handleLogoutClick={handleLogoutClick}
        handleCloseLogout={handleCloseLogout}
        handleLogoutRequest={handleLogoutRequest}
      />
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
