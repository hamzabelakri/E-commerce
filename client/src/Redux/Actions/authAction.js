import { REGISTER, LOGIN, LOG_OUT } from "../Types";
import axios from "axios";

export const signUp = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/sign-up",
      user
    );

    dispatch({ type: REGISTER, payload: response.data });
    navigate("/profile");
    alert(response.data.msg);
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data.errors);
    error.response.data.errors.map((err) => alert(err.msg));
  }
};

export const signIn = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/sign-in",
      user
    );
    dispatch({ type: LOGIN, payload: response.data });
    if (response.data.user.role === 1) {
      navigate("/admin");
    } else {
      navigate("/profile");
    }

    alert(response.data.msg);
  } catch (error) {
    console.log(error.response.data.errors);
    error.response.data.errors.map((err) => alert(err.msg));
  }
};

export const logOut = (navigate) => {
  navigate("/login");
  return { type: LOG_OUT };
};
