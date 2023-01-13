import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteMessage,
  getAllMessages,
} from "../../Redux/Actions/messageAction";


function MessageCard({ msg }) {
  const dispatch = useDispatch();

  const handeDelete = (event) => {
    if (window.confirm("Are you sure") == true) {
      dispatch(deleteMessage(msg._id));
      dispatch(getAllMessages);
    }
  };
  return (
    <tbody class="bg-white">
      <tr class="hover:bg-gray-100 hover:shadow-lg">
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="flex items-center">
            <div class="">
              <div class="text-sm font-medium leading-5 text-gray-900">
                {msg.name}
              </div>
            </div>
          </div>
        </td>

        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="text-sm leading-5 text-gray-500">{msg.email}</div>
        </td>

        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="text-sm leading-5 text-gray-500">{msg.message}</div>
        </td>
        <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer w-6 h-6 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handeDelete}
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

export default MessageCard;
