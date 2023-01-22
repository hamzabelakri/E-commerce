import { Post_Message, GET_ALL_MESSAGES, DELETE_MESSAGE } from "../Types";
import axios from "axios";
import toast from "react-hot-toast";

export const sendMessage = (message) => async (dispatch) => {
  try {
    const response = await axios.post("https://e-commerce-1pvm.onrender.com/message", message);

    dispatch({ type: Post_Message, payload: response.data });

    console.log(response.data);
    toast.success(response.data.msg);
  } catch (error) {
    console.log(error.response);
    toast.error(error.response.data.error);
  }
};

export const getAllMessages = () => async (dispatch) => {
  try {
    const response = await axios.get("https://e-commerce-1pvm.onrender.com/message");

    dispatch({ type: GET_ALL_MESSAGES, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMessage = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`https://e-commerce-1pvm.onrender.com/message/${id}`);

    dispatch({ type: DELETE_MESSAGE, payload: response.data });
    console.log(response.data);
    toast.success(response.data.msg);
  } catch (error) {
    console.log(error.response);
    alert(error.response.data.error);
  }
};
