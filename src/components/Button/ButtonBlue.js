import React from "react";

const ButtonBlue = ({ text, clikHandle }) => {
  return (
    <button
      onClick={clikHandle}
      className="bg-blue-800 font-semibold lg:text-lg text-md transition hover:bg-yellow-600  text-white lg:px-7 py-2 px-4 rounded-3xl "
    >
      {text}
    </button>
  );
};

export default ButtonBlue;
