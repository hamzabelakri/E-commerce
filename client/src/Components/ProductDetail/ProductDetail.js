import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem  } from "../../Redux/Actions/cartAction";

function ProductDetail({ setShow }) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  const handleShow = (event) => {
    setShow(false);
  };

  const handleAddToCart = (event) => {
    dispatch(addItem (product));
 

  };
  return (
    <div class="relative z-10" role="dialog" aria-modal="true">
      <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                onClick={handleShow}
              >
                <span class="sr-only">Close</span>
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
              <div class="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                <div class="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    class="object-fill object-center "
                  />
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                    {product.name}
                  </h2>
                  <section aria-labelledby="information-heading" class="mt-2">
                    <p class="text-2xl text-gray-900">{product.description}</p>
                    <p class="font-medium text-2xl text-gray-900">
                      ${product.price}
                    </p>
                    <p class="text-2xl text-gray-900">
                      in stock{" "}
                      <span class="bg-green-400	text-white	">
                        {product.countInStock}
                      </span>
                    </p>
                  </section>
                  <section aria-labelledby="options-heading" class="mt-10">
                    <h3 id="options-heading" class="sr-only">
                      Product options
                    </h3>
            
                      <button
                        type="submit"
                        class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={handleAddToCart}
                      >
                        Add to cart
                      </button>
  
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

/*  <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img alt="" src={product.imageUrl} />
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
            <span></span>
          </p>
          <p>
            Qty
            <select>
              <option></option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div> */
