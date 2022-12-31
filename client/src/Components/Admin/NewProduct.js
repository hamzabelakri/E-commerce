import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Actions/productAction";

function NewProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(product));
    console.log(product);
  };

  return (
    <div
      class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      onSubmit={onSubmit}
    >
      <div class="w-full max-w-md space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Add a new product
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-3 rounded-md ">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="last-name"
                autocomplete="family-name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                name="name"
                value={product.name}
                required
                onChange={handleChange}
              />
            </div>
            <div class="mt-2 col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
              >
                description
              </label>
              <input
                type="text"
                name="description"
                value={product.description}
                id="last-name"
                autocomplete="family-name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
                onChange={handleChange}
              />
            </div>
            <div class="mt-2 col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
              >
                price
              </label>
              <input
                type="text"
                name="price"
                value={product.price}
                id="last-name"
                autocomplete="family-name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
                onChange={handleChange}
              />
            </div>
            <div class="mt-2 col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
              >
                countInStock
              </label>
              <input
                type="text"
                name="countInStock"
                value={product.countInStock}
                id="last-name"
                autocomplete="family-name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
