import React from "react";
import { Route, Routes } from "react-router-dom";
import Login1 from "../Page/Login1";
import Login2 from "../Page/Login222";
import Home from "../Page/Home";
import Sing from "../Page/Sing"
import About from "../Page/About";
import Bar from "../Component/Web/Bar";
import Side from "../Page/Side";
import Profile from "../Page/Profile";
import { Box } from "@mui/material";
import Chao from "../Page/Chao";
import Sine from "../Page/Sine";

// import { CreateStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { Provider } from "react-redux";
// import Reducers from "../Reducers";
// import logger from "redux-logger";


// const store = CreateStore(Reducers,applyMiddleware(thunk,logger));

// const ReduxApp = (
//   <Provider store={store}>
//     <App/>


//   </Provider>
// )

// ReactDOM.render(ReduxApp,document.getElementById('root'));

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
      <Route path="/sing" element={<Sing />} />
      <Route path="/side" element={<Side />} />
      <Route path="/sine" element={<Sine />} />
      <Route path="/chao" element={<Chao />} />

    </Routes>
    </Box>
   </>
   </>
  );
}



