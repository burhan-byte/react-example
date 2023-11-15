import React from "react";
import { Route, Routes } from "react-router-dom";
import Login1 from "../Page/Login1";
import Login2 from "../Page/Login222";
import LoginTest from "../Page/LoginTest";
import Home from "../Page/Home";

export default function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/loginTest" element={<LoginTest />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
