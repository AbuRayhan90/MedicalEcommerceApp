import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import Slider from "../Slider/Slider";
import Products from "../Cart/Products";
import LatestPost from "../LatestPost/LatestPost";
import CartRight from "../Cart/ShopingCart/CartRight";
import Offer from "../Offer/Offer";
import SubCriber from "../SubCriber/SubCriber";
import Footer from "../Footer/Footer";
import Courier from "../Courier/Courier";
import ScrollButton from "../ScrollButton/ScrollButton";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <>
      <Navbar />
      <CartRight />
      <Slider />
      <Products />
      <LatestPost />
      <Courier />
      <FeaturedProducts />
      <Offer />
      <SubCriber />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default Home;
