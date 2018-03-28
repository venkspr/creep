import React from "react";
import Button from "./Button";

const Table = props => {
  return (
    <table className="w3-table w3-bordered w3-striped w3-border test w3-hoverable">
      <tbody>
        <tr className="w3-teal">
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
        {props.data.map((item, i) => (
          <tr key={i}>
            <td>
              <input
                type="text"
                name={"fname"}
                value={props.data[i].fname}
                onChange={e => {
                  props.handleTableChange(item._id, i, e);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name={"lname"}
                value={props.data[i].lname}
                onChange={props.handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name={"email"}
                value={props.data[i].email}
                onChange={props.handleChange}
              />
            </td>
            <td>
              <Button {...props} _id={props.data[i]._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
