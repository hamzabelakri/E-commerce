import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/Actions/userAction";
import UserCard from "./UserCard";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {getAllProducts} from "../../Redux/Actions/productAction";

function AdminProfile() {
  const state = useSelector((state) => state.userReducer);
  const [input, setInput]= useState("")

  const dispatch = useDispatch();

/*   useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]); */

const handleChange=(event)=> {
  setInput(event.target.value)
  console.log(input)
}

const onClick= (event) => {
  dispatch(getAllUsers());
}

  return (
<>
<h2 style={{textDecoration : "underline", cursor: "pointer"}} onClick={onClick}>USERS</h2>
<h2 style={{textDecoration : "underline", cursor: "pointer"}} >Products</h2>
    <Form style={{display: "flex", justifyContent: "center"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>search a user</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
        
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
    <div>
      {
        state.users.filter((user)=>user.username.toLowerCase().includes(input.toLocaleLowerCase()))
        
        .map((elt) => <UserCard key={elt._id} elt={elt} />)
      }
      </div>
      
   </>
  );
}

export default AdminProfile;