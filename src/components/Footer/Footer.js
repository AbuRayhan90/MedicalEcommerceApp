import React from "react";
import FooterImg from "../../assets/img/payment.png";

const Footer = () => {
  return (
    <div className="container mx-auto  border-t-2 pt-6 border-gray-200">
      <div className="flex justify-between pb-4">
        <div className="text-blue-500 font-semibold">
          <h1>Copyright © 2021 Abu Rayhan Raju. All Rights Reserved</h1>
        </div>
        <div className="">
          <img src={FooterImg} alt="footer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
