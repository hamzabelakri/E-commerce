import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../Redux/Actions/userAction";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../Redux/Actions/userAction";

function UserCard({ elt }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { connected } = useSelector((state) => state.authReducer);
  const {user} = useSelector((state) => state.userReducer);

  const handleClick = (event) => {
    dispatch(getOneUser(elt._id, navigate));
  };
  const handleDelete = (event) => {
    if (window.confirm("Are you sure") == true) {
    dispatch(deleteUser(elt._id));
  }
  };
  return (
    <tbody class="bg-white">
      <tr class="hover:bg-gray-100 hover:shadow-lg">
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="admin dashboard ui"
              />
            </div>

            <div class="ml-4">
              <div class="text-sm font-medium leading-5 text-gray-900">
                {elt.username}
              </div>
            </div>
          </div>
        </td>

        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="text-sm leading-5 text-gray-500">{elt.email}</div>
        </td>

        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          {connected ? (
            <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
              Active
            </span>
          ) : (
            <span class="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
              Inactive
            </span>
          )}
        </td>

        <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-blue-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClick}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </td>
        <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer w-6 h-6 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleDelete}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </td>
      </tr>
      <tr></tr>
    </tbody>
  );
}

export default UserCard;
