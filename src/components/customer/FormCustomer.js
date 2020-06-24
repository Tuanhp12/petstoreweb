import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCustomer, getCustomers } from "../../actions/customerAction";
import { getOrderDetail } from "../../actions/orderDetailAction";
import { createOrderItems } from "../../actions/orderDetailAction";
import classnames from "classnames";

class FormCustomer extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.history.location.accessToDB)
    // console.log();
    this.state = {
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
  }

  componentDidMount() {
    this.props.getOrderDetail();
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
    if (listProductsItem.basketNumbers !== 0) {
      const newCustomer = {
        nameCustomer: this.state.nameCustomer,
        email: this.state.email,
        gender: this.state.gender,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
      };
      console.log(newCustomer);
      this.props.createCustomer(newCustomer, this.props.history);

      //find with highest time create
      const takeOrderDetail = this.props.orderDetailProps.orderDetail;
      // console.log(takeOrderDetail)

      // console.log(this.state.listProductsItem)
      // console.log(listProductsItem);

      takeOrderDetail.totalPrice = listProductsItem.cartCost;
      // console.log(takeOrderDetail)

      //Do this
      //add to ListItem
      // console.log(listProductsItem.productsInCart)
      // console.log(listProductsItem.productsInCart[0])
      Object.keys(listProductsItem.productsInCart).map((orderItem, index) => {
        //return new page to be bill  -> if have time
        if (listProductsItem.productsInCart[orderItem].inCart === true) {
          const newProductItems = {
            amount: listProductsItem.productsInCart[orderItem].numbers,
            priceEach: listProductsItem.productsInCart[orderItem].product.price,
          };
          console.log(newProductItems);
          this.props.createOrderItems(
            takeOrderDetail.orderDetailIdentifier,
            listProductsItem.productsInCart[orderItem].product
              .productIdentifier,
            newProductItems
          );
        }
      });
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
          <div className="col-md-6 m-auto order-info">
            <h3 className="text-center form-title">Order Information</h3>
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
              <div class="form-group">
                <select
                  id="inputState"
                  class="form-control"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                >
                  <option selected>Gender</option>
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
                className="btn btn-primary btn-block mt-4 form-group"
              >
                Order
              </button>
            </form>
            <br />
            <br />
          </div>
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
  orderDetailProps: state.orderDetailState,
});

export default connect(mapStateToProps, {
  createCustomer,
  getCustomers,
  getOrderDetail,
  createOrderItems,
  // updateOrderDetail
})(FormCustomer);
