import { Post_Message, GET_ALL_MESSAGES} from "../Types";
import axios from "axios";

export const sendMessage = (message)=> async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/message",
       message
      );
  
      dispatch({ type: Post_Message, payload: response.data });
      
      console.log(response.data);
  
    } catch (error) {
      console.log(error);
    }
  };

  export const getAllMessages = ()=> async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/message"
       
      );
  
      dispatch({ type: GET_ALL_MESSAGES, payload: response.data });
      
      console.log(response.data);
  
    } catch (error) {
      console.log(error);
    }
  };