import React from "react";
import ultsData from "../../ultsData";

const Offer = () => {
  return (
    <div className="bg-offer-bg mt-14 py-28">
      {ultsData.offers.map((item) => (
        <div key={item.id}>
          <div className="container mx-auto flex text-blue-800 ">
            <div className="pl-8 w-2/4 pt-28">
              <h1 className="text-6xl font-bold leading-tight mb-4">
                {item.title}
              </h1>
              <h1 className="text-xl mb-4">{item.des}</h1>
              <div className="flex mb-4">
                <img className="mr-4" src={item.icon} alt="tooth" />
                <span className="mr-4">{item.iconText}</span>
                <img className="mr-4" src={item.icon2} alt="tooth" />
                <span>{item.iconText2}</span>
              </div>
              <div className="">{item.button}</div>
            </div>
            <div className="ml-auto w-2/4 relative">
              <h1 className="text-6xl absolute right-10 bottom-20 bg-yellow-400  font-bold text-blue-800 rounded-full leading-extra-line-height text-center h-40 w-40 ">
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
