import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

interface information {
  id: number;
  ingredients: string;
  sauce: string;
  directions: string;
  checkedIngredient: boolean;
  checkedSauce: boolean;
}

const ingredientsData: information[] = [
  {
    id: 1,
    ingredients: "2 ta tuxum",
    sauce: "birinchi qogirasiz",
    checkedIngredient: false,
    checkedSauce: false,
    directions:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 2,
    ingredients: "2 ta tuxum",
    sauce: "birinchi qogirasiz",
    checkedIngredient: false,
    checkedSauce: false,
    directions:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 3,
    ingredients: "2 ta tuxum",
    sauce: "birinchi qogirasiz",
    checkedIngredient: false,
    checkedSauce: false,
    directions:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 4,
    ingredients: "2 ta tuxum",
    sauce: "birinchi qogirasiz",
    checkedIngredient: false,
    checkedSauce: false,
    directions:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 5,
    ingredients: "2 ta tuxum",
    sauce: "birinchi qogirasiz",
    checkedIngredient: false,
    checkedSauce: false,
    directions:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

/** OTHER RECIPE DATA **/
interface recipe {
  id: number;
  name: string;
  image: string;
  creator: string;
}

const list: recipe[] = [
  {
    id: 1,
    name: "Chicken Meatball with Creamy Chees",
    image: "/img/rice.webp",
    creator: "By Adreas Paula",
  },
  {
    id: 1,
    name: "Chicken Meatball with Creamy Chees",
    image: "/img/rice.webp",
    creator: "By Adreas Paula",
  },
  {
    id: 1,
    name: "Chicken Meatball with Creamy Chees",
    image: "/img/rice.webp",
    creator: "By Adreas Paula",
  },
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Ingredients() {
  const [ingredients, setIngredients] =
    useState<information[]>(ingredientsData);

  const [recipe, setRecipe] = useState<recipe[]>(list);
  const handleCheckBoxChange = (id: number, type: "ingredient" | "sauce") => {
    const update = ingredients.map((item) =>
      item.id === id
        ? {
            ...item,
            checkedIngredient:
              type === "ingredient"
                ? !item.checkedIngredient
                : item.checkedIngredient,
            checkedSauce:
              type === "sauce" ? !item.checkedSauce : item.checkedSauce,
          }
        : item
    );
    setIngredients(update);
  };
  return (
    <div className="ingredients-frame">
      <Container>
        <Stack
          className="ing-frame"
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box className="ing-box1" flexDirection={"column"}>
            <Typography className="ing-title">Ingredients</Typography>
            <Typography className="dish-text">For main dish</Typography>

            {/* INGREDIENT CHECKBOXES */}
            {ingredients.map((item) => (
              <Box
                key={item.id}
                className="checkbox"
                display={"flex"}
                flexDirection={"row"}
              >
                <Checkbox
                  checked={item.checkedIngredient}
                  onChange={() => handleCheckBoxChange(item.id, "ingredient")}
                  className="check-box1"
                  {...label}
                  color="success"
                />
                <Typography
                  className="check-text"
                  ml={"15px"}
                  sx={{
                    textDecoration: item.checkedIngredient
                      ? "line-through"
                      : "none",
                    opacity: item.checkedIngredient ? 0.5 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.ingredients}
                </Typography>
              </Box>
            ))}
            <div className="bott-line" style={{ marginTop: "27px" }}></div>

            <Typography mt={"64px"} className="ing-title">
              For the sauce
            </Typography>

            {/* SAUCE CHECKBOXES */}
            {ingredients.map((item) => (
              <Box
                key={item.id}
                className="checkbox"
                display={"flex"}
                flexDirection={"row"}
              >
                <Checkbox
                  checked={item.checkedSauce}
                  onChange={() => handleCheckBoxChange(item.id, "sauce")}
                  className="check-box1"
                  {...label}
                  color="success"
                />
                <Typography
                  className="check-text"
                  ml={"15px"}
                  sx={{
                    textDecoration: item.checkedSauce ? "line-through" : "none",
                    opacity: item.checkedSauce ? 0.5 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.sauce}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* OTHER RECIPE */}
          <Box className="recipe">
            <Stack className="recipe-box" flexDirection={"column"}>
              <Typography className="recipe-text">Other Recipe</Typography>

              {list.map((item) => (
                <Box
                  key={item.id}
                  className="recipes"
                  display="flex"
                  flexDirection="row"
                  mt={2}
                >
                  <img className="img" src={item.image} alt="" />
                  <Box className="recipe-text">
                    <Typography className="big" ml={"24px"}>
                      {item.name}
                    </Typography>
                    <Typography className="small" ml={"24px"}>
                      {item.creator}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
            <Box className="icon-foto">
              <img className="green" src="/img/green-back.png" alt="" />
              <img className="dont" src="/img/dont.png" alt="" />
              <img className="star" src="/icons/star.svg" alt="" />
              <img className="www" src="/icons/www.svg" alt="" />
              <img className="one" src="/icons/01.svg" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
