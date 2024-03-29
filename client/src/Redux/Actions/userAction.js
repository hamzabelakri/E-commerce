import {
  GET_ALL_USERS,
  GET_ONE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../Types";
import axios from "axios";
import toast from "react-hot-toast";


export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("https://e-commerce-1pvm.onrender.com/users");

    dispatch({ type: GET_ALL_USERS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.get(`https://e-commerce-1pvm.onrender.com/users/${id}`);
    dispatch({ type: GET_ONE_USER, payload: response.data });
    navigate(`/user/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, newUser) => async (dispatch) => {
  try {
    const response = await axios.put(
      `https://e-commerce-1pvm.onrender.com/users/${id}`,
      newUser
    );
    dispatch({ type: UPDATE_USER, payload: response.data });
    toast.success(response.data.msg);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.delete(`https://e-commerce-1pvm.onrender.com/users/${id}`);

    dispatch({ type: DELETE_USER });
    toast.success(response.data.msg)
    navigate("/admin");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
