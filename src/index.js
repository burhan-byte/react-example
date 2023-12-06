import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import reducers from "./reducer1"
import { Button } from "bootstrap";
// import constants1 from "./reducer1/register.reducer";


var middlewares = (middlewares = applyMiddleware(thunk, logger));

const store = createStore(reducers, middlewares);

// const myButton = new Button();
// const store = createStore(applyMiddleware(thunk,logger));
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
    </React.StrictMode>
    
);



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
