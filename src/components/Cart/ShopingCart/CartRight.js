import React, { useContext } from "react";
import CartContext from "../../../Context/cart/CartContext";
import CartItems from "./CartItems";
import { useHistory } from "react-router";
import ButtonBlue from "../../Button/ButtonBlue";
import ButtonYello from "../../Button/ButtonYello";

const CartRight = () => {
  const { showCart, showHideCart, cartItems, clearCart, totalPrice } =
    useContext(CartContext);
  const history = useHistory();
  return (
    <>
      {showCart && (
        <div className="lg:w-1/4 w-full fixed md:flex right-0  z-10 bg-white px-6 h-full">
          <div className="">
            <i
              className="fa fa-time-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="">
            {cartItems.length === 0 ? (
              <h1 className="text-blue-800 font-semibold text-3xl mb-8">
                Cart is Emty.....
              </h1>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItems key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <h1 className="text-blue-800 font-semibold ">
                Total: $
                <span className="text-blue-800 font-bold ">{totalPrice}</span>
              </h1>
              <div className="">
                <span
                  onClick={() => clearCart(cartItems)}
                  className="text-blue-800 cursor-pointer text-sm"
                >
                  Clear all items
                </span>
              </div>
            </div>
            <div className="flex justify-between pb-8 pt-2">
              <ButtonBlue
                clikHandle={() => history.push("/shop")}
                text="View Cart"
              />
              <ButtonYello
                text="Checkout"
                clikHandle={() => history.push("/checkout")}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartRight;
