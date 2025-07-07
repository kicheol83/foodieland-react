import { Facebook, Instagram, Logout, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import { useGlobals } from "../../hooks/useGlobal";
import { serverApi } from "../../../libs/config";

interface AuthProps {
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  anchorEl: HTMLElement | null;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}

export default function Navbar(props: AuthProps) {
  const {
    setLoginOpen,
    setSignupOpen,
    anchorEl,
    handleLogoutClick,
    handleCloseLogout,
    handleLogoutRequest,
  } = props;
  const { authMember } = useGlobals();

  return (
    <div className="navbar">
      <Container sx={{ width: "auto", height: "38px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box mt={"25px"}>
            <NavLink to="/">
              <img
                style={{ width: "110px", height: "30px" }}
                src="/img/Foodieland1.webp"
                alt=""
              />
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            minWidth={"700px"}
            minHeight={"20px"}
            alignItems={"center"}
            mt={"25px"}
            className="header-tsx"
          >
            <Box className={"hover-line"}>
              <NavLink
                to="/"
                className={"link-text"}
                activeClassName="underline"
              >
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/recipe-details" className={"link-text"}>
                Recipes
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/blog-page" className={"link-text"}>
                Blog
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/user" className={"link-text"}>
                  User
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" className={"link-text"}>
                Help
              </NavLink>
            </Box>
            {!authMember ? (
              <>
                <Box className={"hover-line"}>
                  <Button
                    sx={{ background: "black", color: "white" }}
                    onClick={() => setSignupOpen(true)}
                  >
                    Signup
                  </Button>
                </Box>
              </>
            ) : null}
            {!authMember ? (
              <Box className={"hover-line"}>
                <Button
                  sx={{ background: "#3c7cf6", color: "white", ml: "-60px" }}
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember?.memberImage}`
                    : "/icons/default-user.svg"
                }
                alt=""
                aria-haspopup={"true"}
                onClick={handleLogoutClick}
              />
            )}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
              id="account-menu"
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            minWidth={"133px"}
            minHeight={"22px"}
            sx={{ mt: "25px" }}
          >
            <Facebook sx={{ minWidth: "10px", minHeight: "20px" }} />
            <Twitter sx={{ minWidth: "22px", minHeight: "18px" }} />
            <Instagram sx={{ minWidth: "22px", minHeight: "22px" }} />
          </Stack>
        </Stack>
      </Container>
      <Box className={"botton-line"}></Box>
    </div>
  );
}
