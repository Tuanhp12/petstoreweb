import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categoryActions'
import PropTypes from 'prop-types'
import CategoryItem from './productBoard/CategoryItem'
import { Link } from 'react-router-dom'


class Dashboard extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props.category

    return (
      <div className="main-body">
        <div className="section">
          <div className="container">
            <div className="row">
              <div id="aside" class="col-md-3">
                <div class="index-column-blog row-service">
                  <h3>&nbsp;&nbsp;&nbsp;Danh mục</h3>
                </div>
                <div class="index-column-blog row-service">
                  <ul class="list-group">
                    {categories.map((category) => (
                      <Link to={`/category/${category.categoryIdentifier}`} ><li class="list-group-item">{category.type}</li></Link>
                    ))}
                  </ul>
                </div>
              </div>
              <div id="main" class="col-md-9">
                <hr />
                {categories.map((category) => (
                  <CategoryItem key={category.id} category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, { getCategories })(Dashboard)