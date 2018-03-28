import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let self = this;
    const state = this.state;
    axios.get("http://localhost:8888/api/deals").then(function(response) {
      state["data"] = [...response.data];
      self.setState(state);
    });
  }

  render() {
    return (
      <div className="App">
        <table className="w3-table w3-bordered w3-striped w3-border test w3-hoverable">
          <tbody>
            <tr className="w3-teal">
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
            </tr>
            {this.state.data.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link to={"/Employee/" + item._id}>
                    {this.state.data[i].fname}
                  </Link>
                </td>
                <td>{this.state.data[i].lname}</td>
                <td>{this.state.data[i].email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employees;
