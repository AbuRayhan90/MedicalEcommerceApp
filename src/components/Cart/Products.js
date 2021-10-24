import React from "react";
import { allProducts } from "./ProductsData";
import ProductItem from "./ProductItem";
import BigItem from "./BigItem";

const Products = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex  gap-10">
        <div className="w-2/6">
          <BigItem />
        </div>

        <div className="flex flex-col ">
          <div className="">
            <h1 className="font-semibold text-3xl text-center text-blue-800 mb-8 mt-8 ">
              Latest products
            </h1>
          </div>
          <div className="flex flex-wrap">
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
