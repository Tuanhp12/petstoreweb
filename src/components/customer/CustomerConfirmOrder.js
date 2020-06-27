import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { customerDelete, getCustomer } from "../../actions/customerAction";
import {
  updateOrderDetail,
  getOrderDetailByCustomer,
  createOrderItems,
} from "../../actions/orderDetailAction";

function CustomerConfirmOrder({
  customerDelete,
  getOrderDetailByCustomer,
  orderDetailProps,
  updateOrderDetail,
  createOrderItems,
  getCustomer,
  customerProps,
}) {
  const history = useHistory();
  const location = useLocation();
  const queryString = require("query-string");
  // console.log(location.search);
  //   console.log(location.state.takeItemCart1.productsInCart);
  const takeListOrderInCart = location.state.takeItemCart1.productsInCart;
  const parsed = queryString.parse(location.search);
  // console.log(parsed.cusident);

  console.log(takeListOrderInCart[0]);
  const takeProductsInCart = [];

  Object.keys(takeListOrderInCart).forEach(function (item) {
    if (takeListOrderInCart[item].inCart === true) {
      takeProductsInCart.push(takeListOrderInCart[item]);
    }
  });
  useEffect(() => {
    getOrderDetailByCustomer(parsed.cusident);
    getCustomer(parsed.cusident);

    console.log("run to here");
  }, []);

  const denie = (id, history) => {
    customerDelete(id, history);
    console.log("delete click");
  };

  const confirm = (orderDetailProps) => {
    // console.log("user confirm")
    Object.keys(takeListOrderInCart).map((orderItem, index) => {
        //   console.log(takeListOrderInCart[orderItem]);
        if (takeListOrderInCart[orderItem].inCart === true) {
          const newProductItem = {
            amount: takeListOrderInCart[orderItem].numbers,
            priceEach: takeListOrderInCart[orderItem].product.price,
            productIdentifier:
              takeListOrderInCart[orderItem].product.productIdentifier,
            orderDetailIdentifier:
              orderDetailProps.orderDetail.orderDetailIdentifier,
          };
          // console.log(newProductItem);
          createOrderItems(newProductItem);
        }
      });

    orderDetailProps.orderDetail.totalPrice =
      location.state.takeItemCart1.cartCost;
    // console.log(orderDetailProps.orderDetail)
    updateOrderDetail(parsed.cusident, orderDetailProps.orderDetail, history);
  };

//   console.log(takeProductsInCart);
  let takeProducts = takeProductsInCart.map((product, index) => {
    // console.log("my product: ")
    // console.log(product)
    return (
      <tr key={index} className="product container col-md-12">
        <td>{product.numbers}</td>
        <td>{product.product.name}</td>
        <td>{product.product.image}</td>
        <td>{product.product.description}</td>
        <td>{product.product.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Customer Info</h1>
      <p>{customerProps.nameCustomer}</p>
      <p>{customerProps.email}</p>
      <p>{customerProps.phone}</p>
      <p>{customerProps.address}</p>
      <p>{customerProps.city}</p>
      <h1>OrderDetail</h1>
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
        <tbody>{takeProducts}</tbody>
      </table>
      <h2>Total Price</h2>
      <h3>{location.state.takeItemCart1.cartCost}</h3>
      <button onClick={() => denie(parsed.cusident, history)}>
        Denie Order
      </button>
      <button onClick={() => confirm(orderDetailProps)}>Confirm Order</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  orderDetailProps: state.orderDetailState,
  customerProps: state.customerState.customer,
});

export default connect(mapStateToProps, {
  customerDelete,
  updateOrderDetail,
  getOrderDetailByCustomer,
  createOrderItems,
  getCustomer,
})(CustomerConfirmOrder);
