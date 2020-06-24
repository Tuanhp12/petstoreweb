import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div>
              <Link to="/">
                <h3 className="logo">Pet Shop</h3>
              </Link>
            </div>
              
          </div>
        </header>
        <Navbar />
      </div>
    );
  }
}

export default Header;
