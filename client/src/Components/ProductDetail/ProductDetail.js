import React from 'react'
import "./ProductDetail.css"
function ProductDetail() {
  return (
    <div className="productscreen">
    
        <div className="productscreen__left">
          <div className="left__image">
            <img alt="" />
          </div>
          <div className="left__info">
            <p className="left__name"></p>
            <p>Price: $</p>
            <p>Description: </p>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
            <p>
              Price:
              <span>$</span>
            </p>
            <p>
              Status:
              <span>
                
              </span>
            </p>
            <p>
              Qty
              <select >
              <option>
              </option>
              </select>
            </p>
            <p>
              <button type="button" >
                Add To Cart
              </button>
            </p>
          </div>
        </div>
     
   
  </div>
  )
}

export default ProductDetail