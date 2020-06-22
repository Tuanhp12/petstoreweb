import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProduct} from '../../actions/productActions'
import PropTypes from 'prop-types'

class ProductDetail extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            price: "",
            description: ""
        }
    }

    componentDidMount(){
        console.log(this.props.match.params)
        const {idCategory, idProduct} = this.props.match.params
        console.log(idCategory)
        console.log(idProduct)
        this.props.getProduct(idCategory,idProduct, this.props.history);
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

        const {product} = this.props // <=> const product = this.props.product
        console.log(product)
        return (
            <div>
                <h1>Product Name: {product.name}</h1>
                <p>Price: {product.price}</p>
                <p>description: {product.description}</p>
                <input type="text"/>
                <button >
                    Add To Cart
                </button>
            </div>
        )
    }
}

ProductDetail.propTypes = {
    getProduct: PropTypes.func.isRequired,
    // errors: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.product.product,
})


export default connect(mapStateToProps, {getProduct})(ProductDetail)