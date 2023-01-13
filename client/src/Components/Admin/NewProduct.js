import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Actions/productAction";
import FileBase from "react-file-base64";
import { Toaster } from "react-hot-toast";

function NewProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: "",
    imageUrl: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const onDone = ({ base64 }) => {
    setProduct({ ...product, imageUrl: base64 });
    console.log(product);
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
    > <Toaster position="top-center" reverseOrder={false} />
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
            <div class="col-span-4 sm:col-span-3">
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
                Description
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
                Price
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
                CountInStock
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
            <div class="mt-2 col-span-6 sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-2 pb-6">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={onDone}
                        />
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF</p>
                </div>
              </div>
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
