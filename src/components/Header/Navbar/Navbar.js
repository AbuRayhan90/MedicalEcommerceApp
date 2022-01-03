import React, { useContext, useState } from "react";
import Logo from "../../../assets/img/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import ultsData from "../../../ultsData.js";
import CartContext from "../../../Context/cart/CartContext";
import { useHistory } from "react-router";

const Navbar = () => {
  const { cartItems, showHideCart, wishItem } = useContext(CartContext);
  const [searchBar, setSearchBar] = useState(false);

  const history = useHistory();

  return (
    <div className="sticky top-0 shadow-lg h-16 md:h-20 text-blue-800  bg-white z-20 w-full">
      <div className="container mx-auto flex flex-wrap">
        <div
          className="md:w-60 md:h-5 md:mt-2 md:ml-4 cursor-pointer w-36 py-2 px-4 md:py-0 md:px-0"
          onClick={() => history.push("./")}
        >
          <img src={Logo} alt="" />
        </div>
        <nav className="md:flex md:flex-wrap md:gap-2 ml-auto md:mt-6 ">
          <div className="md:mr-8 pt-4 md:pt-0">
            <SearchBar setSearchBar={setSearchBar} searchBar={searchBar} />
          </div>
          <div className="md:flex  md:w-56 md:gap-2 md:mr-8 hidden ">
            <select
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
          <div className="flex space-x-6 z-50  bg-black w-full text-white fixed bottom-0 left-0 justify-center py-3 md:relative md:bg-transparent md:py-0 md:w-auto ">
            <div className="cursor-pointer md:hidden">
              <i className="fas fa-bars"></i>
            </div>
            <div
              className="cursor-pointer md:hidden"
              onClick={() => history.push("./")}
            >
              <i className="fas fa-home"></i>
            </div>
            <div className="cursor-pointer">
              <i className="far fa-user md:text-blue-700 md:text-2xl"></i>
            </div>
            <div
              className="relative"
              onClick={() => history.push("./whislist")}
            >
              <i className="far fa-heart md:text-blue-700 md:text-2xl"></i>
              <span className="cursor-pointer  absolute -top-2 -right-4 bg-blue-800 text-white rounded-full w-6 h-6 text-center">
                {wishItem.length >= 0 && wishItem.length}
              </span>
            </div>
            <div className="relative" onClick={() => showHideCart()}>
              <i className="fas fa-cart-plus md:text-blue-700 md:text-2xl"></i>
              <span className="cursor-pointer  absolute -top-2 -right-4 bg-blue-800 text-white rounded-full w-6 h-6 text-center">
                {cartItems.length >= 0 && cartItems.length}
              </span>
            </div>
          </div>
        </nav>

        {searchBar ? <SearchField /> : ""}
      </div>
    </div>
  );
};

const SearchField = () => {
  return (
    <div className="absolute right-10 top-12 z-20 md:hidden">
      <input
        className="focus:outline-none rounded-full px-3 bg-gray-300 placeholder-blue-800 font-light "
        placeholder="Search fro products "
      />
    </div>
  );
};

export default Navbar;
