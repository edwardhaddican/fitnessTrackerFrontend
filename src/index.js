import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Register, Login } from "./components";

const App = () => {
  return (
    <div id="App">
      <h1>Hello, World!!!</h1>
      <Header />
      <Register />
      <Login />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
