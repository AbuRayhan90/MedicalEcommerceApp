import React, { useContext } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import CartContext from "../../../Context/cart/CartContext";
import { useHistory } from "react-router";
import CartRight from "../ShopingCart/CartRight";
import ButtonYello from "../../Button/ButtonYello";

const WishCart = () => {
  const { addToCart, wishItem, removeToWishList } = useContext(CartContext);
  const history = useHistory();
  console.log(wishItem.length);

  return (
    <div>
      <Navbar />
      <CartRight />
      <div className="container mx-auto pb-28 pt-8 px-4">
        <h1 className="lg:text-4xl text-2xl font-blod text-blue-800 mb-10">
          Wishlist
          <sup className="text-xl ">
            ({wishItem.length >= 0 && wishItem.length})
          </sup>
        </h1>
        {wishItem.length <= 0 ? (
          <div className="">
            <h1 className="font-semibold lg:text-4xl text-xl text-blue-800 lg:mb-10 mb-6">
              No Item In Your WishList.....
            </h1>
            <ButtonYello
              text="Go To Shop"
              clikHandle={() => history.push("./")}
            />
          </div>
        ) : (
          <div className="lg:flex lg:justify-between lg:gap-8 ">
            <div className="w-full">
              <div className=" w-full">
                <table className="table w-full ">
                  <thead className="table-header-group">
                    <tr className="table-row text-left text-blue-800">
                      <th className=" table-cell text-sm md:text-md">
                        Product
                      </th>
                      <th className=" table-cell text-sm md:text-md">Price</th>
                      <th className=" table-cell text-sm md:text-md">
                        Stock status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="table-header-group">
                    {wishItem.map((item) => (
                      <tr className="table-row border-gray-200 border-2 text-sm md:text-md">
                        <td className="align-bottom table-cell ">
                          <div className="flex">
                            <span
                              onClick={() => removeToWishList(item.id)}
                              className="mt-7 ml-2 cursor-pointer "
                            >
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
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </span>
                            <div className="pt-4">
                              <span>
                                <img
                                  className="w-28"
                                  height="14"
                                  src={item.image}
                                  alt="product"
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
                        <td className="table-cell">
                          <span className="text-green-500 font-bold text-sm md:text-md">
                            In Stock
                          </span>
                        </td>
                        <td className="table-cell text-blue-800 font-bold w-28 md:w-auto">
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
