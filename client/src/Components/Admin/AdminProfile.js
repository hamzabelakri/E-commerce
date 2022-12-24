import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/Actions/userAction";
import UserCard from "./UserCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAllMessages } from "../../Redux/Actions/messageAction";
import MessageCard from "./MessageCard";
function AdminProfile() {
  const state = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  /*   useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]); */

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const getUsers = (event) => {
    dispatch(getAllUsers());
  };
  const getMessages = (event) => {
    dispatch(getAllMessages());
  };

  return (
    <div>
      <div class="flex justify-center	mt-4">
      <p
       class="cursor-pointer no-underline inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
        onClick={getUsers}
      >
        Users ({state.users.length})
      </p>

      <p
       class="cursor-pointer no-underline inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"

        
        onClick={getMessages}
      >
        Messages ({messages.length})
      </p>
      </div>

      <div class="flex items-center justify-center ">
    <div class="flex border-2 border-gray-200 rounded">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search a user"  onChange={handleChange}
        />
      
    </div>
</div>

      
      <div>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
         
          <div>
            <div class="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
              {state.users
                .filter((user) =>
                  user.username
                    .toLowerCase()
                    .includes(input.toLocaleLowerCase())
                )

                .map((elt) => (
                  <UserCard key={elt._id} elt={elt} />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       
        <div>
          <div class="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
            {messages.map((msg) => (
              <MessageCard key={msg._id} msg={msg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
