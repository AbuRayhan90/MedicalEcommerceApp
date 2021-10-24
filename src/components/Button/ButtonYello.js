import React from "react";

const ButtonYello = ({ text, clikHandle }) => {
  return (
    <button
      onClick={clikHandle}
      className="bg-yellow-500 font-semibold  text-white px-7 py-2 rounded-3xl hover:bg-blue-800 transition duration-500"
    >
      {text}
    </button>
  );
};

export default ButtonYello;
