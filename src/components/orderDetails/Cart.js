import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import { productQuantity, clearProduct } from '../../actions/productQuantity'
import {Link} from 'react-router-dom'


function Cart({basketProps, productQuantity, clearProduct}) { // {basketProps} == props.basketProps
    // console.log(basketProps)

    let products = [];

    // console.log(basketProps.productsInCart)

    Object.keys(basketProps.productsInCart).forEach(function(item){
        // console.log(item)
        // console.log(basketProps.productsInCart[item].inCart)
        if(basketProps.productsInCart[item].inCart){
            products.push(basketProps.productsInCart[item])
        }
        // console.log(productsInCart)
    })

    
    // console.log(productsInCart)
    products = products.map((product, index) => {
        // console.log("my product: ")
        // console.log(product)
        return (
            <Fragment key={index}>
                <div className="product"><button onClick={() => clearProduct(product.product)}>Delete Product</button><h2>This is img</h2>
                    <span className="sm-hide">{product.product.name}</span>
                </div>
                <div className="price sm-hide">${product.product.price},00</div>
                <div className="quantity">
                    <button onClick={() => productQuantity('decrease', product.product)}>-</button>
                        <span>{product.numbers}</span>
                    <button onClick={() => productQuantity('increase', product.product)}>+</button>
                </div>
            </Fragment>
        )
    })

    // console.log(productsInCart)

    return (
        <div className="container">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="product-title">PRICE</h5>
                <h5 className="product-title">QUANTITY</h5>
                <h5 className="product-title">TOTAL</h5>
            </div>
            <div className="products">
                {products}
            </div>
            <div>
                <h4>Basket Total</h4>
            
                <h4>{basketProps.cartCost},00</h4>
            </div>
            <Link to="/formCustomer">
                <button >Payment</button>
            </Link>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { productQuantity,clearProduct })(Cart)
