import React, { Component } from "react";

const Button = props => {
  return (
    <button
      text="Delete"
      value={props._id}
      onClick={e => props.deleteOneHandler(props._id, e)}
    >
      Delete
    </button>
  );
};

export default Button;
