import {ADD_ITEM} from '../Types' 

/* export const addItemToCart = (product) => async (dispatch) =>{
    try {
        dispatch({ type: ADD_TO_CART, payload: product });

    } catch (error) {
        
    }
} */

export const addItem = (product) => async (dispatch) => {
   try {
    dispatch({ type: ADD_ITEM, payload: product });
   } catch (error) {
    
   }
  }
