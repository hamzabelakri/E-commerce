import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { getOneUser } from "../../Redux/Actions/userAction";
import { useNavigate } from "react-router-dom";
function UserCard({ elt }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    dispatch(getOneUser(elt._id, navigate));
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{elt.username}</Card.Title>

        <Card.Link href="#" onClick={handleClick}>
          View more
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
