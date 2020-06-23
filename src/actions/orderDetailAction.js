import axios from 'axios'
import { GET_ORDER_DETAIL} from './types'

export const getOrderDetail = () => async dispatch => {   
        const res = await axios.get(`http://localhost:8080/api/v1/orderDetails/maxDate`);
        dispatch({
            type: GET_ORDER_DETAIL,
            payload: res.data
        }) 
} 

export const createOrderItems = 
    (orderDetailIdentifier,
    productIdentifier,
    orderItems
    ) => async dispatch => {
        await axios.post(`http://localhost:8080/api/v1/orderDetails/orderItems/${orderDetailIdentifier}/${productIdentifier}`,orderItems)
}


// export const updateOrderDetail = () => async dispatch => {

// }