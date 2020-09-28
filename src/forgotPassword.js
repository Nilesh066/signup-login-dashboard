import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { passwordChangeData: {}, signInData: [] };
  }
  handleChange(field, event) {
    let passwordChangeData = this.state.passwordChangeData;
    passwordChangeData[field] = event.target.value;
    this.setState({ passwordChangeData });
  }
  login(event) {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          signInData: data,
        });
        console.log(data);
      })
      .catch(console.log);

    let user = this.state.signInData.find((user) => {
      if (
        user.email === this.state.passwordChangeData.email &&
        this.state.passwordChangeData.password ===
          this.state.passwordChangeData.confirmPassword
      ) {
        axios
          .put(
            "http://localhost:8080/passwordChange",
            this.state.passwordChangeData
          )
          .then((res) => console.log(res))
          .catch(console.log);
        alert("Password Changed");
        window.location.replace("http://localhost:3000/signInPage");
      } else {
        window.location.reload();
      }
    });
    alert("User does not exist.");
  }
  render() {
    return (
      <div className="signInPage">
        <div className="sign-In-Form">
          <h2>Change Password</h2>
          <tr>
            <input
              type="text"
              placeholder="enter email"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.passwordChangeData["email"]}
            />
          </tr>
          <tr>
            <input
              type="password"
              placeholder="new password"
              onChange={this.handleChange.bind(this, "password")}
              value={this.state.passwordChangeData["password"]}
            />
          </tr>
          <tr>
            <input
              type="text"
              placeholder="confirm new password"
              onChange={this.handleChange.bind(this, "confirmPassword")}
              value={this.state.passwordChangeData["confirmPassword"]}
            />
          </tr>
          <button className="Register-botton" onClick={this.login.bind(this)}>
            Change Password
          </button>
        </div>
      </div>
    );
  }
}
export default LogInPage;
