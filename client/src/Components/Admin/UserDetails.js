import React, { useState } from "react";

import { useSelector } from "react-redux";

import UpdateModal from "../Admin/UpdateModal";
import DeleteModal from "./DeleteModal";

function UserDetails() {
  const state = useSelector((state) => state.userReducer);

  const [show, setShow] = useState(false);
  const handleShow = (event) => {
    show ? setShow(false) : setShow(true);
  };

  const [alert, setAlert] = useState(false);
  const handleAlert = (event) => {
    alert ? setAlert(false) : setAlert(true);
  };

  return (
    <div class="py-12 h-fit	 bg-gray-300">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
        <div class="md:flex">
          <div class="w-full p-2 py-10">
            <div class="flex justify-center">
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  class="rounded-sm h-80"
                />
              </div>
            </div>

            <div class="flex flex-col text-center mt-3 mb-4">
              <span class="text-2xl font-medium"></span>
              <span class="text-md text-gray-400"></span>
            </div>

            <div class="px-16 text-center text-lg font-semibold text-gray-800">
              <p>{state.user.username}</p>
              <p>{state.user.email}</p>
            </div>

            <div class="px-16 mt-3 text-center"></div>

            <div class="px-14 mt-5">
              <button
                class="h-12 bg-blue-700 w-full text-white text-base font-medium rounded hover:shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2"
                onClick={handleShow}
              >
                Update
              </button>
              <button
                class="h-12  w-full text-white text-base font-medium rounded bg-red-600 hover:shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 "
                onClick={handleAlert}
              >
                Delete
              </button>
            </div>

            {show && <UpdateModal setShow={setShow} />}
            {alert && <DeleteModal setAlert={setAlert} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
