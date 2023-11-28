import React from "react";
import { Route, Routes } from "react-router-dom";
import Login1 from "../Page/Login1";
import Login2 from "../Page/Login222";
import Home from "../Page/Home";
import Sing from "../Page/Sing";
import Logout from "../Component/Logout/Logout";
<<<<<<< HEAD
import About from "../Page/About";

=======
import Bar from "../Component/Web/Bar";
import Side from "../Page/Side";
>>>>>>> 3d6b0a67e7bf3babfdb08d91de065a8cf486a1ac

export default function RoutePage() {
  return (
    <>
<<<<<<< HEAD
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
=======
     <Routes>
     <Route path="/" element={<Login1 />} />
     </Routes>

    <>

    <Bar/>
    <Routes>
      {/* <Route path="/" element={<Login1 />} /> */}
      <Route path="/login2" element={<Login2 />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/Sing" element={<Sing />} />
      <Route path="/Side" element={<Side />} />
        
    </Routes>
   </>
   </>
  );
>>>>>>> 3d6b0a67e7bf3babfdb08d91de065a8cf486a1ac
}



