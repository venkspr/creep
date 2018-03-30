import axios from "axios";
import React, { Component } from "react";
import toastr from "toastr";
import EmployeesView from "./../view/EmployeesView";

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
    axios
      .get("http://vrangara2:8080/angular/qualcomm/api/names/")
      .then(response => {
        this.setState({ data: [...response.data.items] });
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
      .post("http://vrangara2:8080/angular/qualcomm/api/deletenames/", { id })
      .then(response => {
        axios
          .get("http://vrangara2:8080/angular/qualcomm/api/names/")
          .then(response => {
            this.setState({ data: [...response.data.items] });
            toastr.warning("Data Succesfully deleted");
          });
      })
      .catch(function(error) {
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

  submitHandler = async event => {
    const { fname, lname, email } = this.state;
    let response;
    try {
      response = await axios.post(
        "http://vrangara2:8080/angular/qualcomm/api/names/",
        {
          fname,
          lname,
          email
        }
      );
      toastr.success("Data Succesfully Stored");
    } catch (e) {
      toastr.options = {
        positionClass: "toast-top-center"
      };
      toastr.error(
        "There was a problem connecting to the server. Unable to save data. Please try again later. If the problem persists please email support"
      );
      return;
    } //post

    response = await axios.get(
      "http://vrangara2:8080/angular/qualcomm/api/names/"
    );
    //requery
    this.setState({ data: [...response.data.items] });
    response = await axios.get("https://randomuser.me/api/");
    this.setState({
      fname: response.data.results[0].name.first,
      lname: response.data.results[0].name.last,
      email: response.data.results[0].email
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
