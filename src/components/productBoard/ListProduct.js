import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBasket } from "../../actions/addAction";

const ListProduct = (props) => {
  // console.log(props)

  // console.log(props.productGet)
  const product = props.productGet;
  // console.log(product)

  // --------test button---------
  // const [basketNumbers, setBasketNumbers] = useState(0);
  // const addToBasket = () => {
  //   // console.log("Button Clicked")
  //   setBasketNumbers(basketNumbers + 1);
  // }
  // ----------------------------

  // console.log(product)

  return (
    <div className="col-lg-10 col-md-12 mb-r">
      <div
        className="card text-center card-cascade narrower "
        id="item-product"
      >
        <div className="view overlay hm-white-slight z-depth-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-kMBgPCHdsaIoSN4QdX2YCN8uBHOWlOtBNK6FC2myhE9vAjs1&usqp=CAU"
            className="img-fluid"
            alt={product.nameProduct}
          />
          <a>
            <div className="mask waves-light waves-effect waves-light"></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>

          <span className="left">{product.price}$</span>
          <br />
          <Link
            to={`/productDetail/${product.categoryIdentifier}/${product.productIdentifier}`}
          >
            Detail
          </Link>
          <br />
        </div>
        <div className="card-footer">
          <button className="btn btn-primary add-cart" onClick={() => props.addBasket(product)} type="button">
            <svg
              class="bi bi-cart-plus"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addBasket })(ListProduct);

// <h1>Current Numbers in Cart {basketNumbers}</h1>
