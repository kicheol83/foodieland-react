import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import GoogleLoginButton from "../GoogleLoginButton";
import { T } from "../../../libs/types/common";
import { Message } from "@mui/icons-material";
import { Messages } from "../../../libs/config";
import { LoginInput, MemberInput } from "../../../libs/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../libs/sweetAlert";
import { useGlobals } from "../../hooks/useGlobal";

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
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [memberEmail, setMemberEmail] = useState<string>("");
  const { setAuthMember } = useGlobals();

  /** HANDLERS **/
  const handleUserName = (e: T) => {
    setMemberNick(e.target.value);
  };
  const handleUserPhone = (e: T) => setMemberPhone(e.target.value);
  const handleUserPassword = (e: T) => setMemberPassword(e.target.value);
  const handleUserEmail = (e: T) => setMemberEmail(e.target.value);

  const handleEmailKeyDown = (e: T) => {
    if (e.key === "Enter" && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handleLoginRequest().then();
    }
  };

  const handleSignupRequest = async () => {
    try {
      const isFullfill =
        memberNick !== "" &&
        memberPhone !== "" &&
        memberPassword !== "" &&
        memberEmail !== "";
      if (!isFullfill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
        memberEmail: memberEmail,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      setAuthMember(result);
      handleSignupClose();
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFullfill =
        memberNick !== "" && memberPassword !== "" && memberEmail !== "";
      if (!isFullfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
        memberEmail: memberEmail,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      setAuthMember(result);
      handleLoginClose();
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  const { authMember } = useGlobals();

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
            <Stack sx={{ alignItems: "center" }}>
              <h2>Signup Form</h2>
              <TextField
                sx={{ marginTop: "7px" }}
                id="outlined-basic"
                label="username"
                variant="outlined"
                onChange={handleUserName}
              />
              <TextField
                sx={{ my: "17px" }}
                id="outlined-basic"
                label="phone number"
                variant="outlined"
                onChange={handleUserPhone}
              />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                onChange={handleUserPassword}
              />
              <Box className="emailbox" sx={{ marginTop: "16px" }}>
                <TextField
                  type="email"
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                  onChange={handleUserEmail}
                  onKeyDown={handleEmailKeyDown}
                />
              </Box>
              <Box display={"flex"} flexDirection={"row"} marginTop={"20px"}>
                <Fab
                  sx={{ marginTop: "30px", width: "120px" }}
                  variant="extended"
                  color="primary"
                  onClick={handleSignupRequest}
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Signup
                </Fab>

                <Fab
                  sx={{ marginTop: "30px", width: "120px" }}
                  variant="extended"
                  // color="primary"
                ></Fab>
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
                onChange={handleUserName}
              />
              <TextField
                id={"outlined-basic"}
                label={"password"}
                variant={"outlined"}
                type={"password"}
                onChange={handleUserPassword}
              />
              <Box className="emailbox" sx={{ marginTop: "16px" }}>
                <TextField
                  type="email"
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                  onChange={handleUserEmail}
                  onKeyDown={handleEmailKeyDown}
                />
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <Fab
                  sx={{ marginTop: "27px", width: "120px" }}
                  variant={"extended"}
                  color={"primary"}
                  onClick={handleLoginRequest}
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Login
                </Fab>
                <Fab
                  sx={{ marginTop: "30px", width: "120px" }}
                  variant="extended"
                  // color="primary"
                ></Fab>
              </Box>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
