import { GET_CUSTOMERS, GET_CUSTOMER } from "../actions/types";

const initialState = {
  customers: [], //array
  customer: {}, // object
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload, //payload is the value of parameter which returned in action (lấy giá trị trả về của action)
      };
    case GET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };
    default:
      return state;
  }
}
