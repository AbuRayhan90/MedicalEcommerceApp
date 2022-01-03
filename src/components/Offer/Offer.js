import React from "react";
import ultsData from "../../ultsData";

const Offer = () => {
  return (
    <div className="bg-offer-bg lg:mt-14 mt-4 lg:py-28 py-10 ">
      {ultsData.offers.map((item) => (
        <div key={item.id}>
          <div className="container mx-auto flex text-blue-800 ">
            <div className="pl-8 lg:w-2/4 lg:pt-28 pt-10">
              <h1 className="lg:text-6xl text-3xl font-bold lg:leading-tight mb-4">
                {item.title}
              </h1>
              <h1 className="text-xl mb-4">{item.des}</h1>
              <div className="lg:flex mb-4">
                <img className="mr-4" src={item.icon} alt="tooth" />
                <span className="mr-4">{item.iconText}</span>
                <img className="mr-4" src={item.icon2} alt="tooth" />
                <span>{item.iconText2}</span>
              </div>
              <div className="">{item.button}</div>
            </div>
            <div className="ml-auto w-2/4 relative">
              <h1 className="lg:text-6xl text-3xl absolute lg:right-10 right-4 lg:bottom-20 bottom-6 bg-yellow-400  font-bold text-blue-800 rounded-full lg:leading-extra-line-height  text-center lg:h-40 lg:w-40 h-24 w-24 ">
                {item.discountPersentage}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
