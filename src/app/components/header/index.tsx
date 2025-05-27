import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const authMember = true;
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
                src="/img/Foodieland1.png"
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
              <NavLink to="/blog-list" className={"link-text"}>
                Blog
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/blog-post" className={"link-text"}>
                  Post
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/user" className={"link-text"}>
                  User
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/contact" className={"link-text"}>
                Contact
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/help" className={"link-text"}>
                Help
              </NavLink>
            </Box>
            {!authMember ? (
              <Box className={"hover-line"}>
                <Button sx={{ background: "black", color: "white"  }}>
                  Signup
                </Button>
              </Box>
            ) : (
              <img alt="" />
            )}
            {!authMember ? (
              <Box className={"hover-line"}>
                <Button sx={{ background: "#3c7cf6", color: "white", ml: "-60px"}}>
                  Login
                </Button>
              </Box>
            ) : (
              <img alt="" />
            )}
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
