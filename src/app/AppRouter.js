import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Employees from "./../Employees/view/Employees";
import ManageEmployeeList from "./../Employees/middleware/ManageEmployeeList";
import Employee from "./../Employees/view/Employee";

import "./../App.css";

const AppRouter = () => (
  <Router>
    <div>
      <div id="navbarNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Employees">Manage Employees</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Route exact path="/" component={Employees} />
      <Route exact path="/Employees" component={ManageEmployeeList} />
      <Route path="/Employee/:id" component={Employee} />
    </div>
  </Router>
);

export default AppRouter;
