import { GET_ALL_USERS, GET_ONE_USER, UPDATE_USER} from "../Types";
const initState = { users: [], user: {} };
const userReducer = (state = initState, action) => {
  switch (action.type) {
    
      case GET_ALL_USERS:
      return { ...state, users: action.payload };
      case GET_ONE_USER:
        return { ...state, user: action.payload }; 
       case UPDATE_USER:
        return { ...state, user: action.payload }; 
    default:
      return state;
  }
};

export default userReducer;
