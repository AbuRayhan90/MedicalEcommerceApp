import React from "react";

const SliderItem = ({ item }) => {
  return (
    <div className="   ">
      <div className="container mx-auto flex ">
        <div className="pl-8 w-2/4 pt-28">
          <h1 className="text-6xl font-bold leading-tight mb-4">
            {item.title}
          </h1>
          <h1 className="text-2xl font-semibold mb-4">{item.des}</h1>
          {item.discount && (
            <h1 className="text-6xl text-yellow-400 font-bold mb-8">
              {item.price}
              <sup className="text-gray-500 text-3xl">
                <del>{item.discount}</del>
              </sup>
            </h1>
          )}
          <div className="">{item.button}</div>
        </div>
        <div className="ml-auto w-2/4 relative">
          {item.only && (
            <div className=" text-4xl absolute right-44 bottom-80 leading-10 bg-yellow-400  font-bold text-blue-800 rounded-full  text-center h-32 w-32 ">
              <span className="text-2xl">{item.only}</span>
              <h1 className="text-6xl">{item.price} </h1>
            </div>
          )}
          {item.discountPersentage && (
            <h1 className="text-6xl absolute right-10 bottom-20 bg-yellow-400  font-bold text-blue-800 rounded-full leading-extra-line-height text-center h-40 w-40 ">
              {item.discountPersentage}
            </h1>
          )}
          <img className="h-screen" src={item.image} alt="p" />
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
