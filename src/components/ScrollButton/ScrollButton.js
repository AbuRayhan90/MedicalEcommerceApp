import React from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollButton = () => {
  return (
    <button
      onClick={() => scroll.scrollToTop()}
      className="lg:bg-gray-400 bg-black  h-10 w-10 fixed lg:bottom-10 bottom-14 lg:right-10 right-4 rounded-full opacity-50"
    >
      <i class="fas fa-long-arrow-alt-up text-white lg:text-xl text-md"></i>
    </button>
  );
};

export default ScrollButton;
