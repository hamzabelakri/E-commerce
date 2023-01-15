import { REGISTER, LOGIN, LOG_OUT } from "../Types";
import axios from "axios";
import toast from "react-hot-toast";

export const signUp = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/sign-up",
      user
    );

    dispatch({ type: REGISTER, payload: response.data });

    console.log(response.data);
    toast(response.data.msg, {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    navigate("/profile");
  } catch (error) {
    console.log(error.response.data.errors);
    error.response.data.errors.map((err) => toast.error(err.msg));
  }
};

export const signIn = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/sign-in",
      user
    );
    dispatch({ type: LOGIN, payload: response.data });
    console.log(response);
    if (response.data.user.role === 1) {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
    toast(response.data.msg, {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  } catch (error) {
    console.log(error.response.data.errors);
    error.response.data.errors.map((err) => toast.error(err.msg));
  }
};

export const logOut = (navigate) => {
  navigate("/login");
  return { type: LOG_OUT };
};
