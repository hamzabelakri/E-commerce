import React from 'react'
import { Link } from "react-router-dom";

function NoAccess() {
  return (
<section class="flex items-center p-16 bg-gray-50 dark:text-gray-100">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div class="max-w-md text-center">
          <h2 class="mb-8 font-extrabold text-9xl text-gray-600">
            <span class="sr-only">Error</span>403
          </h2>
          <p class="text-2xl font-semibold md:text-3xl text-gray-600">
            Oops! 
            <br/>
            Access Denied
          </p>

          <a class="mt-2 no-underline  inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-3 text-center font-medium text-white hover:bg-indigo-700">
            {" "}
            <Link to="/" class="no-underline text-white">
              Back to homepage{" "}
            </Link>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NoAccess