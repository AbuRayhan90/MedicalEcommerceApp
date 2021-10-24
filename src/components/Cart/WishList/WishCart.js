import React, { useContext } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import CartContext from "../../../Context/cart/CartContext";
import { useHistory } from "react-router";
import CartRight from "../ShopingCart/CartRight";
import ButtonYello from "../../Button/ButtonYello";

const WishCart = () => {
  const { addToCart, wishItem, removeToWishList } = useContext(CartContext);
  const history = useHistory();

  return (
    <div>
      <Navbar />
      <CartRight />
      <div className="container mx-auto pb-28 pt-8">
        <h1 className="text-4xl font-blod text-blue-800 mb-10">
          Wishlist{" "}
          <sup className="text-xl ">
            ({wishItem.length >= 0 && wishItem.length})
          </sup>
        </h1>
        {wishItem.length <= 0 ? (
          <div className="">
            <h1 className="font-semibold text-4xl text-blue-800 mb-10">
              No Item In Your WishList.....
            </h1>
            <ButtonYello
              text="Go To Shop"
              clikHandle={() => history.push("./")}
            />
          </div>
        ) : (
          <div className="flex justify-between gap-8 ">
            <div className="w-full">
              <div className=" w-full">
                <table className="table w-full ">
                  <thead className="table-header-group">
                    <tr className="table-row text-left text-blue-800">
                      <th className=" table-cell ">Product</th>
                      <th className=" table-cell">Price</th>
                      <th className=" table-cell">Stock status</th>
                    </tr>
                  </thead>

                  <tbody className="table-header-group   ">
                    {wishItem.map((item) => (
                      <tr className="table-row border-gray-200 border-2">
                        <td className="align-bottom table-cell ">
                          <div className="flex">
                            <span
                              onClick={() => removeToWishList(item.id)}
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
                              <span>
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
                                <span href="www.google.com">{item.title}</span>
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
                          <span className="text-green-500 font-bold">
                            In Stock
                          </span>
                        </td>
                        <td className="table-cell text-blue-800 font-bold">
                          <ButtonYello
                            clikHandle={() => addToCart(item)}
                            text="Add To Cart"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishCart;
