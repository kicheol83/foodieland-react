import {
  Box,
  Button,
  Container,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Inbox() {
  const [email, setEmail] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubscribe = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Iltimos, to'g'ri email kiriting.");
      return;
    }

    // 🔹 Bu yerda siz serverga yuborishingiz mumkin
    console.log("Yuborilgan email:", email);

    // 🔹 Email yuborilgan deb hisoblab inputni tozalaymiz va habar ko'rsatamiz
    setEmail("");
    setSuccessOpen(true);
  };

  const handleClose = () => {
    setSuccessOpen(false);
  };

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
            Discover hand-picked recipes, expert tips, and kitchen inspiration
            delivered straight to your inbox every week
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    borderRadius: 0,
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleSubscribe}
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

        {/* ✅ Snackbar for success message */}
        <Snackbar
          open={successOpen}
          onClose={handleClose}
          message="Siz Foodieland saytiga muvaffaqiyatli obuna bo‘ldingiz!"
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </div>
  );
}
