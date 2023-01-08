import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 -mt-5">
              <div class="sm:flex sm:items-start">
                
               <div class="-space-y-px rounded-md w-full">
                <div class="mt-2 col-span-6 sm:col-span-3">
                    <label
                      for="username"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={newUser.username}
                      autocomplete="username"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div class="mt-2 col-span-6 sm:col-span-3">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      value={newUser.email}
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="mt-2 col-span-6 sm:col-span-3">
                    <label
                      for="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={newUser.password}
                      autocomplete="current-password"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="-mt-3 bg-gray-50 space-y-2 sm:space-y-0 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleUpdate}
              >
                Confirm
              </button>
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
