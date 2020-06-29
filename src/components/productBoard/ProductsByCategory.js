import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategory, getCategories } from "../../actions/categoryActions";
import ListProduct from "./ListProduct";
import { Link } from "react-router-dom";

function ProductsByCategory(props) {
    useEffect(() => {
        props.getCategory(props.match.params.id);
        props.getCategories();
    }, [props.match.params.id]);

    const listProduct = props.categoryProps.products;
    const categories = props.categoriesProps;
    console.log(listProduct);
    console.log(categories)

    return (
        <div>
            <div className="container">
                <div id="aside" class="col-md-3">
                    <div class="index-column-blog row-service">
                        <ul class="list-group">
                            {categories && categories.map((category, index) => (
                                <Link key={index} to={`/category/${category.categoryIdentifier}`}><li class="list-group-item">{category.type}</li></Link>
                            ))}
                        </ul>
                    </div>
                </div> 
                <div id="main" class="col-md-9">
                    {listProduct &&
                        listProduct.map((product, index) => (
                            <ListProduct key={index} productGet={product} />
                        ))}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    categoryProps: state.category.category,
    categoriesProps: state.category.categories
});

export default connect(mapStateToProps, { getCategory, getCategories })(ProductsByCategory);