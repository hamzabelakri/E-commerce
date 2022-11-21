import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { updateUser } from "../../Redux/Actions/userAction";
import UpdateUser from "../Admin/UpdateUser";
import DeleteModal from "./DeleteModal";

function UserDetails() {
  const dispatch = useDispatch();
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

  const [alert, setAlert] = useState(false);
  const handleAlert = (event) => {
    alert ? setAlert(false) : setAlert(true);
  };

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  const onClick = (event) => {
    event.preventDefault();
    dispatch(updateUser(state.user._id, newUser));
  };

  


  return (
    /*  <>
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
    </> */
    <div class="py-12 h-fit	 bg-gray-300">
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
  <div class="md:flex">
      <div class="w-full p-2 py-10">
        
        <div class="flex justify-center"> 
          <div class="relative">

            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" class="rounded-sm h-80" width="80" />
         
          
            
          </div>
          
        </div>

        <div class="flex flex-col text-center mt-3 mb-4">

          <span class="text-2xl font-medium"></span>
          <span class="text-md text-gray-400"></span>
          
        </div>

         <p class="px-16 text-center text-md text-gray-800">Actress, musician, songwriter, and artist.DM for work inquires or <a class="text-blue-800 text-md font-bold" href="#">#tag </a>me in your message.</p>

         <div class="px-16 mt-3 text-center">
           

         </div>
            
         <div class="px-14 mt-5">

         <button class="h-12 bg-blue-700 w-full text-white text-base font-medium rounded hover:shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2" onClick={handleShow}>Update</button>
       <button class="h-12  w-full text-white text-base font-medium rounded bg-red-600 hover:shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 "onClick={handleAlert}>Delete</button>

           
         </div>
        
         {show && <UpdateUser setShow={setShow}/>}
         {alert && <DeleteModal setAlert={setAlert}/>}
        
      </div>
   
  </div>
</div>
  
</div>

  );
}

export default UserDetails;
