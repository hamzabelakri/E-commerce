import React from "react";

function Cart() {
  return (

    /* <div className="cartitem">
      <div className="cartitem__image">
        <img src="" alt="" />
      </div>
       <Link to={`/product`} className="cartItem__name">
        <p></p>
      </Link> 
      <p className="cartitem__price">$</p>
      <select className="cartItem__select"></select>
      <button className="cartItem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div> */

    <>
      <div class="flex flex-col items-center  bg-white py-3 sm:flex-row sm:px-10 lg:px-20 xl:px-32"></div>
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium">Order Summary</p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div class="flex w-full flex-col px-4 py-4">
                <span class="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>

                <p class="text-lg font-bold">$138.99</p>
              </div>
            </div>
            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div class="flex w-full flex-col px-4 py-4">
                <span class="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>

                <p class="mt-auto text-lg font-bold">$238.99</p>
              </div>
            </div>
            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div class="flex w-full flex-col px-4 py-4">
                <span class="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>

                <p class="text-lg font-bold">$138.99</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <div class="mt-6  border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Subtotal</p>
              <p class="font-semibold text-gray-900">$399.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Shipping</p>
              <p class="font-semibold text-gray-900">$8.00</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900">$408.00</p>
          </div>
          <div class="mt-6 flex items-center ">
            <button class="mt-4 mb-8 w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
