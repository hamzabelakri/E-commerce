import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../Redux/Actions/messageAction";
import { Toaster } from "react-hot-toast";

function Contact() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState({ name: "", email: "", message: "" });
  const handleChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
  };

  const onClick = (event) => {
    dispatch(sendMessage(message));
    setMessage({ name: "", email: "", message: "" });
    event.preventDefault();
  };

  return (
    <div class="min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600" required>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={message.name}
                    required
                    onChange={handleChange}
                    class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={message.email}
                    required
                    onChange={handleChange}
                    class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message.message}
                    required
                    class="w-full rounded-md border-gray-300 h-32 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex mx-auto no-underline rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 py-3 px-8 text-center font-medium text-white "
                  onClick={onClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
