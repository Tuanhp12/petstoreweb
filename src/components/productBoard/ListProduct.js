import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card" key={product.id}>
        <div className="card-body">
          <h5 className="card-title">{product.nameProduct}</h5>
          <p className="card-text">{product.productIdentifier}</p>
          <p className="card-text">{product.price}</p>
          <Link to={`/productDetail/${product.categoryIdentifier}/${product.productIdentifier}`}>
            <button type="button">Product Detail</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListProduct;
