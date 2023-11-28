import React from "react";
import { Route, Routes } from "react-router-dom";
import Login1 from "../Page/Login1";
import Login2 from "../Page/Login222";
import Home from "../Page/Home";
import Sing from "../Page/Sing";
import Logout from "../Component/Logout/Logout";
import About from "../Page/About";


export default function RoutePage() {
  return (
    <>
    <Routes>
      <Route path="/login2" element={<Login2 />} /> 
    </Routes>
    <>
   
    <Logout/>
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/Sing" element={<Sing />} />
      <Route path="/About" element={<About />} />
    </Routes>


    </>
    </>
    );
}



