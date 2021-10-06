import React from "react";
import img from "../../Assets/saly.webp";

const style = {
  header:
    "flex flex-wrap md:flex-nowrap items-center justify-betweenw-full rounded-2xl py-6 px-12 text-white",
};

const Header = () => {
  return (
    <div
      className={`${style.header}`}
      style={{ backgroundColor: "rgb(146 151 179 / 20%)" }}
    >
      <div className="w-full">
        <div className="flex items-center font-medium text-lg space-x-3">
          <span>
            <img
              src="https://img.icons8.com/fluency/48/000000/paint-3d.png"
              alt=""
              className="w-12 h-12 object-cover"
            />
          </span>
          <span>Dashboard</span>
        </div>
        <div className="my-4 overflow-hidden">
          “You only have to do a few things right in your life so long as you
          don’t do too many things wrong.” –
          <span className="font-medium"> Warren Buffett</span>
        </div>
        <div className="flex items-center justify-start">
          <button className="py-2 px-4 bg-indigo-700 rounded-2xl hover:bg-indigo-800 hover:scale-105 transform transition-colors duration-200">
            Check it out
          </button>
        </div>
      </div>
      <img
        src={img}
        alt=""
        className="w-24 md:w-52 object-cover object-center"
      />
    </div>
  );
};

export default Header;
