


import { ADD_ITEM } from "../Types";
const initState={ cart:[]}
const cartReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {...state, cart: action.payload};
        default:
            return state;
    }
}
export default cartReducer;
