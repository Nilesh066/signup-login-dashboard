import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Hi {this.props.match.params.name}</h1>
        <div className="signInPage">
          <h2>Welcome to your Dashboard {this.props.match.params.userName} </h2>
        </div>
      </>
    );
  }
}
export default Dashboard;
