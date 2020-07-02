import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBasket, takeCartInfo } from "../../actions/addAction";

const ListProduct = ({ getProductProps, productGet, addBasket, takeCartInfo }) => {

  const product = productGet;
  // console.log(product.productIdentifier)

  useEffect(() => {
    takeCartInfo();
  }, [])

  // const [checkedStatus, setCheckedStatus] = useState(false)

  let products = [];

  // console.log(getProductProps)
  let [checkedStatus, setCheckedStatus] = useState(false)

  // const buttonCheckStatus = () => {
  //   Object.keys(getProductProps).forEach(function (item) {
  //     // console.log(item)

  //     if (getProductProps[item].product === product) {
  //       console.log(getProductProps[item])
  //       console.log(getProductProps[item].product)
  //       console.log(product)
  //       setCheckedStatus(getProductProps[item].inCart)
  //     }
  //   });
  // }

  // console.log(checkProductInCart)

  // const buttonCheckStatus = () => {
  //   products.map((productCheck, index) => {
  //     console.log(productCheck.productIdentifier)
  //     console.log(product.productIdentifier)
  //     if(products[0].productIdentifier === product.productIdentifier){
  //       setCheckedStatus(true)
  //     }

  //   })
  // }
  // console.log(checkedStatus)

  return (

    <div class="col-md-4 col-sm-6 col-xs-6" style={{height: '500px'}}>
      <div class="product product-single">
        <div class="product-thumb">
          <img
            src={product.image}
            className="img-fluid"
            alt={product.name}
          />
        </div>
        <div class="product-body">
          <h3 class="product-price" style={{ fontSize: 14, color: 'red' }}>{product.price} vnd</h3>
          <h2 class="product-name">
            <Link
              to={`/productDetail/${product.categoryIdentifier}/${product.productIdentifier}`}
              style={{ fontSize: 14 }}
            >
              {product.name}
            </Link>
          </h2>
          <div class="product-btns">
            <button
              className="primary-btn add-to-cart"
              onClick={() => {
                addBasket(product);
                setCheckedStatus({ checkedStatus: !checkedStatus });
              }}
            >

              <div>
                <span> Add to Cart</span>
              </div>

            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getProductProps: state.basketState.productsInCart,
});

export default connect(mapStateToProps, { addBasket, takeCartInfo })(ListProduct);

// <h1>Current Numbers in Cart {basketNumbers}a</h1>
// console.log(product)

  // --------test button---------
  // const [basketNumbers, setBasketNumbers] = useState(0);
  // const addToBasket = () => {
  //   // console.log("Button Clicked")
  //   setBasketNumbers(basketNumbers + 1);
  // }
  // ----------------------------

  // console.log(product)
