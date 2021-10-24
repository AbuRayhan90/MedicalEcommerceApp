import React from "react";

const OrderText = ({ text, priceText }) => {
  return (
    <div className="flex justify-between border-b-2 py-2 border-gray-200">
      <h1>{text}</h1>
      <h1>{priceText}</h1>
    </div>
  );
};

export default OrderText;
