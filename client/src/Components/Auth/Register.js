import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/Actions/authAction";
import { useNavigate } from "react-router-dom";

function Sign() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(user, navigate));

    setUser({ username: "", email: "", password: "" });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>username</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="username"
          placeholder="Enter username"
          value={user.username}
          name="username"
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          value={user.email}
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Sign;
