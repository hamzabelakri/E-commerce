import React from 'react'
import { useSelector } from "react-redux";

function UserProfile() {

  const { user } = useSelector((state) => state.authReducer);

  return (
    
      <div >
        <h1 >{user && user.username}</h1>
    
      <h3>{user && user.email}</h3>
  </div>
  )
}

export default UserProfile