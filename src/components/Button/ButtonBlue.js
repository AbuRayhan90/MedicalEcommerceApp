import React from "react";

const ButtonBlue = ({ text, clikHandle }) => {
  return (
    <button
      onClick={clikHandle}
      className="bg-blue-800 font-semibold text-lg transition hover:bg-yellow-600  text-white px-7 py-2 rounded-3xl "
    >
      {text}
    </button>
  );
};

export default ButtonBlue;
