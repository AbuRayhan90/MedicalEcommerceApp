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
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto  ">
      <div className="text-center py-10">
        <h1 className="text-blue-800 text-3xl md:text-5xl font-semibold">
          Featured Products
        </h1>
      </div>
      <div className="px-8 md:px-2">
        <Slider {...settings}>
          {allProducts.map((Product) => (
            <ProductItem Product={Product} key={Product.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProducts;
