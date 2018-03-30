import React from "react";

const Button = props => {
  return (
    <button
      text="Delete"
      value={props._id}
      onClick={e => props.deleteOneHandler(props.id, e)}
    >
      Delete
    </button>
  );
};

export default Button;
