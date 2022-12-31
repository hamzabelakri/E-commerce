import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";
import ProductCard from "../ProductCard/ProductCard";

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
        <div class="flex justify-between	">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Trending ...
          </h2>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <div class="input-group relative flex  items-stretch w-full mb-4">
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
    </div>
  );
}

export default Home;
