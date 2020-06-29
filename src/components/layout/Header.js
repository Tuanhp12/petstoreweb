import React, { useEffect, Component } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../../actions/addAction";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/categoryActions";
import Navbar from "./Navbar";


function Header(props) {

  useEffect(() => {
    getNumbers(); // function from actions
    getCategories();
  }, []);
  return (
    <div>
      <header>
        <div id="header" >
          <div className="container" >
            <div className="pull-left">
              <div className="header-logo">
                <a className="logo" href="#">
                  <img src="./img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="pull-right">
              <ul className="header-btns">

                <li className="header-cart dropdown default-dropdown">
                  <Link aria-expanded="true" to="/cart">
                    <div className="header-btns-icon">
                      <i className="fa fa-shopping-cart"></i>
                      <span className="qty">{props.basketProps.basketNumbers}</span>
                    </div>
                    <strong className="text-uppercase">My Cart:</strong>
                    <br />
                    <span>{props.basketProps.cartCost}</span>
                  </Link>
                </li>
                <li className="nav-toggle">
                  <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  category: state.category,
});

export default connect(mapStateToProps, { getNumbers, getCategories })(Header);
