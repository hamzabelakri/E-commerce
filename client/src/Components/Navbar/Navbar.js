import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
<nav className="navbar">
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
      </li>
      
   
    </ul>

    <div className="hamburger__menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav> 


  )
}

export default CustomNavbar