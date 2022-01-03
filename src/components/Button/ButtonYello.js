import React from "react";

const ButtonYello = ({ text, clikHandle }) => {
  return (
    <button
      onClick={clikHandle}
      className="bg-yellow-500 lg:font-semibold text-sm font-normal  text-white lg:px-7 px-4 lg:py-2 py-1 rounded-3xl hover:bg-blue-800 transition duration-500"
    >
      {text}
    </button>
  );
};

export default ButtonYello;
