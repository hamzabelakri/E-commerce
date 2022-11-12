import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {signIn} from "../../Redux/Actions/userAction"
function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser]= useState({email:"", password:""})
    const handleChange = (event)=>{
        setUser({...user, [event.target.name]: event.target.value})
       
    }

    const onSubmit=(event)=>{
        dispatch(signIn(user), navigate)
        event.preventDefault();
        setUser({email: "", password: "",});

    }
  return (
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control  type="password" placeholder="Password" value={user.password} name="password" onChange={handleChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
     
    </Form.Group>
    <Button variant="primary" type="submit" >
      Submit
    </Button>
  </Form>
  )
}

export default Login