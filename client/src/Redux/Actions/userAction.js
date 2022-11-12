import {GET_ALL_USERS, GET_ONE_USER} from '../Types'
import axios from "axios";



export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/users");

    dispatch({ type: GET_ALL_USERS, payload: response.data });
    
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser=(id, navigate) => async (dispatch)=> 
{

  try {
    const response = await axios.get(`http://localhost:5000/users/${id}`)
    dispatch({ type: GET_ONE_USER, payload: response.data });
    navigate(`/user/${id}`);
    console.log(response.data) 
  } catch (error) {
    console.log(error);
  }

}