import React from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollButton = () => {
  return (
    <button
      onClick={() => scroll.scrollToTop()}
      className="bg-gray-400 py-4 px-6 fixed bottom-10 right-10 rounded-full opacity-50"
    >
      <i class="fas fa-long-arrow-alt-up text-white text-2xl"></i>
    </button>
  );
};

export default ScrollButton;
