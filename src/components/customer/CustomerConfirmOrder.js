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
      // <tr key={index} className="product container col-md-12">
      //   <td>{product.numbers}</td>
      //   <td>{product.product.name}</td>
      //   <td>{product.product.image}</td>
      //   <td>{product.product.description}</td>
      //   <td>{product.product.price}</td>
      // </tr>
      <tr>
        <td class="thumb"><img
          src={product.product.image}
          className="img-fluid"
          alt={product.product.name} width="120px" height="120px"
        /></td>
        <td class="details">
          <a href="#">{product.product.name}</a>
        </td>
        <td>
          <p> {product.product.price} VND</p>
        </td>

        <td className="qty text-center">
          <span>{product.numbers}</span>
        </td>
        <td class="price text-center"><strong  style={{color: 'blue'}}>{product.product.price * product.numbers} VND</strong></td>


      </tr>
    );
  });

  return (
    // <div>
    //   <h1>Customer Info</h1>
    //   <p>{customerProps.nameCustomer}</p>
    //   <p>{customerProps.email}</p>
    //   <p>{customerProps.phone}</p>
    //   <p>{customerProps.address}</p>
    //   <p>{customerProps.city}</p>
    //   <h1>OrderDetail</h1>
    //   <table className="table table-bordered col-md-12">
    //     <thead>
    //       <tr>
    //         <th>IMAGE</th>
    //         <th>NAME</th>
    //         <th>PRICE</th>
    //         <th>QUANTITY</th>
    //         <th></th>
    //       </tr>
    //     </thead>
    //     <tbody>{takeProducts}</tbody>
    //   </table>
    //   <h2>Total Price</h2>
    //   <h3>{location.state.takeItemCart1.cartCost}</h3>
    //   <button onClick={() => denie(parsed.cusident, history)}>
    //     Denie Order
    //   </button>
    //   <button onClick={() => confirm(orderDetailProps)}>Confirm Order</button>
    // </div>

    <div className="container">
      <div className="section-title">
        <h3 className="title">Customer Info</h3>
      </div>
      <div className="caption">
        <p className="cus-info" style={{ fontSize: 18 }}><span style={{ fontWeight: 'bold', fontSize: 16 }}>Tên:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{customerProps.nameCustomer}</p><br />
        <p className="cus-info" style={{ fontSize: 18 }}><span style={{ fontWeight: 'bold', fontSize: 16 }}>Email:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{customerProps.email}</p><br />
        <p className="cus-info" style={{ fontSize: 18 }}><span style={{ fontWeight: 'bold', fontSize: 16 }}>Số điện thoại:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{customerProps.phone}</p><br />
        <p className="cus-info" style={{ fontSize: 18 }}><span style={{ fontWeight: 'bold', fontSize: 16 }}>Quận/huyện:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{customerProps.address}</p><br />
        <p className="cus-info" style={{ fontSize: 18 }}><span style={{ fontWeight: 'bold', fontSize: 16 }}>Thành phố:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{customerProps.city}</p><br />
      </div>


      <div className="section-title">
        <h3 className="title">Order Review</h3>
      </div>
      <table className="table col-md-12">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total</th>
            <th className="text-right"></th>
          </tr>
        </thead>
        <tbody>{takeProducts}</tbody>
      </table>
      <div className="container">
        <div className="payment-btn">
          <h4>Basket Total</h4>
          <h4  style={{color: 'blue'}}>{location.state.takeItemCart1.cartCost} VND</h4>

          <button className="btn btn-default confirm-btn" onClick={() => denie(parsed.cusident, history)}>
            Denie Order
          </button>
          <button className="btn btn-default confirm-btn" onClick={() => confirm(orderDetailProps)}>Confirm Order</button>

        </div>

      </div>
      <div style={{ height: '100px' }}/>

      
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
