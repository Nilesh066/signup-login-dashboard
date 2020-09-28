import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Good Day!!</h1>
        <p>
          Welcome to this website.To start using this page, please sign in.
          <hr /> If you are old user logIn to this page If you are old user and
          have forgotten your password. Go to logIn page and change your
          password then login with your new password.
        </p>
      </div>
    );
  }
}

export default Home;
