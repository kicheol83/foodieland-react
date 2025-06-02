import { Box, Checkbox, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";

interface information {
  id: number;
  title: string;
  step1: string;
  step2: string;
  step3: string;
  checked: boolean;
  checkedStep1: boolean;
  checkedStep2: boolean;
  checkedStep3: boolean;
}
const ingredientsData: information[] = [
  {
    id: 1,
    checked: false,
    checkedStep1: false,
    checkedStep2: false,
    checkedStep3: false,
    title: "1. Lorem ipsum dolor sit amet",
    step1:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    step2:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    step3:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Directions() {
  const [ingredients, setIngredients] =
    useState<information[]>(ingredientsData);
    
  const handleCheckBoxChange = (
    id: number,
    type: "step1" | "step2" | "step3"
  ) => {
    const update = ingredients.map((item) =>
      item.id === id
        ? {
            ...item,
            checkedStep1:
              type === "step1" ? !item.checkedStep1 : item.checkedStep1,
            checkedStep2:
              type === "step2" ? !item.checkedStep2 : item.checkedStep2,
            checkedStep3:
              type === "step3" ? !item.checkedStep3 : item.checkedStep3,
          }
        : item
    );
    setIngredients(update);
  };

  return (
    <div className="directions-frame">
      <Container>
        <Stack className="directions-box" flexDirection={"column"}>
          <Typography className="directions-text">Directions</Typography>
          {ingredients.map((item) => (
            <Box
              mt={"32px"}
              key={item.id}
              className="checkbox"
              display={"flex"}
              flexDirection={"column"}
            >
              <Box flexDirection={"row"} display={"flex"}>
                <Checkbox
                  checked={item.checkedStep1}
                  onChange={() => handleCheckBoxChange(item.id, "step1")}
                  className="check-box1"
                  {...label}
                  color="success"
                />
                <Typography
                  className="directions-font"
                  ml={"15px"}
                  mt={"5px"}
                  sx={{
                    textDecoration: item.checkedStep1 ? "line-through" : "none",
                    opacity: item.checkedStep1 ? 0.5 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box className="check-txt" ml={"48px"} flexDirection={"row"}>
                <Typography mt={"20px"}>{item.step1}</Typography>
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
          {ingredients.map((item) => (
            <Box
              key={item.id}
              className="checkbox"
              display={"flex"}
              flexDirection={"column"}
              mt={"60px"}
            >
              <Box flexDirection={"row"} display={"flex"}>
                <Checkbox
                  checked={item.checkedStep2}
                  onChange={() => handleCheckBoxChange(item.id, "step2")}
                  className="check-box1"
                  {...label}
                  color="success"
                />
                <Typography
                  className="directions-font"
                  ml={"15px"}
                  mt={"5px"}
                  sx={{
                    textDecoration: item.checkedStep2 ? "line-through" : "none",
                    opacity: item.checkedStep2 ? 0.5 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box className="check-txt" ml={"48px"} flexDirection={"row"}>
                <Typography mt={"20px"}>{item.step2}</Typography>
              </Box>
            </Box>
          ))}

          {ingredients.map((item) => (
            <Box
              mt={"60px"}
              key={item.id}
              className="checkbox"
              display={"flex"}
              flexDirection={"column"}
            >
              <Box flexDirection={"row"} display={"flex"}>
                <Checkbox
                  checked={item.checkedStep3}
                  onChange={() => handleCheckBoxChange(item.id, "step3")}
                  className="check-box1"
                  {...label}
                  color="success"
                />
                <Typography
                  className="directions-font"
                  ml={"15px"}
                  mt={"5px"}
                  sx={{
                    textDecoration: item.checkedStep3 ? "line-through" : "none",
                    opacity: item.checkedStep3 ? 0.5 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box className="check-txt" ml={"48px"} flexDirection={"row"}>
                <Typography mt={"20px"}>{item.step3}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </div>
  );
}
