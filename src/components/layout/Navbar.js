import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../../actions/addAction";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/categoryActions";
function Navbar(props) {
  // console.log(props)

  useEffect(() => {
    getNumbers(); // function from actions
    getCategories();
  }, []);

  //console.log(props.category)
  const categories = props.category.categories;
  // console.log(categories);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbarSupportedContent">
      <div className="container" >
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active nav-list">
              <Link className="nav-link" to="/" style={{ color: 'white' }}>
                TRANG CHỦ
              </Link>
            </li>

            <li className="nav-item dropdown nav-list" >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: 'white' }}
              >
                SẢN PHẨM
              </a>
              <div className="dropdown-menu">
                {categories.map((category, index) => (
                  <Link key={index} className="dropdown-item" style={{ fontSize: 16}} to={`/category/${category.categoryIdentifier}`}>
                    {category.type}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item nav-list">
              <Link className="nav-link" to="/introduction" style={{ color: 'white' }}>
                GIỚI THIỆU
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>


  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  category: state.category,
});

export default connect(mapStateToProps, { getNumbers, getCategories })(Navbar);