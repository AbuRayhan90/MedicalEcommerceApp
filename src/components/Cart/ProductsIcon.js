import React, { useContext } from "react";
import CartContext from "../../Context/cart/CartContext";
const Icon = ({ Product }) => {
  const { addToCart, addToWishList } = useContext(CartContext);

  return (
    <div>
      <div>
        <div className="">
          <span onClick={() => addToWishList(Product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 hover:bg-yellow-500 p-1  rounded-full bg-blue-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 hover:bg-yellow-500 p-1  my-2 rounded-full bg-blue-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 hover:bg-yellow-500 p-1  my-2 rounded-full bg-blue-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <span onClick={() => addToCart(Product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 hover:bg-yellow-500 p-1 rounded-full bg-blue-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Icon;
