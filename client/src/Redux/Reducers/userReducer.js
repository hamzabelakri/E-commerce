import { Register } from "../Types";
const initState = { users: [], user: {} };
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case Register:
      return { ...state, users: [...action.payload] };

    default:
      return state;
  }
};

export default userReducer;
