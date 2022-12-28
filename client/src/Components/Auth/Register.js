import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/Actions/authAction";
import { useNavigate } from "react-router-dom";

function Sign() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(user, navigate));

    setUser({ username: "", email: "", password: "" });
  };

  return (
    <div
      class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      onSubmit={onSubmit}
    >
      <div class="w-full max-w-md space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create a new account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-3 rounded-md ">
            <div>
              <label for="username" class=""></label>
              <input
                id="username"
                name="username"
                value={user.username}
                type="username"
                required
                autocomplete="username"
                class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="email-address" class=""></label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={user.email}
                required
                autocomplete="email"
                class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="password" class=""></label>
              <input
                id="password"
                name="password"
                type="password"
                value={user.password}
                required
                autocomplete="current-password"
                class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>

    /*     <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>username</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="username"
          placeholder="Enter username"
          value={user.username}
          name="username"
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          value={user.email}
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */
  );
}

export default Sign;
