import { combineReducers } from "redux";
import errorReducer from './errorReducer'
import productReducer from "./productReducer";
import categoryReducer from './categoryReducer'
import basketReducer from './basketReducer'

export default combineReducers({
  errors: errorReducer,
  product: productReducer,
  category: categoryReducer,
  basketState : basketReducer
}); 