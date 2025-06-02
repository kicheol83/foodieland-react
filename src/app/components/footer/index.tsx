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
            Lorem ipsum dolor sit amet, consectetuipisicing elit
          </Box>
          <div className="center-line"></div>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={"60px"}
          >
            <Box className="webflow">© 2020 Flowbase. Powered by Webflow</Box>
            <Facebook sx={{ ml: "100px" }} />
            <Twitter sx={{ ml: "40px" }} />
            <Instagram sx={{ ml: "40px" }} />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
