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
                <h2>{category.categoryIdentifier}</h2>
                <p>{category.type}</p>          
                <hr/>
                <h3>Product List</h3>
                {category.products.map(product => (
                    <ListProduct key={product.id} product={product}/>
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