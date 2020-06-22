import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <div className="container">
              <Link to="/">
                <h3>Pet Shop</h3>
              </Link>
              <div id="mobile-nav">
                <ul className="account-action">
                  <li>
                    <a href="register.html">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>

        </header>
        <Navbar />
      </div>
    );
  }
}

export default Header;
