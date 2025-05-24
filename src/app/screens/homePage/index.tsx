import {
  Box,
  Button,
  colors,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

export function HomePage() {
  return (
    <div className="home-page">
      <Container>
        <Stack className="stk">
          <Stack className="box-item">
            <Stack
              className="hot-recipes"
              flexDirection={"row"}
              mt={"50px"}
              ml={"50px"}
            >
              <img src="/icons/book.svg" alt="" />
              <p>Hot Recipes</p>
            </Stack>
            <Typography ml={"50px"} mt={"32px"} className="tp-1">
              Spicy delicious chicken wings
            </Typography>
            <Typography ml={"50px"} mt={"24px"} className="tp-2">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </Typography>
            <Stack flexDirection={"row"} mt={"30px"}>
              <Box className="rectangle" ml={"50px"}>
                <AccessTimeOutlinedIcon />
                <Typography ml={"10px"}>30 Minutes</Typography>
              </Box>
              <Box className="rectangle-1" ml={"16px"}>
                <FlatwareOutlinedIcon />
                <Typography ml={"10px"}>Chicken</Typography>
              </Box>
            </Stack>
            <Stack flexDirection={"row"}>
              <Box className="men-icon" mt={"99px"}>
                <img src="/icons/ellipse-men.svg" alt="" />
              </Box>
              <Box className="men-title" mt={"104px"} ml={"16px"}>
                <Typography className="typ-1">John Smith</Typography>
                <Typography className="typ-2" mt={"5px"}>15 March 2022</Typography>
              </Box>
              <Box
                className="view-button"
                flexDirection={"row"}
                ml={"157px"}
                mt={"99px"}
              >
                <Button className="view">View Recipes</Button>
                <PlayCircleOutlineOutlinedIcon sx={{ color: "white" }} />
              </Box>
            </Stack>
          </Stack>
          <Stack className="box-img">
            <img src="/img/chicken-back.png" alt="" />
          </Stack>
          <Box className="center-icon">
            <img className="icon-ellipse" src="/icons/ellipse-white.svg" alt="" />
            <img className="icon-hand" src="/img/ramen.png" alt="" />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

/** 42-qatorga moment qoyilishi kerak **/
