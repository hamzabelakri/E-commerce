import { Register, Login } from "../Types";
const initState = { users: [], user: {} };
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Register:
      return { ...state, users: action.payload };
      case Login:
      return { ...state, users: action.payload };
     

    default:
      return state;
  }
};

export default authReducer;