import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categoryActions'
import PropTypes from 'prop-types'
import CategoryItem from './productBoard/CategoryItem'
import { Link } from 'react-router-dom'
import { getALlProduct } from '../actions/productActions'

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCategories()
    // this.props.getALlProduct()
  }

  render() {
    const { categories } = this.props.category
    // const products = this.props.productProps

    // console.log(products)
    // products.map((product))


    return (
      <div className="main-body">
        <div className="section">
          <div className="container">
            <div className="row">
              <div id="aside" class="col-md-3">
                <div class="index-column-blog row-service">
                  <h3>&nbsp;&nbsp;&nbsp;Danh mục sản phẩm</h3>
                </div>
                <div class="index-column-blog row-service">
                  <ul class="list-group">
                    {categories.map((category) => (
                      <Link key={category.id} to={`/category/${category.categoryIdentifier}`} ><li class="list-group-item">{category.type}</li></Link>
                    ))}
                  </ul>
                </div>
              </div>
              <div id="main" class="col-md-9">
                <div class="banner banner-1">
                  <img src="./img/banner01.jpg" alt="" />
                  <div class="banner-caption text-center">
                    {/* <h1>Bags sale</h1>
                    <h3 class="white-color font-weak">Up to 50% Discount</h3> */}
                    <Link class="primary-btn" to={`/productDetail/test10/randon39`}>Chi tiết ngay</Link>
                  </div>
                </div>
              </div>

              <div class="section">

                <div class="container">

                  <div class="row">

                    <div class="col-md-4 col-sm-6">
                      <Link class="banner banner-1" to={`/category/test1`}>
                        <img src="./img/banner10.jpg" alt="" />
                        <div class="banner-caption text-center">
                          <h2 class="white-color">Dành cho Kún yêu</h2>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <Link class="banner banner-1" to={`/category/test2`}>
                        <img src="./img/banner11.jpg" alt="" />
                        <div class="banner-caption text-center">
                          <h2 class="white-color">Dành cho Miu Miu</h2>
                        </div>
                      </Link>
                    </div>

                    <div class="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                      <Link class="banner banner-1" to={`/category/test3`}>
                        <img src="./img/banner12.jpg" alt="" />
                        <div class="banner-caption text-center">
                          <h2 class="white-color">Món ngon dinh dưỡng</h2>
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
              <div style={{ height: '100px' }}></div>

              <div id="main" class="col-md-12">
                <div class="col-md-12">
                  <div class="section-title">
                    <h4 class="title">Thức ăn tốt nhất</h4>
                  </div>
                </div>
                {categories.map((category) => {
                  if (category.id === 5) {
                    return (<CategoryItem key={category.id} category={category} />)

                  }
                }
                )}
              </div>

              <div style={{ height: 600 }}></div>

              <div id="main" class="col-md-12">
                <div class="col-md-12">
                  <div class="section-title">
                    <h4 class="title">Sản phẩm mới nhất</h4>
                  </div>
                </div>
                {categories.map((category) => {
                  if (category.id === 6) {
                    return (<CategoryItem key={category.id} category={category} />)

                  }
                }
                )}
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
  category: state.category,
  // productProps: state.product.products
})

export default connect(mapStateToProps, { getCategories })(Dashboard)