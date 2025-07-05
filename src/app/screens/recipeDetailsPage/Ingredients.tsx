import { Box, Checkbox, Container, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { retrieveRecipeHealthRice } from "./selector";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { retrieveRecipeTasty } from "../homePage/selector";
import { serverApi } from "../../../libs/config";
import { Recipe } from "../../../libs/types/recipe";
import dayjs from "dayjs";

const recipeHealthRiceRetrieve = createSelector(
  retrieveRecipeHealthRice,
  (healthRice) => ({ healthRice })
);

const recipeTastyRetrieve = createSelector(
  retrieveRecipeTasty,
  (recipeTasty) => ({ recipeTasty })
);

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Ingredients() {
  const { healthRice } = useSelector(recipeHealthRiceRetrieve);
  const { recipeTasty } = useSelector(recipeTastyRetrieve);

  const [checkedStates, setCheckedStates] = useState<boolean[][]>([]);

  useEffect(() => {
    if (healthRice?.recipeIngredients) {
      const initialChecked = healthRice.recipeIngredients.map((group: any) =>
        new Array(group.items.length).fill(false)
      );
      setCheckedStates(initialChecked);
    }
  }, [healthRice]);

  const handleCheckBoxChange = (groupIndex: number, itemIndex: number) => {
    const updated = [...checkedStates];
    updated[groupIndex][itemIndex] = !updated[groupIndex][itemIndex];
    setCheckedStates(updated);
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

            {healthRice?.recipeIngredients?.map(
              (group: any, groupIndex: number) => (
                <Box key={group._id} mt={groupIndex === 0 ? 0 : 8}>
                  <Typography
                    className="dish-text"
                    mt={groupIndex === 0 ? 0 : 8}
                  >
                    {group.title}
                  </Typography>

                  {group.items.map((item: string, itemIndex: number) => (
                    <Box
                      key={itemIndex}
                      className="checkbox"
                      display={"flex"}
                      flexDirection={"row"}
                      mt={"12px"}
                    >
                      <Checkbox
                        checked={
                          checkedStates[groupIndex]?.[itemIndex] || false
                        }
                        onChange={() =>
                          handleCheckBoxChange(groupIndex, itemIndex)
                        }
                        className="check-box1"
                        {...label}
                        color="success"
                      />
                      <Typography
                        className="check-text"
                        ml={"15px"}
                        sx={{
                          textDecoration: checkedStates[groupIndex]?.[itemIndex]
                            ? "line-through"
                            : "none",
                          opacity: checkedStates[groupIndex]?.[itemIndex]
                            ? 0.5
                            : 1,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}

                  {groupIndex === 0 && (
                    <div
                      className="bott-line"
                      style={{ marginTop: "27px" }}
                    ></div>
                  )}
                </Box>
              )
            )}
          </Box>

          {/* OTHER RECIPE SECTION – unchanged */}
          <Box className="recipe">
            <Stack className="recipe-box" flexDirection={"column"}>
              <Typography className="recipe-text">Top Recipe</Typography>

              {/**Other recipe */}
              {recipeTasty.length !== 0 ? (
                recipeTasty.map((recipe: Recipe) => {
                  const imagePath = `${serverApi}/${recipe.recipeImage[0]}`;
                  return (
                    <Box
                      key={recipe._id}
                      className="recipes"
                      display="flex"
                      flexDirection="row"
                      mt={2}
                    >
                      <img className="img" src={imagePath} alt="" />
                      <Box className="recipe-text">
                        <Typography className="big" ml={"24px"}>
                          {recipe.recipeName}
                        </Typography>
                        <Typography className="small" ml={"24px"}>
                          {dayjs(recipe?.createdAt).format("YYYY-MM-DD") ||
                            "no data"}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Box className="no-data">
                  Popular products are not available
                </Box>
              )}

              {/**Other recipe */}
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
