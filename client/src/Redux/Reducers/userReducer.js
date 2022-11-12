import { Register, Login, GET_ALL_USERS } from "../Types";
const initState = { users: [], user: {} };
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case Register:
      return { ...state, users: [...action.payload] };
      case Login:
      return { ...state, users: [...action.payload] };
      case GET_ALL_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default userReducer;
