import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/Actions/userAction";
import { getAllMessages } from "../../Redux/Actions/messageAction";
import { getAllProducts } from "../../Redux/Actions/productAction";

import MessageCard from "./MessageCard";
import UserCard from "./UserCard";
import ProductsList from "./ProductsList";

function AdminProfile() {
  const { users } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div class="flex bg-gray-50">
      <div class="md:flex items-center justify-center w-full px-4 py-2  lg:w-full">
        <div class=" mx-auto mt-8">
          <div class="grid gap-4 lg:grid-cols-3">
            <a href="#users" class="no-underline bg-white">
              <div class="flex items-center px-4 py-6  hover:bg-gray-100 hover:shadow-lg	 rounded-md shadow-md cursor-pointer">
                <div class="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div class="mx-4">
                  <h4 class="text-2xl font-semibold text-gray-700">
                    {users.length}
                  </h4>
                  <div class="text-gray-500">Users</div>
                </div>
              </div>
            </a>
            <a href="#messages" class="no-underline bg-white">
              <div class="flex items-center px-4 py-6 	 hover:bg-gray-100 hover:shadow-lg	 rounded-md shadow-md cursor-pointer">
                <div class="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <div class="mx-4">
                  <h4 class="text-2xl font-semibold text-gray-700">
                    {messages.length}
                  </h4>
                  <div class="text-gray-500">Messages</div>
                </div>
              </div>
            </a>
            <a href="#products" class="no-underline bg-white">
              <div class="flex items-center px-4 py-6  hover:bg-gray-100 hover:shadow-lg rounded-md shadow-md cursor-pointer">
                <div class="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
                <div class="mx-4">
                  <h4 class="text-2xl font-semibold text-gray-700">
                    {" "}
                    {products.length}
                  </h4>
                  <div class="text-gray-500">Products</div>
                </div>
              </div>
            </a>
          </div>
          {/* users section */}
          <div class="flex flex-col mt-8 mb-8" id="users">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div class="inline-block min-w-full overflow-hidden align-middle  bg-white shadow-md sm:rounded-lg">
                <table class="min-w-full">
                  <thead>
                    <tr>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Name
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Email
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Status
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Edit
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  {users.map((elt) => (
                    <UserCard key={elt._id} elt={elt} />
                  ))}
                </table>
              </div>
            </div>
          </div>
          {/* messages section */}
          <div class="flex flex-col mt-8 mb-8" id="messages">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div class="inline-block min-w-full overflow-hidden align-middle  bg-white shadow-md sm:rounded-lg">
                <table class="min-w-full">
                  <thead>
                    <tr>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Name
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Email
                      </th>

                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Message
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  {messages.map((msg) => (
                    <MessageCard key={msg._id} msg={msg} />
                  ))}
                </table>
              </div>
            </div>
          </div>
          {/* products section */}
          <div class="flex flex-col mt-8 mb-8" id="products">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div class="inline-block min-w-full overflow-hidden align-middle  bg-white shadow-md sm:rounded-lg">
                <table class="min-w-full">
                  <thead>
                    <tr>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Item
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Price
                      </th>

                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        In stock
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  {products.map((prod) => (
                    <ProductsList key={prod._id} prod={prod} />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;

/*  <>
  <h3 class="flex justify-center text-lg font-medium leading-6 text-gray-900">Users</h3>
  <main class="md:flex items-center justify-center">
   <div class="flex flex-col mt-6">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
            <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Role
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
               
                  <tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">Ahmed Kamel</div>
                          <div class="text-sm text-gray-500">ahmed.kamel@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                      <div class="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >
                        Active
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
                    <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
  </> */
