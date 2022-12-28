import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Redux/Actions/authAction";

function CustomNavbar() {
  const [open, setOpen] = useState(false);

  const { connected } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeconnect = (event) => {
    dispatch(logOut(navigate));
  };
  const handleClick = (event) => {
    setOpen(!open);
  };

  return (
    <header class="relative bg-white">
      {open && (
        <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>

          <div class="fixed inset-0 z-40 flex">
            <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={handleClick}
                >
                  <span class="sr-only">Close menu</span>

                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div class="mt-2">
                <div class="space-y-10 px-4 pt-10 pb-8" onClick={handleClick}>
                  <div>
                    <p href="#" class="font-medium ">
                      <Link to="/" class="no-underline text-gray-900">
                        Home
                      </Link>
                    </p>
                    <p href="#" class="font-medium ">
                      <Link to="/products" class="no-underline text-gray-900">
                        Products
                      </Link>
                    </p>
                    <p href="#" class="font-medium">
                      <Link to="/contact" class="no-underline text-gray-900">
                        Contact us
                      </Link>
                    </p>
                    <div class="border-t border-gray-200 mb-2"></div>

                    {connected ? (
                      <p
                        href="#"
                        class="cursor-pointer font-medium text-gray-900"
                        onClick={handleDeconnect}
                      >
                        Log out
                      </p>
                    ) : (
                      <p href="#" class="font-medium ">
                        <Link to="/login" class="no-underline text-gray-900">
                          {" "}
                          Sign in{" "}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <div class="hidden md:block lg:ml-0">
              <a href="#">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            <div
              class="flex md:hidden cursor-pointer text-gray-700	"
              onClick={handleClick}
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>

            <div class="hidden md:ml-8 md:block md:self-stretch">
              <div class="flex h-full space-x-8">
                <a href="#" class="no-underline	flex items-center ">
                  <Link
                    to="/"
                    class="no-underline text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Home
                  </Link>
                </a>

                <a href="#" class="no-underline flex items-center ">
                  <Link
                    to="/products"
                    class="no-underline text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Products
                  </Link>
                </a>
                <a href="#" class="no-underline flex items-center ">
                  <Link
                    to="/contact"
                    class="no-underline text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Contact us
                  </Link>
                </a>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <div class="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
                {connected ? (
                  <a
                    href="#"
                    class="no-underline text-sm font-medium text-gray-700 hover:text-gray-800"
                    onClick={handleDeconnect}
                  >
                    Log out
                  </a>
                ) : (
                  <a href="#" class="no-underline ">
                    <Link
                      to="/login"
                      class="no-underline text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {" "}
                      Sign in{" "}
                    </Link>
                  </a>
                )}

                <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              </div>

              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 flex items-center p-2">
                  <Link to="/cart">
                    <svg
                      class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </Link>
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default CustomNavbar;

/* <nav className="navbar">
    <div className="navbar__logo">
    <Link to="/">
      <h2>My Store</h2>
      </Link>     
    </div>

    <ul className="navbar__links">
      <li>
        <Link to="/cart" className="cart__link">
          <i className="fas fa-shopping-cart"></i>
          <span>
            Cart <span className="cartlogo__badge">1</span>
          </span>
        </Link>
      </li> */

/*  {connected && (
            <div>
              
              <i onClick={handleDeconnect}>Log Out</i>
             
         
             <p style={{ color: "white" }}>{user && user.username}</p> 
            </div>)}  */
/*     </ul>

    <div className="hamburger__menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>  */
