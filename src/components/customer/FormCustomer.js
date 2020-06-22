import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCustomer, getCustomers } from "../../actions/customerAction";
import classnames from 'classnames'


class FormCustomer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
          nameCustomer: "",
          email: "",
          phone: "",
          address: "",
          gender: "",
          city: "",
          errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
      }
    
      render() {
        const { errors } = this.state;
        return (
          <div className="product">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h5 className="display-4 text-center">Create User form</h5>
                  <hr />
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
                        <div className="invalid-feedback">
                          {errors.nameCustomer}
                        </div>
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
                        placeholder="Gender"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChange}
                      />
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
                      className="btn btn-primary btn-block mt-4"
                    >
                      Create
                    </button>
                  </form>
                  <br />
                  <br />
                </div>
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
  });
  
  export default connect(mapStateToProps, { createCustomer,getCustomers })(FormCustomer);