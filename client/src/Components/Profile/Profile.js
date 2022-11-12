import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllUsers} from "../../Redux/Actions/userAction"



function Profile() {

    const state = useSelector((state) => state.userReducer);
    console.log(state)
     const dispatch = useDispatch();

    
   
     useEffect(() => {
       dispatch(getAllUsers());
     }, [dispatch]);
   
  return (
    <div>
          
  
        {
          state.users
          
          .map((elt) => <h1 key={elt._id} elt={elt}/>)
        } 
   
      </div>  
  )
}

export default Profile