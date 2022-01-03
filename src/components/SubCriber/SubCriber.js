import React from "react";
import ButtonYello from "../Button/ButtonYello";

const SubCriber = () => {
  return (
    <div className="container mx-auto bg-gray-200 lg:my-14 my-6 lg:py-14 py-8 lg:px-12 px-4 ">
      <div className="flex flex-wrap md:flex-nowrap justify-between">
        <div className="text-blue-800">
          <h1 className="text-2xl font-semibold">0020 500 – MYMEDI – 000</h1>
          <p>Monday – Friday: 9:00-20:00</p>
          <p>Saturday: 11:00 – 15:00</p>
          <div className="flex bg-white px-6 rounded-3xl py-1 mt-4 mb-3 lg:mb-0 cursor-pointer text-blue-800 ">
            <i class="far fa-envelope mt-1 mr-2 "></i>
            <span>aburayhan9092@gmail.com</span>
          </div>
        </div>
        <div className="text-blue-800">
          <h1>Jamalpur,Dhaka ,Bangladesh</h1>
          <p>Up:Melandah, TX 16819</p>
          <p className="font-bold">Tele- 01753013491</p>
          <div className="flex gap-6 lg:mt-8 my-4 lg:my-0 text-gray-400">
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
              className="bg-white px-6 rounded-3xl py-2 mr-6 mb-4 lg:mb-0 focus:outline-none placeholder-gray-500 font-semibold "
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
