import React from "react";
import { useToggle } from "../../Providers/Context";

const TopNavigation = () => {
  const { toggle } = useToggle();
  return (
    <header className="h-16 md:h-20 items-center relative w-full z-10">
      <div className="flex flex-col justify-center items-center h-full mx--auto px-3 relative">
        <div className=" flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2">
          <div className=" container flex left-0 relative w-3/4">
            <div className="flex items-center justify-center relative w-12 ">
              <span className="focus:outline-none lg:hidden" onClick={toggle}>
                <span className="">
                  <svg
                    className="w-6 h-6"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <div className="h-full hidden items-center relative w-full md:flex lg:w-64">
              <svg
                className="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="bg-gray-100 block leading-normal pl-10 pr-4 py-1.5 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search"
              />
              <div className="absolute border border-gray-300 h-auto hidden mr-2 right-0 text-gray-400 text-xs rounded-full md:flex items-center justify-center">
                <span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end p-1 relative w-9/12 md:w-1/4 ml-5 sm:mr-0 sm:right-auto">
            <a
              href="/"
              className="block pr-1 text-gray-100 hover:text-indigo-500 transition-colors transform duration-200"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
              </span>
              <span className="sr-only">Cloud</span>
            </a>
            <a
              href="/"
              className="block px-3 py-2 relative text-gray-100 hover:scale-105"
            >
              <span className="hover:text-indigo-500 transition-colors transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </span>
              <span className="absolute bg-green-600 font-bold text-xs rounded-full px-2 py-0.5 top-0 right-0">
                2
              </span>
            </a>
            <a href="/" className="block pl-5">
              <img
                alt="Justin Massey"
                src="https://images.unsplash.com/photo-1623526104629-f1b8eb5bd195?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
                className="h-12 w-12 mx-auto object-cover rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
