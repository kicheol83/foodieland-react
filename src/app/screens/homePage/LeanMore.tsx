import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

export default function LeanMore() {
  const history = useHistory();

  const choosenRecipeHandlar = () => {
    history.push(`/blog-page`);
  };
  return (
    <div className="lean-more-frame">
      <Container>
        <Stack className="lean-more-box" justifyContent={"row"}>
          <Box className="txt-box" flexDirection={"column"}>
            <Typography className="lean-more-title">
              Everyone can be a chef in their own kitchen
            </Typography>
            <Typography className="lean-more-text">
              With the right guidance and ingredients, you can turn everyday
              meals into restaurant-quality experiences
            </Typography>
            <Button
              className="lean-more-button"
              variant="contained"
              onClick={choosenRecipeHandlar}
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
