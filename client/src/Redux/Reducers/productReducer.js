import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT, ADD_PRODUCT } from "../Types";

const initState = { products: [], product: {} };
const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products :action.payload}
      case GET_ONE_PRODUCT:
        return {...state, product :action.payload}
    default:
      return state;
  }
};

export default ProductReducer;
