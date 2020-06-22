import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  productsInCart: [],
  productInCart: {
    product: {},
    numbers: 0,
    inCart: false,
  },
};

export default (state = initialState, action) => {
  
  let productSelected = ""
  switch (action.type) {
    
    case ADD_PRODUCT_BASKET:
      while(state.productsInCart.length < 100){
        state.productsInCart.push(state.productInCart)
      }
      let index = action.payload.id - 1;
      productSelected = { ...state.productsInCart[index] };
      productSelected.product = action.payload; //action.payload == "product1 " <=> name product after click addBacket in Listproduct ()
      productSelected.numbers += 1;
      if (productSelected.inCart === false) {
        state.basketNumbers += 1;
      }
      productSelected.inCart = true;
      state.cartCost = state.cartCost + productSelected.product.price;
      
      return {
        ...state,  
        productsInCart: {
          ...state.productsInCart,
          [index]: productSelected,
        },
        
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    case INCREASE_QUANTITY:
      let index1 = action.payload1.id - 1;
      productSelected = {...state.productsInCart[index1]}
      // console.log(productSelected)
      productSelected.product = action.payload1
      productSelected.numbers += 1
      // console.log(productSelected)
      // state.cartCost = state.cartCost + productSelected.product.price;
      // console.log(state.productsInCart) 
      return {
        ...state,
        cartCost: state.cartCost + state.productsInCart[index1].product.price,
        productsInCart: {
          ...state.productsInCart,
          [index1]: productSelected
        }
      }
    case DECREASE_QUANTITY:
      let index2 = action.payload1.id - 1;
      let newCartCost = 0
      productSelected = {...state.productsInCart[index2]}
      // console.log(productSelected)
      productSelected.product = action.payload1
      if(productSelected.numbers === 0){
        productSelected.numbers = 0
        newCartCost = state.cartCost
      }else{
        productSelected.numbers -= 1
        newCartCost = state.cartCost - state.productsInCart[index2].product.price
      }
      
      // console.log(productSelected)
      // state.cartCost = state.cartCost + productSelected.product.price;
      console.log(state.productsInCart)
      return {
        ...state,
        cartCost: newCartCost,
        productsInCart: {
          ...state.productsInCart,
          [index2]: productSelected
        }
      } 

    case CLEAR_PRODUCT:
      let index3 = action.payload2.id - 1;
      productSelected = {...state.productsInCart[index3]}
      let numbersQuantity = productSelected.numbers
      productSelected.numbers = 0
      productSelected.inCart = false;
      return   {
        ...state ,
        cartCost: state.cartCost - (numbersQuantity * productSelected.product.price),
        basketNumbers: state.basketNumbers - 1,
        productsInCart: {
          ...state.productsInCart,
          [index3]: productSelected
        }
      }
    default:
      return state;
  }
};
