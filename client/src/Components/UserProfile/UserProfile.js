import React from "react";
import { useSelector } from "react-redux";

function UserProfile() {
  const { user } = useSelector((state) => state.authReducer);

  return (
    /*       <div >
        <h1 >{user && user.username}</h1>
    
      <h3>{user && user.email}</h3>
  </div> */

    <main class="bg-gray-100 bg-opacity-25">
      <div class="lg:w-8/12 lg:mx-auto mb-8">
        <header class="flex flex-wrap items-center p-4 md:py-8">
          <div class="md:w-3/12 md:ml-16">
            <img
              class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                   border-2 border-pink-600 p-1"
              src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt="profile"
            />
          </div>

          <div class="w-8/12 md:w-7/12 ml-4">
            <div class="md:flex md:flex-wrap md:items-center mb-4">
              <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                {user && user.username}
              </h2>

              <a
                href="#"
                class="bg-blue-500 px-2 py-1 
                      text-white font-semibold text-sm rounded block text-center 
                      sm:inline-block "
              >
                Edit
              </a>
            </div>

            <div class="hidden md:block">
              <span>{user && user.email}</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>

          <div class="md:hidden text-sm my-2">
            <h1 class="font-semibold">Mr Travlerrr...</h1>
            <span>Travel, Nature and Music</span>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </header>

        <div class="px-px md:px-3">
          <ul
            class="flex items-center justify-around md:justify-center space-x-12  
                  uppercase tracking-widest font-semibold text-xs text-gray-600
                  border-t"
          >
            <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
              <a class="inline-block p-3" href="#">
                <i class="fas fa-th-large text-xl md:text-xs"></i>
                <span class=" md:inline">postS</span>
              </a>
            </li>
          </ul>

          <div class="flex flex-wrap -mx-px md:-mx-3">
            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                  <img
                    class="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />

                  <i class="fas fa-square absolute right-0 top-0 m-1"></i>

                  <div
                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                              left-0 top-0 hidden"
                  >
                    <div
                      class="flex justify-center items-center 
                                  space-x-4 h-full"
                    >
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        412K
                      </span>

                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        2,909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserProfile;
