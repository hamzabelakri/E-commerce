import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { updateUser } from "../../Redux/Actions/userAction";

function UpdateModal({ setShow }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    
  };
  const handleCancel = (event) => {
    setShow(false);
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser(state.user._id, newUser));
  };
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-1 text-center sm:mt-0 sm:ml-2 sm:text-left">
                <label for="username" >Username</label>
          <input id="username" name="username" value={newUser.username} type="username"  autocomplete="username" required class="relative  w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email username" onChange={handleChange}/>


          <label for="email-address" >Email address</label>
          <input id="email-address" name="email" type="email" value={newUser.email}  autocomplete="email" required class="relative  w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" onChange={handleChange}/>

          <label for="password" >Password</label>
          <input id="password" name="password" type="password" value={newUser.password}  autocomplete="current-password" required class="relative  w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter password" onChange={handleChange}/>

                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleUpdate} >
                Update
              </button>
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
