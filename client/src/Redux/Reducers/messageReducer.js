import {Post_Message} from "../Types";

const initState = {messages: []}
const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case Post_Message:
      return {...state, messages :action.payload}
      
    default:
      return state;
  }
};

export default messageReducer;