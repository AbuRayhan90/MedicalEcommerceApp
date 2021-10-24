import React, { useContext } from "react";
import CartContext from "../../../Context/cart/CartContext";

const CartItems = ({ item }) => {
  const { removeToCart } = useContext(CartContext);
  return (
    <div className="text-blue-800">
      <li className="flex border-2 border-gray-100 p-4">
        <img className="w-18 h-14 " src={item.image} alt="s" />
        <div className="pl-4">
          <h1>{item.title}</h1> <span>$ {item.price}</span>
        </div>
        <br />
        <button className="font-bold" onClick={() => removeToCart(item.id)}>
          Remove
        </button>
      </li>
    </div>
  );
};

export default CartItems;
