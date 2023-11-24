import React from "react";
import { Route, Routes } from "react-router-dom";
import Login1 from "../Page/Login1";
import Login2 from "../Page/Login222";
import Home from "../Page/Home";
import Sing from "../Page/Sing";
import Logout from "../Component/Logout/Logout";
import Bar from "../Component/Web/Bar";

export default function RoutePage() {
  return (
    <Bar>
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/Sing" element={<Sing />} />    
    </Routes>
    </Bar>
  );
}



