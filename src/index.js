import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/AppRouter";
import "./App.css";
import "./w3.css";

render(
  <BrowserRouter>
    <div className="container-fluid">
      <AppRouter />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
