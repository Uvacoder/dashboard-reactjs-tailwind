import React from "react";

const Installed = () => {
  return (
    <div>
      <h1 className="mt-6 mb-3 text-white font-medium text-lg">Installed</h1>
      <div
        className="p-4 rounded-2xl"
        style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
      >
        <div className="flex justify-between pb-2 mb-6 border-b border-gray-600 text-white">
          <div className="flex items-center justify-start space-x-3 w-1/4">
            <img
              src="https://img.icons8.com/fluency/48/000000/macbook-idea.png"
              className="w-10 h-10 object-cover"
              alt="logo"
            />
            <h1>Ideas</h1>
          </div>
          <div className="flex items-center justify-center px-2 w-2/4">
            <div className="flex items-center space-x-2 md:w-2/6 justify-start">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              <span>Updated</span>
            </div>
          </div>
          <div className="w-1/4 flex">
            <div className="flex items-center justify-end w-full">
              <button className="border-gray-300 rounded-full px-5 py-1 border-2 text-white text-opacity-70 focus:outline-none hover:border-purple-500 hover:font-semibold transition-colors transform duration-100">
                Open
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-2 mb-6 border-b border-gray-600 text-white">
          <div className="flex items-center justify-start space-x-3 w-1/4">
            <img
              src="https://img.icons8.com/fluency/48/000000/macbook-money.png"
              className="w-10 h-10 object-cover"
              alt="logo"
            />
            <h1>Money</h1>
          </div>
          <div className="flex items-center justify-center px-2 w-2/4">
            <div className="flex items-center space-x-2 md:w-2/6 justify-start">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              <span>Updated</span>
            </div>
          </div>
          <div className="w-1/4 flex">
            <div className="flex items-center justify-end w-full">
              <button className="border-gray-300 rounded-full px-5 py-1 border-2 text-white text-opacity-70 focus:outline-none hover:border-purple-500 hover:font-semibold transition-colors transform duration-100">
                Open
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-2 mb-6 border-b border-gray-600 text-white">
          <div className="flex items-center justify-start space-x-3 w-1/4">
            <img
              src="https://img.icons8.com/fluency/48/000000/macbook-pictures.png"
              className="w-10 h-10 object-cover"
              alt="logo"
            />
            <h1>Pictures</h1>
          </div>
          <div className="flex items-center justify-center px-2 w-2/4">
            <div className="flex items-center space-x-2 md:w-2/6 justify-start">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span>Waiting for approval</span>
            </div>
          </div>
          <div className="w-1/4 flex">
            <div className="flex items-center justify-end w-full">
              <button className="border-gray-300 rounded-full px-5 py-1 border-2 text-white text-opacity-70 focus:outline-none hover:border-purple-500 hover:font-semibold transition-colors transform duration-100">
                Open
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-2 mb-6 border-b border-gray-600 text-white">
          <div className="flex items-center justify-start space-x-3 w-1/4">
            <img
              src="https://img.icons8.com/fluency/48/000000/macbook-medal.png"
              className="w-10 h-10 object-cover"
              alt="logo"
            />
            <h1>Awards</h1>
          </div>
          <div className="flex items-center justify-center px-2 w-2/4">
            <div className="flex items-center space-x-2 md:w-2/6 justify-start">
              <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
              <span>Check new list</span>
            </div>
          </div>
          <div className="w-1/4 flex">
            <div className="flex items-center justify-end w-full">
              <button className="border-gray-300 rounded-full px-5 py-1 border-2 text-white text-opacity-70 focus:outline-none hover:border-purple-500 hover:font-semibold transition-colors transform duration-100">
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installed;
