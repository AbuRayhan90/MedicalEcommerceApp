import React, { useContext } from "react";
import Logo from "../../../assets/img/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import ultsData from "../../../ultsData.js";
import CartContext from "../../../Context/cart/CartContext";
import { useHistory } from "react-router";

const Navbar = () => {
  const { cartItems, showHideCart, wishItem } = useContext(CartContext);
  const history = useHistory();

  return (
    <div className="sticky top-0 h-20 shadow-lg text-blue-800  bg-white z-10 ">
      <div className="container mx-auto flex flex-wrap">
        <div
          className="w-60 h-5 mt-2 ml-4 cursor-pointer"
          onClick={() => history.push("./")}
        >
          <img src={Logo} alt="" />
        </div>
        <div className="flex flex-wrap gap-2 ml-auto mt-6">
          <div className="mr-16">
            <SearchBar />
          </div>
          <div className="flex w-56 gap-2 mr-8  ">
            <select
              className=""
              id="country"
              name="country"
              autoComplete="country"
              className="mt-1 block w-full py-2 px-3 cursor-pointer focus:outline-none  focus:border-none sm:text-sm"
            >
              {ultsData.menuLanguage.map((option) => (
                <option key={option.id}>{option.text}</option>
              ))}
            </select>
            <select
              id="country"
              name="country"
              autoComplete="country"
              className="mt-1 block w-full py-2 px-3 cursor-pointer  focus:outline-none  focus:border-none sm:text-sm"
            >
              {ultsData.menuCountry.map((option) => (
                <option className="rounded-none" key={option.id}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <span className="bg-gray-300 h-10 w-0.5 mr-10"></span>
          <div className="mr-6 relative ">
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
          </div>
          <div
            className="mr-6 relative"
            onClick={() => history.push("./whislist")}
          >
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
            <span className="cursor-pointer  absolute -top-2 -right-4 bg-blue-800 text-white rounded-full w-6 h-6 text-center">
              {wishItem.length >= 0 && wishItem.length}
            </span>
          </div>
          <div className="mr-6 relative" onClick={() => showHideCart()}>
            <span className="cursor-pointer relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span className="cursor-pointer  absolute -top-2 -right-4 bg-blue-800 text-white rounded-full w-6 h-6 text-center">
              {cartItems.length >= 0 && cartItems.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
