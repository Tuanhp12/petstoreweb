import axios from 'axios'
import {GET_PRODUCT, GET_CATEGORY, GET_ERRORS,GET_PRODUCTS} from './types'

export const getALlProduct = () => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/categories/all`)
        dispatch({
            type: GET_PRODUCTS,
            payload:res.data
        })
    }catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
    }
}

export const getProducts = category_id => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/categories/${category_id}`)
        dispatch({
            type: GET_CATEGORY,
            payload:res.data
        })
    }catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
    }
}

export const getProduct = (category_id, product_id, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/products/${category_id}/${product_id}`)
        dispatch({
            type:GET_PRODUCT,
            payload:res.data
        })
    }catch(err){
        history.push("/dashboard")
    }
}