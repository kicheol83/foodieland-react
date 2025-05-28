import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function LeanMore() {
  return (
    <div className="lean-more-frame">
      <Container>
        <Stack className="lean-more-box" justifyContent={"row"}>
          <Box className="txt-box" flexDirection={"column"}>
            <Typography className="lean-more-title">
              Everyone can be a chef in their own kitchen
            </Typography>
            <Typography className="lean-more-text">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </Typography>
            <Button
              className="lean-more-button"
              variant="contained"
              sx={{
                background: "black",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Lean More
            </Button>
          </Box>
          <img className="lean-more-img" src="/img/happy-men.webp" alt="" />
          <div className="img-back"></div>
          <img className="meat-small" src="/icons/meat-small.svg" alt="" />
          <img className="piyoz" src="/icons/piyoz.svg" alt="" />
          <img className="cabbage" src="/icons/cabbage.svg" alt="" />
          <img className="tomato" src="/icons/tomato.svg" alt="" />
        </Stack>
      </Container>
    </div>
  );
}
