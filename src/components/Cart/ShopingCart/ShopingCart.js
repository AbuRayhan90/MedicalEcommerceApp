import React, { useContext } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import CartContext from "../../../Context/cart/CartContext";
import { useHistory } from "react-router";
import CartRight from "./CartRight";
import ButtonYello from "../../Button/ButtonYello";
import ButtonBlue from "../../Button/ButtonBlue";

const ShopingCart = () => {
  const {
    cartItems,
    totalPrice,
    removeToCart,
    incrementHandler,
    decrementHandler,
  } = useContext(CartContext);

  const history = useHistory();
  return (
    <div>
      <Navbar />
      <CartRight />
      <div className="container mx-auto pb-28">
        <h1 className="text-6xl font-blod text-blue-800 mb-10">
          Shopping cart{" "}
          <span className="text-xl ">
            ({cartItems.length >= 0 && cartItems.length})
          </span>
        </h1>
        <div className="flex justify-between gap-8 ">
          <div className="w-full">
            <div className=" w-full">
              <table className="table w-full ">
                <thead className="table-header-group">
                  <tr className="table-row text-left text-blue-800">
                    <th className=" table-cell ">Product</th>
                    <th className=" table-cell">Price</th>
                    <th className=" table-cell">Quantity</th>
                    <th className=" table-cell">Total</th>
                  </tr>
                </thead>

                <tbody className="table-header-group  ">
                  {cartItems.map((item) => (
                    <tr className="table-row border-gray-200 border-2 ">
                      <td className="align-bottom table-cell ">
                        <div className="flex">
                          <span
                            onClick={() => removeToCart(item.id)}
                            href=""
                            className="mt-7 ml-2 cursor-pointer "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                          <div className="">
                            <span className="cursor-pointer">
                              <img
                                className="w-20"
                                height="14"
                                src={item.image}
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="">
                            <div className="">
                              <span
                                className="cursor-pointer"
                                href="www.google.com"
                              >
                                {item.title}
                              </span>
                            </div>
                            <span className="text-yellow-500 font-semibold">
                              $ {item.price}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="table-cell text-blue-800 font-bold">
                        <span>$ {item.price}</span>
                      </td>
                      <td className=" table-cell">
                        <span className="bg-gray-200 flex   py-2 text-gray-500  px-2  rounded-3xl justify-between">
                          <p
                            onClick={() => decrementHandler(item.id)}
                            className="text-3xl px-2 leading-6 cursor-pointer"
                          >
                            -
                          </p>
                          <p className="text-xl">{item.quantity}</p>
                          <p
                            onClick={() => incrementHandler(item.id)}
                            className="text-3xl px-2 leading-6 cursor-pointer"
                          >
                            +
                          </p>
                        </span>
                      </td>
                      <td className="table-cell text-blue-800 font-bold">
                        <span>$ {totalPrice}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap mt-14">
              <ButtonYello
                clikHandle={() => history.push("./")}
                text="Back to shop"
              />
              <div className="ml-auto">
                <input
                  className="focus:outline-none bg-gray-200  px-14 py-2 rounded-3xl "
                  placeholder="Enter your coupon"
                />
                <ButtonBlue text="Apply" />
              </div>
            </div>
          </div>

          <div className="w-2/4">
            <div className="">
              <h1 className="text-blue-800 font-semibold">Cart Toatal</h1>
            </div>
            <div className="border-2 border-gray-200 p-6">
              <div className="text-blue-800 font-semibold ">
                <div className="flex border-b-2 border-gray-200 pb-3">
                  <p>{totalPrice}</p>
                  <span className="ml-auto font-bold">$ 333</span>
                </div>
                <div className="flex border-b-2 border-gray-200">
                  <p className="font-semibold text-sm py-3">
                    Shipping Enter your address to view shipping options.
                  </p>
                </div>
                <div className="flex border-b-2 border-gray-200 py-3">
                  <p>{totalPrice}</p>
                  <span className="ml-auto font-bold">$ 333</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <ButtonYello text="Prpceed to checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
