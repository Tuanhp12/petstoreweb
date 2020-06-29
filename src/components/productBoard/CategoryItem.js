import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getProducts} from '../../actions/productActions'
import ListProduct from './ListProduct'

class CategoryItem extends Component {
    render() {
        const {category} = this.props

        // console.log(category)
        // console.log(category.products)
        return (
            <div>
                
                {category.products.map((product) => (
                    <ListProduct key={product.id} productGet={product}/>
                ))}
            </div>
        )
    }
}

CategoryItem.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.product
})

export default connect(mapStateToProps, {getProducts})(CategoryItem)