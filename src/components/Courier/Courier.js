import React from "react";

const Courier = () => {
  return (
    <div className="container mx-auto bg-courier-bg py-8 bg-center px-6 mt-12">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-green-500 text-xl">
            <i class="far fa-check-circle"></i>
            <span className="text-2xl font-bold">
              100% Secure delivery
            </span>{" "}
            without contacting the courier
          </h1>
        </div>
        <div className="">
          <button className="cursor-pointer rounded-3xl text-white font-bold bg-green-500 px-6 py-2 hover:text-green-500 hover:border-green-200 border-2 hover:bg-white transition duration-500">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courier;
