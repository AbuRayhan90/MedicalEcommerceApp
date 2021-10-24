import React from "react";
import CounDown from "../Coundown/CounDown";
import { allProducts } from "./ProductsData";
import Icon from "./ProductsIcon";

const BigItem = () => {
  const bigProduct = allProducts.find((item) => item);

  return (
    <div>
      <h1 className="font-semibold text-3xl text-blue-800 mb-8 mt-8 ">
        This week deal
      </h1>
      <div className="text-blue-800 border-solid border-4  border-yellow-500 h-5/6 w-full ">
        <div className="">
          <CounDown />
          <div className="relative ">
            <img
              className="h-52 w-full cursor-pointer  "
              src={bigProduct.image}
              alt="p"
            />
            <div className="w-full h-full sectionRight transition translate-x-2 transform hover:-translate-x-2  cursor-pointer absolute right-4 top-4 opacity-0  hover:opacity-100 ">
              <Icon Product={bigProduct} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h1 className="font-semibold">{bigProduct.title}</h1>
          <h1 className="font-bold text-lg">$ {bigProduct.price}</h1>
          <div className="flex flex-wrap text-yellow-500">
            {allProducts.map((item) => (
              <p>{item.icon}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            <span className="bg-gray-200 h-0.5 w-4/6 mb-6 mt-4"></span>
            <h1 className="text-md font-semibold">{bigProduct.productText}</h1>
            <h1 className="text-2xl font-bold">
              {bigProduct.availableProduct}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigItem;
