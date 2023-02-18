import React from "react";

export default function Navbar() {
  function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu"
      ? ((e.name = "close"),
        list.classList.add("top-[80px]"),
        list.classList.add("opacity-100"))
      : ((e.name = "menu"),
        list.classList.remove("top-[80px]"),
        list.classList.remove("opacity-100"));
  }
  return (
    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center ">
        <span class="text-2xl font-[Poppins] cursor-pointer">
          tailwind X Html
        </span>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">
            SERVICE
          </a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">
            ABOUT
          </a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">
            CONTACT
          </a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">
            BLOG'S
          </a>
        </li>
        <h2 class=""></h2>
      </ul>
    </nav>
  );
}
