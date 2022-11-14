import { REGISTER, LOGIN, LOG_OUT } from "../Types";
import axios from "axios";

export const signUp = (user, navigate)=> async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/sign-up",
      user
    );

    dispatch({ type: REGISTER, payload: response.data });
    navigate('/profile')
   

  } catch (error) {
    console.log(error);
  }
};

export const signIn = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/sign-in",
      user
    );
    dispatch({ type: LOGIN, payload: response.data });
    navigate('/profile')
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const logOut=(navigate)=>{
  navigate('/');
  return {type:LOG_OUT}

}