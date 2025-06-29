import { Button } from "@mui/material";

export default function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3005/auth/google"; // backenddagi Google auth route
  };

  return (
    <Button variant="contained" color="error" onClick={handleGoogleLogin}>
      Google
    </Button>
  );
}
