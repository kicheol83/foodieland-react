import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

const ModalImg = styled.img`
  width: 62%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  margin-top: 9px;
  margin-left: 10px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes = useStyles();

  /** HANDLERS **/

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "800px" }}
          >
            <ModalImg
              src={"/img/brooke-lark.jpg"}
              alt="camera"
              style={{ width: "-56%" }}
            />
            <Stack sx={{ marginLeft: "-67px", alignItems: "center" }}>
              <h2>Signup Form</h2>
              <TextField
                sx={{ marginTop: "7px" }}
                id="outlined-basic"
                label="username"
                variant="outlined"
              />
              <TextField
                sx={{ my: "17px" }}
                id="outlined-basic"
                label="phone number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
              />
              <Box display={"flex"} flexDirection={"row"} marginTop={"20px"}>
                <Fab
                  sx={{ marginTop: "30px", width: "120px" }}
                  variant="extended"
                  color="primary"
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Signup
                </Fab>

                <Fab
                  sx={{ marginTop: "30px", width: "120px" }}
                  variant="extended"
                  color="primary"
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Google
                </Fab>
                <Fab
                  sx={{ marginTop: "30px", width: "120px" }}
                  variant="extended"
                  color="primary"
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Telegram
                </Fab>
              </Box>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "800px" }}
          >
            <ModalImg src={"/img/brooke-lark.jpg"} style={{ width: "49%" }} />
            <Stack
              sx={{
                marginLeft: "11px",
                marginTop: "25px",
                alignItems: "center",
              }}
            >
              <h2>Login Form</h2>
              <TextField
                id="outlined-basic"
                label="username"
                variant="outlined"
                sx={{ my: "10px" }}
              />
              <TextField
                id={"outlined-basic"}
                label={"password"}
                variant={"outlined"}
                type={"password"}
              />
              <Box display={"flex"} flexDirection={"row"}>
                <Fab
                  sx={{ marginTop: "27px", width: "120px" }}
                  variant={"extended"}
                  color={"primary"}
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Login
                </Fab>
                <Fab
                  sx={{ marginTop: "30px", width: "120px" }}
                  variant="extended"
                  color="primary"
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Google
                </Fab>
                <Fab
                  sx={{ marginTop: "30px", width: "120px" }}
                  variant="extended"
                  color="primary"
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Telegram
                </Fab>
              </Box>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
