import React from "react";
import ProductsIcon from "./ProductsIcon";
import ProductsRateing from "./ProductsRateing";
import "./style.css";

const ProductItem = ({ Product }) => {
  return (
    <div className="text-blue-800 w-36 border-solid border-r border-l border-t border-b border-gray-100  ">
      <div className="relative">
        <img className="w-36 h-40" src={Product.image} alt="products" />
        <div className="w-full h-full sectionRight transition translate-x-2 transform hover:-translate-x-2  cursor-pointer absolute right-2 top-2 opacity-0  hover:opacity-100 ">
          <ProductsIcon Product={Product} />
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-semibold">{Product.title}</h1>
        <h1 className="font-bold text-lg">$ {Product.price}</h1>
        <div className="">
          <ProductsRateing value={Product.Rating} />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
