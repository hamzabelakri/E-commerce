import { Post_Message, GET_ALL_MESSAGES } from "../Types";

const initState = { messages: [], message: {} };
const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case Post_Message:
    case GET_ALL_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

export default messageReducer;