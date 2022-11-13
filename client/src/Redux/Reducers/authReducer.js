import { Register, Login } from "../Types";
const initState = { users: [], user: {} };
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Register:
      return { ...state, user: action.payload.user };
      case Login:
      return { ...state, user: action.payload.user };
     

    default:
      return state;
  }
};

export default authReducer;