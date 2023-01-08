import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";
import ProductCard from "../ProductCard/ProductCard";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

function Home() {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  return (
    <div class="">
      <div class="mx-auto max-w-2xl py-12 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="sm:flex sm:justify-center">
          <div class="relative  -mt-4 sm:-mt-1 rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.length === 0 ? (
            <div class="flex justify-center items-center space-x-2">
              <div
                class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            products
              .filter((carac) =>
                carac.name.toLowerCase().includes(input.toLocaleLowerCase())
              )
              .map((elt) => <ProductCard key={elt._id} elt={elt} />)
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Home;
