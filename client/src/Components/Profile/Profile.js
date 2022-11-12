import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/Actions/userAction";
import UserCard from "./UserCard";
import Spinner from "react-bootstrap/Spinner";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Profile() {
  const state = useSelector((state) => state.userReducer);
  const [input, setInput]= useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
const handleChange=(event)=> {
  setInput(event.target.value)
  console.log(input)
}
  return (
<>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>search a user</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
        
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
    
      {state.users.length === 0 ? (
        <Spinner animation="border" variant="success" />
      ) : (
        state.users.filter((user)=>user.username.toLowerCase().includes(input.toLocaleLowerCase()))
        
        .map((elt) => <UserCard key={elt._id} elt={elt} />)
      )}
   </>
  );
}

export default Profile;
