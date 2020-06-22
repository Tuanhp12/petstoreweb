import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="overlay">
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <div className="container">
            <a className="navbar-brand" href="Dashboard.html">
              Pet Shop
            </a>
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link " href="register.html">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="login.html">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </header>
    );
  }
}

export default Header;
