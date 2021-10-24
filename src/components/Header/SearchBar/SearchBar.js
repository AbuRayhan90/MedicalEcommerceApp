import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-wrap bg-gray-300  p-2 px-4 rounded-3xl overflow-hidden ">
      <div className="">
        <input
          className="focus:outline-none bg-gray-300 placeholder-blue-800 font-bold "
          placeholder="Search fro products "
        />
      </div>
      <button className="text-blue-800 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 font-bold"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;