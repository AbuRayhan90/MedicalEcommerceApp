import React from "react";
import { allProducts } from "./ProductsData";
import ProductItem from "./ProductItem";
import BigItem from "./BigItem";

const Products = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="lg:flex  lg:gap-10 ">
        <div className="lg:w-2/6 w-full">
          <BigItem />
        </div>

        <div className="lg:flex lg:flex-col ">
          <div className="">
            <h1 className="font-semibold text-3xl text-center text-blue-800 mb-8 mt-8 ">
              Latest products
            </h1>
          </div>
          <div className="flex flex-wrap space-y-3 lg:space-y-3 space-x-2 ">
            {allProducts.map((Product) => (
              <ProductItem key={Product.id} Product={Product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
