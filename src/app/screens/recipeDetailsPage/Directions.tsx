import { Box, Checkbox, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  retrieveRecipeCreateAuthor,
  retrieveRecipeHealthRice,
} from "./selector";
import { createSelector } from "@reduxjs/toolkit";
import { Recipe } from "../../../libs/types/recipe";
import { useSelector } from "react-redux";

const recipeHealthRiceRetrieve = createSelector(
  retrieveRecipeHealthRice,
  (healthRice) => ({ healthRice })
);

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Directions() {
  const { healthRice } = useSelector(recipeHealthRiceRetrieve);

  const [directions, setDirections] = useState<string[]>(
    healthRice?.recipeDirections || []
  );
  const [checkedStates, setCheckedStates] = useState<boolean[]>([]);

  useEffect(() => {
    if (healthRice?.recipeDirections) {
      setDirections(healthRice.recipeDirections);
      setCheckedStates(
        new Array(healthRice.recipeDirections.length).fill(false)
      );
    }
  }, [healthRice]);

  const handleCheckBoxChange = (index: number) => {
    const updated = [...checkedStates];
    updated[index] = !updated[index];
    setCheckedStates(updated);
  };

  const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];
  const [checkedSteps, setCheckedSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

  return (
    <div className="directions-frame">
      <Container>
        <Stack className="directions-box" flexDirection={"column"}>
          <Typography className="directions-text">Directions</Typography>
          {directions.map((item, index) => (
            <Box
              mt={"32px"}
              key={index}
              className="checkbox"
              display={"flex"}
              flexDirection={"column"}
            >
              <Box flexDirection={"row"} display={"flex"}>
                <Checkbox
                  checked={checkedStates[index]}
                  onChange={() => handleCheckBoxChange(index)}
                  className="check-box1"
                  {...label}
                  color="success"
                />
                <Typography
                  className="directions-font"
                  ml={"15px"}
                  mt={"5px"}
                  sx={{
                    textDecoration: checkedStates[index]
                      ? "line-through"
                      : "none",
                    opacity: checkedStates[index] ? 0.5 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {steps[index]?.label || `Step ${index + 1}`}
                </Typography>
              </Box>
              <Box className="check-txt" ml={"48px"} flexDirection={"row"}>
                <Typography mt={"20px"}>{item}</Typography>
              </Box>
            </Box>
          ))}

          {/* COOKER IMG */}
          <img
            style={{ marginTop: "48px", width: "843px", marginLeft: "34px" }}
            className="cooker-img"
            src="/img/cooker.png"
            alt=""
          />
        </Stack>
      </Container>
    </div>
  );
}
