import React, { Component } from "react";

const Employee = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

export default Employee;
