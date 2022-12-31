import React, { useState } from "react";
import { getOneProduct } from "../../Redux/Actions/productAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

function ProductCard({ elt }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = (event) => {
    dispatch(getOneProduct(elt._id));
    show ? setShow(false) : setShow(true);
  };
  return (
    <div class="group relative" onClick={handleClick}>
      {show && <ProductDetail setShow={setShow} />}
      <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={elt.imageUrl}
          alt="Front of men&#039;s Basic Tee in black."
          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            
              <span aria-hidden="true" class="absolute inset-0"></span>
              {elt.name}
            
          </h3>
          <p class="mt-1 text-sm text-gray-500">in stock {elt.countInStock}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">${elt.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;


