import { Register, Login } from "../Types";
import axios from "axios";

export const postUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/sign-up",
      user
    );
    console.log(response.data);
    dispatch({ type: Register, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/sign-in",
      user
    );
    dispatch({ type: Login, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
