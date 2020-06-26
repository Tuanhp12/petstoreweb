import React from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../../actions/productQuantity";
import { Link } from "react-router-dom";

function Cart({ basketProps, productQuantity, clearProduct }) {
  // {basketProps} == props.basketProps
  // console.log(basketProps)

  let products = [];

  // console.log(basketProps.productsInCart)

  Object.keys(basketProps.productsInCart).forEach(function (item) {
    // console.log(item)
    // console.log(basketProps.productsInCart[item].inCart)
    if (basketProps.productsInCart[item].inCart) {
      products.push(basketProps.productsInCart[item]);
    }
    // console.log(productsInCart)
  });

  // console.log(productsInCart)
  products = products.map((product, index) => {
    // console.log("my product: ")
    // console.log(product)
    return (
      <tr key={index} className="product container col-md-12">
        <td><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-kMBgPCHdsaIoSN4QdX2YCN8uBHOWlOtBNK6FC2myhE9vAjs1&usqp=CAU"
        className="img-fluid"
        alt={product.nameProduct} width="70px" height="70px"
      /></td>
        <td className="sm-hide">{product.product.name}</td>
        <td className="price sm-hide">${product.product.price}</td>
        <td className="quantity">
          <button className="btn btn-primary qty-btn" onClick={() => productQuantity("decrease", product.product)}>
            <svg
              className="bi bi-dash"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <span>{product.numbers}</span>
          <button className="btn btn-primary qty-btn" onClick={() => productQuantity("increase", product.product)}>
            <svg
              className="bi bi-plus"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
              />
            </svg>
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => clearProduct(product.product)}>
            <svg
            className="bi bi-trash-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
              />
            </svg>
          </button>
        </td>
      </tr>
    );
  });

  // console.log(productsInCart)

  return (
    <div className="container">
      <h2 className="cart-title">CHECKOUT CART</h2>
      <table className="table table-bordered col-md-12">
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
      <div className="container">
        <div className="payment-btn">
          <h4>Basket Total</h4>
          <h4>{basketProps.cartCost}$</h4>
        
        <Link to={{ 
          pathname: `/formCustomer`, 
          accessToDB: {
            basketNumbers: basketProps.basketNumbers,
            cartCost: basketProps.cartCost,
            productsInCart: basketProps.productsInCart
          } 
        }}><button className="btn btn-secondary">Payment</button></Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
