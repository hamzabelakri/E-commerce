import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {logOut} from '../../Redux/Actions/authAction'

function CustomNavbar() {
  const {connected}= useSelector((state) => state.authReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeconnect=(event)=> {
    dispatch(logOut(navigate ))
  }

  return (

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


<header class="relative bg-white">
<nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div class="border-b border-gray-200">
    <div class="flex h-16 items-center">
      <div class="ml-4 flex lg:ml-0">
        <a href="#">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>

      <div class="hidden lg:ml-8 lg:block lg:self-stretch">
        <div class="flex h-full space-x-8">
        
          <a
            href="#"
            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800" 
          >
           <Link to="/landingpage">
            Home
            </Link>
          </a>

          <a
            href="#"
            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
             <Link to="/">
            Products
            </Link>
          </a>
          <a
            href="#"
            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
             <Link to="/contact">
            Contact us
            </Link>
          </a>
          
        </div>
      </div>

      <div class="ml-auto flex items-center">
        <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        {connected ? (<a
            href="#"            

            class="text-sm font-medium text-gray-700 hover:text-gray-800" 
          onClick={handleDeconnect}>
            Log out 
          </a>):(
        
          <a
            href="#"            

            class="text-sm font-medium text-gray-700 hover:text-gray-800" 
          >
          <Link to="/login">  Sign in </Link>
          </a>)}
          
          <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
       
        </div>

        <div class="ml-4 flow-root lg:ml-6">
          <a href="#" class="group -m-2 flex items-center p-2">
          <Link to="/cart"><svg
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
            </svg></Link>
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


  )
}

export default CustomNavbar