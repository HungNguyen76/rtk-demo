import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import countReducer from "./redux/reducer";
// import store from './redux/index'
import store from './redux/todo'
// const store=createStore(countReducer)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
