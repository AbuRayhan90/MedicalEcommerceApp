import React from "react";

const SliderItem = ({ item }) => {
  return (
    <div className=" ">
      <div className="container mx-auto flex flex-wrap ">
        <div className="lg:pl-8 pl-4 lg:w-2/4 lg:pt-28 py-12 w-full">
          <h1 className="lg:text-6xl text-4xl lg:font-bold leading-tight lg:mb-4 mb-2">
            {item.title}
          </h1>
          <h1 className="lg:text-2xl text-xl lg:font-semibold lg:mb-4 mb-2">
            {item.des}
          </h1>
          {item.discount && (
            <h1 className="lg:text-6xl text-3xl text-yellow-400 font-bold lg:mb-8 mb-4">
              {item.price}
              <sup className="text-gray-500 lg:text-3xl text-xl">
                <del>{item.discount}</del>
              </sup>
            </h1>
          )}
          <div className="">{item.button}</div>
        </div>
        <div className="ml-auto  lg:w-2/4 relative">
          {item.only && (
            <div className="lg:text-4xl absolute lg:right-44 right-28 bottom-40 lg:bottom-80 pt-4 lg:pt-0 lg:leading-10 bg-yellow-400  font-bold text-blue-800 rounded-full  text-center lg:h-32 lg:w-32 h-24 w-24">
              <span className="lg:text-2xl text-lg">{item.only}</span>
              <h1 className="lg:text-6xl text-2xl">{item.price} </h1>
            </div>
          )}
          {item.discountPersentage && (
            <h1 className="lg:text-6xl text-3xl absolute lg:right-10 right-6 bottom-20 bg-yellow-400  font-bold text-blue-800 rounded-full lg:leading-extra-line-height pt-8 lg:pt-0 text-center lg:h-40 lg:w-40 h-24 w-24">
              {item.discountPersentage}
            </h1>
          )}
          <img className="lg:h-screen h-70" src={item.image} alt="p" />
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
