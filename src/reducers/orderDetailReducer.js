import { GET_ORDER_DETAIL} from '../actions/types'

const initialState = {
    orderDetail: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ORDER_DETAIL: 
            // console.log(action.payload)
            return{
                ...state,
                orderDetail: action.payload
            }
        default:
            return state;    
    }
}