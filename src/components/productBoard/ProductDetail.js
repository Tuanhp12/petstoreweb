import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../actions/productActions";
import { addBasket } from "../../actions/addAction";
import PropTypes from "prop-types";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      description: "",
    };
  }

  componentDidMount() {
    // console.log(this.props.match.params);
    const { idCategory, idProduct } = this.props.match.params;
    // console.log(idCategory);
    // console.log(idProduct);
    this.props.getProduct(idCategory, idProduct, this.props.history);
  }

  // componentWillReceiveProps(nextProps){
  //     if(nextProps.errors){
  //         this.setState({errors: nextProps.errors})
  //     }
  //     console.log(nextProps)
  //     const {name,price,description} = nextProps.product;
  //     this.setState({name,price,description})
  // }

  render() {
    const { product } = this.props; // <=> const product = this.props.product
    // console.log(product);
    console.log()
    return (
      // <div className="container">
      //   <h1 className="cart-title">PRODUCT DETAILS</h1>
      //   <img
      //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-kMBgPCHdsaIoSN4QdX2YCN8uBHOWlOtBNK6FC2myhE9vAjs1&usqp=CAU"
      //     className="img-fluid"
      //     alt={product.nameProduct}
      //   />
      //   <h3>Name: {product.name}</h3>
      //   <p>Price: {product.price}</p>
      //   <p>description: {product.description}</p>
      //   <button
      //     onClick={() => this.props.addBasket(product)}
      //     className="btn btn-primary add-cart"
      //     type="button"
      //   >
      //     <svg
      //       className="bi bi-cart-plus"
      //       width="2em"
      //       height="2em"
      //       viewBox="0 0 16 16"
      //       fill="currentColor"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"
      //       />
      //       <path
      //         fillRule="evenodd"
      //         d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"
      //       />
      //       <path
      //         fillRule="evenodd"
      //         d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      //       />
      //     </svg>
      //   </button>
      // </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <div class="product product-details clearfix">
              <div class="col-md-6">
                <div id="product-main-view">
                  <div class="product-view">
                  <img
                  style = {{ height: '500px'}}
           src={product.image}
           className="img-fluid"
           alt={product.nameProduct}
         />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product-body">
    <h2 class="product-name">{product.name}</h2>
    <h3 class="product-price">{product.price} VND</h3>
                  
    <p><strong>Status:</strong> {product.status}</p>
                  
                  

                  <div class="product-btns">
                    <div class="qty-input">
                      <input class="input" type="number" />
                    </div>
                    <button onClick={() => this.props.addBasket(product)} class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>

                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="product-tab">
                  <ul class="tab-nav">
                    <li class="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                  </ul>
                  <div class="tab-content">
                    <div id="tab1" class="tab-pane fade in active">
    <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  getProduct: PropTypes.func.isRequired,
  // errors: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product.product,
});

export default connect(mapStateToProps, { getProduct, addBasket })(
  ProductDetail
);
