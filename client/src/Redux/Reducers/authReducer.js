import { REGISTER, LOGIN, LOG_OUT } from "../Types";
const initState = { user: null, connected: false };
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      return { ...state, user: action.payload.user, connected: true };
    case LOG_OUT:
      localStorage.clear();
      return { user: null, connected: false };

    default:
      return state;
  }
};

export default authReducer;
