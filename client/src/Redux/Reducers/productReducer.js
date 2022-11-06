import { GET_ALL_PRODUCTS } from "../Types";

const initState = {products: []}
const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    
    default:
      return state;
  }
};

export default ProductReducer;