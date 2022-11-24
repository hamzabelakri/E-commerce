import React from "react";
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
    /*     <div style={{display: "flex", justifyContent: "center"}}>
    <Card style={{ width: "18rem" }}> 
      <Card.Body>
        <Card.Title>{elt.username}</Card.Title>

        <Card.Link href="#" onClick={handleClick}>
          View more
        </Card.Link>
      </Card.Body>
    </Card>
    </div> */

    <div>
      <div class="flex">
        <img
          class="object-cover w-20 h-20 mr-4 rounded-full shadow"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="Person"
        />
        <div class="flex flex-col justify-center">
          <p class="text-lg font-bold">{elt.username}</p>
          {/* <p class="text-sm text-gray-800">{elt.email}</p> */}
          <a
            class="text-purple-600 hover:text-purple-500 underline text-sm"
            onClick={handleClick}
          >
            More Details 👉
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
