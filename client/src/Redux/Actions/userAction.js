import {
  GET_ALL_USERS,
  GET_ONE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../Types";
import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/users");

    dispatch({ type: GET_ALL_USERS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    dispatch({ type: GET_ONE_USER, payload: response.data });
    navigate(`/user/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, newUser) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/users/${id}`,
      newUser
    );
    dispatch({ type: UPDATE_USER, payload: response.data });
    alert(response.data.msg)
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/users/${id}`);

    dispatch({ type: DELETE_USER });
    alert(response.data.msg)
    navigate("/admin");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
