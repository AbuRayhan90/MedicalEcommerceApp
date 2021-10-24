import React from "react";
import ButtonYello from "../Button/ButtonYello";

const SubCriber = () => {
  return (
    <div className="container mx-auto bg-gray-200 my-14 py-14 px-12">
      <div className="flex justify-between">
        <div className="text-blue-800">
          <h1 className="text-2xl font-semibold">0020 500 – MYMEDI – 000</h1>
          <p>Monday – Friday: 9:00-20:00</p>
          <p>Saturday: 11:00 – 15:00</p>
          <div className="flex bg-white px-6 rounded-3xl py-1 mt-4 cursor-pointer text-blue-800 ">
            <i class="far fa-envelope mt-1 mr-2 "></i>
            <span>aburayhan9092@gmail.com</span>
          </div>
        </div>
        <div className="text-blue-800">
          <h1>1487 Rocky Horse Carrefour</h1>
          <p>Arlington, TX 16819</p>
          <p>Show on map</p>
          <div className="flex gap-6 mt-8 text-gray-400">
            <i class="fab fa-facebook-f hover:text-blue-500 cursor-pointer"></i>
            <i class="fab fa-instagram hover:text-yellow-800 cursor-pointer"></i>
            <i class="fab fa-youtube hover:text-red-500 cursor-pointer"></i>
            <i class="fab fa-pinterest-p hover:text-red-800 cursor-pointer"></i>
            <i class="fab fa-linkedin-in hover:text-blue-800 cursor-pointer"></i>
          </div>
        </div>
        <div className="text-blue-800">
          <h1 className="text-2xl font-semibold">Join our newsletter</h1>
          <p>And get $20 discount for your first order</p>

          <div className="mt-8">
            <input
              className="bg-white px-6 rounded-3xl py-2 mr-6 focus:outline-none placeholder-gray-500 font-semibold "
              type="text"
              placeholder="Enter your email address"
            />
            <ButtonYello text="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCriber;
