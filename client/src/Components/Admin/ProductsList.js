import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/Actions/productAction";
import { Toaster } from "react-hot-toast";

function ProductsList({ prod }) {
  const dispatch = useDispatch();

  const handeDelete = (event) => {
    if (window.confirm("Are you sure") == true) {
      dispatch(deleteProduct(prod._id));
    }
  };

  return (
    <tbody class="bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      <tr class="hover:bg-gray-100 hover:shadow-lg">
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
              <img
                class="w-full h-full object-cover rounded-full"
                src={prod.imageUrl}
                alt="admin dashboard ui"
              />
            </div>

            <div class="ml-4">
              <div class="text-sm font-medium leading-5 text-gray-900">
                {prod.name}
              </div>
            </div>
          </div>
        </td>

        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="text-sm leading-5 text-gray-500">
            <span class="text-gray-700 font-medium">$</span> {prod.price}
          </div>
        </td>

        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            {prod.countInStock}
          </span>
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
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            
          </span>
        </td>
      </tr>
      <tr></tr>
    </tbody>
  );
}

export default ProductsList;
