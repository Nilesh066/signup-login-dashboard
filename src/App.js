import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./home";
import SignInPage from "./signIn";
import LogInPage from "./logIn";
import Dashboard from "./dashboard";
import ForgotPassword from "./forgotPassword";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <header className="header">
            <Link to="/">
              <label className="head">Regalmojo</label>
            </Link>
            <div className="buttons">
              <Link to="/signInPage">
                <div className="signin">Register</div>
              </Link>
              <Link to="/loginPage">
                <div className="login">LogIn/LogOut</div>
              </Link>
            </div>
          </header>
          <div className="body">
            <Route path="/" exact component={Home} />
            <Route path="/forgot-Password" component={ForgotPassword} />
            <Route
              path="/dashboard/:name/:userName/:id"
              component={Dashboard}
            />
            <Route path="/signInPage" component={SignInPage} />
            <Route path="/logInPage">
              <LogInPage />
            </Route>
          </div>
          <footer className="footer">Copyright@2020</footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
