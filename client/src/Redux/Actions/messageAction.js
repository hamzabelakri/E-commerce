import { Post_Message} from "../Types";
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