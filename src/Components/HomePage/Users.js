import React, { useState, useEffect } from "react";
import UserData from "./UserData";
import Categories from "./Categories";
import ReactPaginate from "react-paginate";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const display = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <>
          <tbody className="text-white" key={index}>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/" className="block relative">
                      <img
                        src={user.image}
                        alt="pp"
                        className="mx-auto object-cover rounded-full w-10 h-10"
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <span className="whitespace-nowrap">{user.name}</span>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <span className="whitespace-nowrap">{user.role}</span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <span className="whitespace-nowrap">{user.createdAt}</span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <span
                  className={`px-3 py-2 rounded-full ${
                    user.status === "Active" ? "bg-green-400" : "bg-red-500"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm hover:text-indigo-500 transition-colors transform duration-200">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </>
      );
    });
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => setUsers(UserData), []);

  return (
    <div
      className="mt-8 rounded-2xl"
      style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
    >
      <div className="container mx-auto py-8">
        <div className="py-4">
          <div className="max-w-full overflow-x-auto rounded-lg">
            <table className="w-full leading-normal text-white">
              <thead>
                <tr>
                  {Categories.map((category, index) => {
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        {category.section}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              {display}
            </table>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pt-5 flex items-center justify-center"}
              previousClassName={
                "p-2 border rounded-l-xl text-gray-600 bg-white hover:bg-gray-200 transition-colors transform duration-200"
              }
              nextLinkClassName={
                "p-2 border rounded-r-xl text-gray-600 bg-white hover:bg-gray-200 transition-colors transform duration-200"
              }
              activeClassName={"bg-indigo-500 text-white rounded-lg mx-1"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
