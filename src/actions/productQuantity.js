import { INCREASE_QUANTITY, DECREASE_QUANTITY,CLEAR_PRODUCT } from './types'

export const productQuantity = (action, product) => { // action: increase or decrease
    return(dispatch) => {
        // console.log("Inside product Quantity");
        // console.log("The action is ", action)
        // console.log("The product identifier is ", product)
        dispatch({
            type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload1: product
        })
    }
}

export const clearProduct = (product) => {
    return (dispatch) => {
        console.log("Inside clear products");
        console.log("Product Name ", product.name)
        dispatch({
            type: CLEAR_PRODUCT,
            payload2: product
        })
    } 
}