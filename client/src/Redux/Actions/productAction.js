import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  GET_ONE_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "../Types";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/product");

    dispatch({ type: GET_ALL_PRODUCTS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getOneProduct = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    dispatch({ type: GET_ONE_PRODUCT, payload: response.data });
    /* navigate(`/product/${id}`) */
  } catch (error) {}
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/product", product);
    dispatch({ type: ADD_PRODUCT, payload: response.data });
    alert(response.data.msg);
  } catch (error) {
    console.log(error.response.data.error);
   alert(error.response.data.error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/product/${id}`);

    dispatch({ type: DELETE_PRODUCT });
    console.log(response.data);
    alert(response.data.msg);
  } catch (error) {
    console.log(error);
  }
};
