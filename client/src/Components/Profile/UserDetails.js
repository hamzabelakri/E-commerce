import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

function UserDetails({ elt }) {
  const state = useSelector((state) => state.userReducer);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />

      <ListGroup className="list-group-flush">
        <ListGroup.Item>{state.user.username}</ListGroup.Item>
        <ListGroup.Item>{state.user.email}</ListGroup.Item>
      </ListGroup>
      <Button variant="success">update</Button>{' '}
      <Button variant="danger">delete</Button>{' '}
    </Card>
  );
}

export default UserDetails;
