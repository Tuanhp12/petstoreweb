import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../../actions/addAction";
import { Link } from "react-router-dom";
function Navbar(props) {
  // console.log(props)

  useEffect(() => {
    getNumbers(); // function from actions
  }, []);

  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div className="container">
      <button className="btn btn-default cart-icon">
      <Link className="nav-link cart" to="/cart">
              <span className="glyphicon glyphicon-shopping-cart"></span> <span>{props.basketProps.basketNumbers}</span>
      </Link>
    </button>
      </div>
    </nav>
    
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
