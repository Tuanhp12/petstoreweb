import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {addBasket} from '../../actions/addAction'

const  ListProduct = (props) => {

    // console.log(props)

    // console.log(props.productGet)
    const product  = props.productGet;
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
      <div className="card" key={product.id}>
        <div className="card-body">
          <h5 className="card-title">{product.nameProduct}</h5>
          <p className="card-text">{product.productIdentifier}</p>
          <p className="card-text">{product.price}</p>
          <Link to={`/productDetail/${product.categoryIdentifier}/${product.productIdentifier}`}>
              Product Detail
          </Link>

          <button onClick={() => props.addBasket(product)} type="button">Add To Cart</button>
        </div>
      </div>
    );
  
}

export default connect(null, {addBasket})(ListProduct);


// <h1>Current Numbers in Cart {basketNumbers}</h1>