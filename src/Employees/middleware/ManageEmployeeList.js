import axios from "axios";
import React, { Component } from "react";
import toastr from "toastr";
import EmployeesView from "./../view/EmployeesView";
import { saveData, deleteOneRow } from "./../../api/DBApi";

class ManageEmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fname: "",
      lname: "",
      email: ""
    };
  }
  componentDidMount() {
    let self = this;
    const state = this.state;
    axios.get("http://localhost:8888/api/deals").then(response => {
      console.log(response.data);
      //console.log([...response.data]);

      this.setState({ data: [...response.data] });
    });
    axios.get("https://randomuser.me/api/").then(response => {
      //console.log({ ...response.data.results[0].name });
      this.setState({
        fname: response.data.results[0].name.first,
        lname: response.data.results[0].name.last,
        email: response.data.results[0].email
      });
    });
  }

  deleteOneHandler = id => {
    axios
      .get("http://localhost:8888/api/deals/delete/" + id)
      .then(response => {
        axios.get("http://localhost:8888/api/deals").then(response => {
          this.setState({ data: [...response.data] });
          toastr.warning("Data Succesfully deleted");
        });
      })
      .catch(function(error) {
        toastr.options = {
          positionClass: "toast-top-center"
        };
        toastr.error(
          "Unable to delete record. There seems to be a problem in connecting to the backend server. Please try again later."
        );
      });
  };

  keyPress = e => {
    if (e.key === "Enter") {
      this.submitHandler(e);
    }
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  submitHandler = event => {
    const { fname, lname, email } = this.state;
    axios
      .post("http://localhost:8888/api/deals", { fname, lname, email }) //post
      .then(response => {
        axios.get("http://localhost:8888/api/deals").then(response => {
          //requery
          this.setState({ data: [...response.data] });
          axios.get("https://randomuser.me/api/").then(response => {
            //console.log({ ...response.data.results[0].name });
            this.setState({
              fname: response.data.results[0].name.first,
              lname: response.data.results[0].name.last,
              email: response.data.results[0].email
            });
          });

          toastr.success("Data Succesfully Stored");
        });
      })
      .catch(function(error) {
        toastr.options = {
          positionClass: "toast-top-center"
        };
        toastr.error(
          "Unable to save data. There seems to be a problem in connecting to the backend server. Please try again later."
        );
      });
    document.getElementsByName("fname")[0].focus();
  };

  render() {
    return (
      <div className="App">
        <EmployeesView {...this} />
      </div>
    );
  }
}

export default ManageEmployeeList;
