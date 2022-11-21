import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/Actions/userAction";
import UserCard from "./UserCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAllProducts } from "../../Redux/Actions/productAction";

function AdminProfile() {
  const state = useSelector((state) => state.userReducer);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  /*   useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]); */

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const onClick = (event) => {
    dispatch(getAllUsers());
  };

  return (
    <div>
      <h2
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={onClick}
      >
        USERS
      </h2>
      <h2 style={{ textDecoration: "underline", cursor: "pointer" }}>
        Products
      </h2>
      <Form style={{ display: "flex", justifyContent: "center" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>search a user</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="font-semibold max-w-lg mb-6 font-sans text-3xl  leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            ALL USERS
          </h2>
        </div>
        <div>
          <div class="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
            {state.users
              .filter((user) =>
                user.username.toLowerCase().includes(input.toLocaleLowerCase())
              )

              .map((elt) => (
                <UserCard key={elt._id} elt={elt} />
              ))}
          </div>
        </div>
      </div>
   </div>
  );
}

export default AdminProfile;
