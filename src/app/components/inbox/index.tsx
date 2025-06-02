import { Box, Button, Container, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Inbox() {
  return (
    <div className="inbox">
      <Container>
        <Stack
          className="inbox-box"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"160px"}
          mb={"160px"}
        >
          <img className="inbox-salad-img1" src="/img/salad-fresh.png" alt="" />
          <img className="inbox-salad-img2" src="/img/rucola.webp" alt="" />
          <img className="inbox-salad-img3" src="/img/plate.webp" alt="" />
          <Typography className="text-inb-h3">
            Deliciousness to your inbox
          </Typography>
          <Typography className="text-inb" mt={"24px"}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Typography>
          <Box
            className="input-box"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f9f9f9",
              mt: "64px",
            }}
          >
            <Box
              className="input-inbox"
              sx={{
                width: 400,
                display: "flex",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                outline: "none",
                boxShadow: "none",
              }}
            >
              <TextField
                placeholder="Your email address..."
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    borderRadius: 0,
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  px: 4,
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
