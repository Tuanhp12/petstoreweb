import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categoryActions'
import PropTypes from 'prop-types'
import CategoryItem from './productBoard/CategoryItem'
class Dashboard extends Component {
    componentDidMount(){
        this.props.getCategories()
    }

    render() {
        const {categories} = this.props.category

        return (
            <div>
                <p>Dash board</p>
                {categories.map(category => (
                    <CategoryItem key={category.id} category={category}/>
                ))}
            </div>
        )
    }
}

Dashboard.propTypes = {
    category: PropTypes.object.isRequired,
    getCategories: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    category: state.category
})

export default connect(mapStateToProps, {getCategories})(Dashboard)