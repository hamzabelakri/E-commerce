import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions/userAction";



function Sign() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    countInStock:"",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(postUser(user));
    setUser({ username: "", email: "", password: "", countInStock:"" });
   
  };

  return (
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label >username</Form.Label>
      <Form.Control onChange={handleChange} type="username" placeholder="Enter username" value={user.username} name="username"/>
      <Form.Label>Email address</Form.Label>
      <Form.Control onChange={handleChange} type="email" placeholder="Enter email" value={user.email} name="email"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={handleChange} type="password" placeholder="Password" value={user.password} name="password"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
     
    </Form.Group>
    <Button variant="primary" type="submit" >
      Submit
    </Button>
  </Form>


  );
}

export default Sign;

