import React from "react";
import "../css/app.css";
import { Box, Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container sx={{background: "red"}}>
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Foodieland
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
