import React from "react";

const CheckOutText = ({ text, priceText, bold }) => {
  return (
    <div className="flex justify-between border-b-2 py-2 border-gray-200">
      <h1 className="font-bold">{text}</h1>
      <h1 className={bold}>$ {priceText}</h1>
    </div>
  );
};

export default CheckOutText;
