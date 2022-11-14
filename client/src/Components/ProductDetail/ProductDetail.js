import React from 'react'
import "./ProductDetail.css"
import { useSelector, useDispatch } from "react-redux";

function ProductDetail() {

  const {product}= useSelector((state) => state.productReducer)
  console.log(product);

  return (
    <div className="productscreen">
    
        <div className="productscreen__left">
          <div className="left__image">
            <img alt="" src={product.imageUrl}/>
          </div>
          <div className="left__info">
            <p className="left__name"></p>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
            <p>
              Price:
              <span>{product.name}$</span>
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