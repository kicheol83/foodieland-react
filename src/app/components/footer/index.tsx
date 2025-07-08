import { Box, Container, Stack } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Stack flexDirection={"column"} className="footer-box-bottom">
          <Box className="afisha">
            <img src="/img/Foodieland1.webp" alt="" />
          </Box>
          <Box className="footer-text">
            Welcome to Foodieland — the first project by Ned, a student of
            MIT25.
          </Box>
          <div className="center-line"></div>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={"60px"}
          >
            <Box className="webflow">© 2025 Devex. Creator by MIT25-NED</Box>
            <Facebook sx={{ ml: "100px" }} />
            <Twitter sx={{ ml: "40px" }} />
            <Instagram sx={{ ml: "40px" }} />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
