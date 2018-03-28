import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/AppRouter";
import $ from "jquery";
import jQuery from "jquery";
import "./App.css";
import "./w3.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
render(
  <BrowserRouter>
    <div className="container-fluid">
      <AppRouter />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
