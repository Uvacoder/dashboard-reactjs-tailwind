import React from "react";
import { Link, useLocation } from "react-router-dom";
import data from "./data";

const style = {
  title: "mx-4 text-sm",
  section:
    "font-medium mb-4 pl-5 text-gray-400 text-opacity-70 text-lg lg:pl-6",
  link: "flex items-center justify-start my-1 p-3 text-gray-200 w-full hover:bg-pink-400 transition-colors rounded-lg",
  active: "bg-pink-700",
};

const SideItems = () => {
  const { pathname } = useLocation();
  return (
    <ul className="mt-6 md:pl-6">
      <li>
        {data.map((title, index) => (
          <div className="mb-10" key={index}>
            <div className={style.section}>
              <h1>{title.section}</h1>
            </div>
            {title.content.map((item, index) => (
              <Link key={index} to={item.link}>
                <span
                  className={`${style.link} ${
                    item.link === pathname && style.active
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className={style.title}>{item.title}</span>
                </span>
              </Link>
            ))}
          </div>
        ))}
      </li>
    </ul>
  );
};

export default SideItems;
