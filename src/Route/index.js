import React from "react";
import { Route, Routes } from "react-router-dom";
import Login1 from "../Page/Login1";
import Login2 from "../Page/Login222";
import Home from "../Page/Home";
import Sing from "../Page/Sing"
import Logout from "../Component/Logout/Logout";
import About from "../Page/About";
import Bar from "../Component/Web/Bar";
import Side from "../Page/Side";
import Profile from "../Page/Profile";
import { Box } from "@mui/material";



export default function RoutePage() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/login2" element={<Login2 />} /> 
    </Routes>
    <>

    <Bar/>
    <Box  sx={{ mt:10  }}>
    <Routes>
      {/* <Route path="/" element={<Login1 />} /> */}
      {/* <Route path="/login2" element={<Login2 />} /> */}
      <Route path="/home" element={<Home/>} />
      <Route path="/Sing" element={<Sing />} />
      <Route path="/Side" element={<Side />} />
      <Route path="/about" element={<About />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </Box>
   </>
   </>
  );
}



