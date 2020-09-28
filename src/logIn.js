import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logInData: {}, signInData: [], error: "" };
    console.log(this.props);
  }
  handleChange(field, event) {
    let logInData = this.state.logInData;
    logInData[field] = event.target.value;
    this.setState({ logInData });
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
        user.email === this.state.logInData.email &&
        user.password === this.state.logInData.password
      ) {
        window.location.replace(
          `http://localhost:3000/dashboard/${user.name}/${user.email}/${user._id}`
        );
      } else {
        this.state.error = "username or password invalid";
      }
    });
  }
  render() {
    return (
      <div className="signInPage">
        <div className="sign-In-Form">
          <h2>Login Form</h2>
          <tr>
            <input
              type="text"
              placeholder="enter email"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.logInData["email"]}
            />
          </tr>
          <tr>
            <input
              type="password"
              placeholder="password"
              onChange={this.handleChange.bind(this, "password")}
              value={this.state.logInData["password"]}
            />
          </tr>
          <Link to="/forgot-Password">
            <h6 className="already-signIn"> Forgot Password?</h6>
          </Link>
          <h6 className="errors">{this.state.error}</h6>
          <button className="Register-botton" onClick={this.login.bind(this)}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default LogInPage;
