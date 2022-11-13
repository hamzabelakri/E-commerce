import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {updateUser} from "../../Redux/Actions/userAction";
import {deleteUser} from "../../Redux/Actions/userAction";

function UserDetails({ elt }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const [newUser, setNewUser]= useState({ username:"",email: "", password: ""})
  const handleChange=(event)=>{
    setNewUser({...newUser, [event.target.name]: event.target.value})
    
  }
  const onClick=(event)=> {
    event.preventDefault();
dispatch(updateUser(state.user._id, newUser))


  }

  const handleDelete=(event)=> {
    dispatch(deleteUser(state.user._id))
  }

  return (
    <>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />

      <ListGroup className="list-group-flush">
        <ListGroup.Item>{state.user.username}</ListGroup.Item>
        <ListGroup.Item>{state.user.email}</ListGroup.Item>
      </ListGroup>
      <Button variant="success">update</Button>{' '}
      <Button variant="danger" onClick={handleDelete}>delete</Button>{' '}
    </Card>

<div>
    <Form >
    <Form.Group className="mb-3" >
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter a new userame" name="username" value={newUser.username} onChange={handleChange}/>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter a new email" name="email" value={newUser.email} onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter a new Password" name="password" value={newUser.password} onChange={handleChange}/>
    </Form.Group>
    
    <Button variant="primary" type="submit" onClick={onClick}>
      Update
    </Button>
  </Form>
  </div>
  </>
  );
}

export default UserDetails;
