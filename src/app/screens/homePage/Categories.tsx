import React, { useState } from "react";
import { Box, Button, Collapse, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

export default function Categories() {
  const history = useHistory();
  const [showMore, setShowMore] = useState(true);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };


  const pushRecipePage = () => {
    history.push("/recipe-details");
  };
  return (
    <div className="categories-frame">
      <Container>
        <Stack className="category-box" flexDirection={"column"}>
          <Stack
            className="category-title"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Typography width={"238px"} height={"50px"} className="cate-text">
              Categories
            </Typography>
            <Button
              onClick={handleToggle}
              className="cate-button"
              variant="outlined"
            >
              <p className="button-text">
                {showMore ? "Hide Categories" : "View All Categories"}
              </p>
            </Button>
          </Stack>
          <Collapse in={showMore}>
            <Stack
              className="category-recipes"
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box"
                mt={"90px"}
                onClick={pushRecipePage}
              >
                <img className="cate-icons" src="/icons/breakfast.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  Breakfast
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box vegan"
                mt={"90px"}
                onClick={pushRecipePage}
                sx={{ backgroundColor: "FFE5E5" }}
              >
                <img className="cate-icons" src="/icons/vegan.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  Vegan
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box meat"
                mt={"90px"}
                onClick={pushRecipePage}
              >
                <img className="cate-icons" src="/icons/meat.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  Meat
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box dessert"
                mt={"90px"}
                onClick={pushRecipePage}
              >
                <img className="cate-icons" src="/icons/dessert.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  Dessert
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box lunch"
                mt={"90px"}
                onClick={pushRecipePage}
              >
                <img className="cate-icons" src="/icons/lunch.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  Lunch
                </Typography>
              </Box>
              <Box
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                className="category-recipe-box chocolate"
                mt={"90px"}
                onClick={pushRecipePage}
              >
                <img className="cate-icons" src="/icons/chocolate.svg" alt="" />
                <Typography className="breakfast" mt={"20px"}>
                  Chocolate
                </Typography>
              </Box>
            </Stack>
          </Collapse>
          {}
        </Stack>
      </Container>
    </div>
  );
}
