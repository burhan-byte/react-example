import React from "react";
import { Route, Routes } from "react-router-dom";
import Login1 from "../Page/Login1";
import Login2 from "../Page/Login222";
import Sing from "../Page/Sing";




export default function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/Sing" element={<Sing />} />
      
    </Routes>
  );
}



