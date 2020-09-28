import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Link, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInData: {},
      errors: {},
      success: {},
      formIsValid: true,
    };
  }
  handleChange(field, event) {
    let signInData = this.state.signInData;
    let errors = this.state.errors;
    signInData[field] = event.target.value;
    this.setState({ signInData });

    /*name validation*/
    if (!signInData["name"]) {
      this.state.formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof signInData["name"] !== "undefined") {
      if (!signInData["name"].match(/^[a-zA-Z]+$/)) {
        this.state.formIsValid = false;
        errors["name"] = "Only letters allowed";
      } else {
        this.state.formIsValid = true;
        errors["name"] = "";
      }
    }
    /*email validation*/
    if (!signInData["email"]) {
      this.state.formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    if (typeof signInData["email"] !== "undefined") {
      if (
        !signInData["email"].match(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        )
      ) {
        this.state.formIsValid = false;
        errors["email"] = "email not valid";
        this.state.success["email"] = "";
      } else {
        this.state.formIsValid = true;
        errors["email"] = "";
        this.state.success["email"] = "valid";
      }
    }
    /*phone validation*/
    if (!signInData["phone"]) {
      this.state.formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }
    if (typeof signInData["phone"] !== "undefined") {
      if (
        !signInData["phone"].match(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        )
      ) {
        this.state.formIsValid = false;
        errors["phone"] = "phone number not valid";
        this.state.success["phone"] = "";
      } else {
        this.state.formIsValid = true;
        errors["phone"] = "";
        this.state.success["phone"] = "valid";
      }
    }
  }
  /*date of birth*/

  regester(event) {
    if (this.state.formIsValid) {
      axios
        .post("http://localhost:8080/addMember", this.state.signInData)
        .then((response) => {
          console.log(Response);
        })
        .catch((error) => console.log(error));
      alert("Registered Successfully");
      window.location.replace("http://localhost:3000/loginPage");
    }
  }
  render() {
    return (
      <div className="signInPage">
        <div className="sign-In-Form">
          <h2>Registration Form</h2>
          <tr>
            <td>
              <input
                type="text"
                placeholder="enter name"
                onChange={this.handleChange.bind(this, "name")}
                value={this.state.signInData["name"]}
              />
            </td>
            <td>
              {" "}
              <div className="errors">{this.state.errors["name"]}</div>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                placeholder="enter email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.signInData["email"]}
              />
            </td>
            <td>
              <div className="errors">{this.state.errors["email"]}</div>
            </td>
            <td>
              <div className="success">{this.state.success["email"]}</div>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                placeholder="enter phone number"
                onChange={this.handleChange.bind(this, "phone")}
                value={this.state.signInData["phone"]}
              />
            </td>
            <td>
              <div className="errors">{this.state.errors["phone"]}</div>
            </td>
            <td>
              <div className="success">{this.state.success["phone"]}</div>
            </td>
          </tr>
          <tr>
            <input
              type="date"
              placeholder="date of birth"
              onChange={this.handleChange.bind(this, "dateOfBirth")}
              value={this.state.signInData["dateOfBirth"]}
            />
          </tr>
          <tr>
            <input
              type="password"
              placeholder="password"
              onChange={this.handleChange.bind(this, "password")}
              value={this.state.signInData["password"]}
            />
          </tr>
          <Link to="/loginPage">
            <h6 className="already-signIn"> Already registered?Login</h6>
          </Link>
          <button
            className="Register-botton"
            onClick={this.regester.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default SignInPage;
