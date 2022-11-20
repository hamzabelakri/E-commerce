import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { updateUser } from "../../Redux/Actions/userAction";
import { deleteUser } from "../../Redux/Actions/userAction";
import UpdateUser from "../Admin/UpdateUser"

function UserDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.userReducer);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const handleShow = (event) => {
    show ? setShow(false) : setShow(true);
  };

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  const onClick = (event) => {
    event.preventDefault();
    dispatch(updateUser(state.user._id, newUser));
  };

  const handleDelete = (event) => {
    dispatch(deleteUser(state.user._id, navigate));
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{state.user.username}</ListGroup.Item>
          <ListGroup.Item>{state.user.email}</ListGroup.Item>
        </ListGroup>
        <Button variant="success" onClick={handleShow}>
          update
        </Button>{" "}
        <Button variant="danger" onClick={handleDelete}>
          delete
        </Button>{" "}
      </Card>

      <div>
        {show && <UpdateUser/>}
      </div>
    </>
  );
}

export default UserDetails;
