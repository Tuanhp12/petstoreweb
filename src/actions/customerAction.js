import axios from 'axios'
import {GET_ERRORS, GET_CUSTOMER, GET_CUSTOMERS} from "./types"

export const createCustomer = (customer, history) => async dispatch => {
    try{
        await axios.post("http://localhost:8080/api/customer/v1", customer)
        // history.push("/success")
        // history.go()       
    } catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

export const getCustomers = () => async dispatch =>{
    const res = await axios.get("http://localhost:8080/api/customer/v1/all");
    dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
    })
}

export const getCustomer = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/customer/v1/${id}`);
        dispatch({
            type: GET_CUSTOMER,
            payload: res.data
        })
    } catch (error) {
        history.push("/user")
    }
   
}
