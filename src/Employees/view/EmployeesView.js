import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Table from "./../../components/table/Table";

const EmployeesView = props => {
  return (
    <div className="container-fluid">
      <input
        type="text"
        name="fname"
        value={props.state.fname}
        onChange={props.handleChange}
        onKeyPress={props.keyPress}
      />
      <input
        type="text"
        name="lname"
        value={props.state.lname}
        onChange={props.handleChange}
        onKeyPress={props.keyPress}
      />
      <input
        type="text"
        name="email"
        value={props.state.email}
        onChange={props.handleChange}
        onKeyPress={props.keyPress}
      />

      <button onClick={props.submitHandler}>Submit</button>

      <Table data={props.state.data} {...props} />
    </div>
  );
};

export default EmployeesView;
