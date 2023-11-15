import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    let t = localStorage.getItem("t");
    if (!t) {
      navigate("/loginTest");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        Home
        <Button
          variant="contained"
          onClick={() => {
            localStorage.removeItem("t");
            navigate("/loginTest");
          }}
        >
          Log Out
        </Button>
      </Box>
    </div>
  );
}
