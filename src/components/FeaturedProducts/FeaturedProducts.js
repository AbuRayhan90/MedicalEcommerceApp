import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "../Cart/ProductItem";
import { allProducts } from "../Cart/ProductsData";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#cbc4c4",
        position: "absolute",
        width: "56px",
        height: "56px",
        lineHeight: "76px",
        paddingLeft: "19px",
        borderRadius: "50%",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#cbc4c4",
        position: "absolute",
        width: "56px",
        height: "56px",
        lineHeight: "76px",
        paddingLeft: "19px",
        borderRadius: "50%",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

const FeaturedProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mx-auto">
      <div className="text-center py-10">
        <h1 className="text-blue-800 text-5xl font-semibold">
          Featured Products
        </h1>
      </div>
      <Slider {...settings}>
        {allProducts.map((Product) => (
          <ProductItem Product={Product} key={Product.id} />
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
