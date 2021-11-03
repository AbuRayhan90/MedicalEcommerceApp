import React from "react";

const OrderText = ({ item, totalPrice }) => {
  return (
    <div className="flex justify-between border-b-2 py-2 border-gray-200">
      <h1 className="font-bold">{item.title}</h1>
      <h1 className="font-semibold">${totalPrice}</h1>
    </div>
  );
};

export default OrderText;
