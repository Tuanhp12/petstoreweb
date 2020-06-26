import { ADD_PRODUCT_BASKET,GET_NUMBERS_BASKET,GET_PRODUCTSCART } from './types'

export const addBasket = (product) => {
    return (dispatch) => {
        // console.log("Add basket")
        // console.log("Product: ", product)
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: product
        });
        
    }
}

export const getNumbers = () => {
    return (dispatch) => {
        console.log("Getting all Basket Numbers")
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
}

export const takeCartInfo = () => {
    return (dispatch) => {
        // console.log("Getting all ")
        dispatch({
            type: GET_PRODUCTSCART
        })
    }
}