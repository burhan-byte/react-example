import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger";
import rootReducer from './reducers'; 
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

const ReduxApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(ReduxApp, document.getElementById('root'));

reportWebVitals();



// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
// import { createStore, applyMiddleware, compose } from 'redux'; 

// import rootReducer from './reducers';
// import { Provider } from "react-redux";
// import { thunk } from 'redux-thunk';


// import logger from "redux-logger";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk, logger)) 
// );

// const ReduxApp = (
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

// ReactDOM.render(ReduxApp, document.getElementById('root'));

// reportWebVitals();
