import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginTest() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (username === "test" && password === "test") {
      localStorage.setItem("t", 1);
      alert("Login successful");
      navigate("/home");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              //   backgroundColor: "#007bff",
            }}
          >
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h5">Login</Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Button
                  variant="contained"
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "#007bff",
            }}
          >
            <Stack spacing={2} sx={{ mt: 2 }}>
              <img
                src={process.env.PUBLIC_URL + "/112.svg"}
                alt="logo"
                style={{
                  // minWidth: "100%",
                  display: "block",
                  // width: "50%",
                  // position: "relative",
                  zIndex: 5,
                }}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
