import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="" alt="" />
      </div>
      {/* <Link to={`/product`} className="cartItem__name">
        <p></p>
      </Link> */}
      <p className="cartitem__price">$</p>
      <select className="cartItem__select"></select>
      <button className="cartItem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Cart;
