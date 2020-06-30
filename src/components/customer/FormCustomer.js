import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCustomer } from "../../actions/customerAction";
import classnames from "classnames";

class FormCustomer extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.history.location.accessToDB)
    // console.log();
    this.state = {
      customerIdentifier: "",
      nameCustomer: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      city: "",
      errors: {},

      // listProductsItem: this.props.history.location.accessToDB
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.makeid = this.makeid.bind(this);
  }

  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.setState({ customerIdentifier: result });
  }

  componentDidMount() {
    this.makeid(7);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const listProductsItem = this.props.history.location.accessToDB;
    const newCustomer = {
      customerIdentifier: this.state.customerIdentifier,
      nameCustomer: this.state.nameCustomer,
      email: this.state.email,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
    };
    // console.log(newCustomer);
    if (listProductsItem.basketNumbers !== 0) {
      this.props.createCustomer(newCustomer, this.props.history, this.state.customerIdentifier, this.props.history.location.accessToDB);
    } else {
      alert("You have no items in your shopping cart");
    }
    // update orderDetail with orderLists = ListItem
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="product">
        <div className="container">
          <div className="col-md-3 m-auto order-info"></div>
          <div className="col-md-6 m-auto order-info">
            <h3 className="text-center form-title">ORDER</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": errors.nameCustomer, // is-invalid is bootstrap class
                  })}
                  placeholder="Full Name"
                  name="nameCustomer" // "name" == name from entity spring boot
                  value={this.state.nameCustomer}
                  onChange={this.onChange}
                />
                {errors.nameCustomer && (
                  <div className="invalid-feedback">{errors.nameCustomer}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email,
                  })}
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.phone,
                  })}
                  placeholder="Phone Number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>
              <div className="form-group">
                <select
                  id="inputState"
                  className="form-control"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                >
                  <option defaultValue>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.address,
                  })}
                  placeholder="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                />
                {errors.address && (
                  <div className="invalid-feedback">{errors.address}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.city,
                  })}
                  placeholder="City"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                />
                {errors.city && (
                  <div className="invalid-feedback">{errors.city}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary order-btn btn-block mt-4 form-group"
              >
                Order
                </button>

            </form>
            <br />
            <br />
          </div>
          <div className="col-md-3 m-auto order-info"></div>
        </div>
      </div>
    );
  }
}

FormCustomer.propTypes = {
  createCustomer: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, {
  createCustomer,
})(FormCustomer);
