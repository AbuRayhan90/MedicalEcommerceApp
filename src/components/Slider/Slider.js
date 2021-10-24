import React from "react";
import Carousel from "react-material-ui-carousel";
import ultsData from "../../ultsData";

import SliderItem from "./SliderItem";
import "./style.css";
const Slider = () => {
  return (
    <>
      <Carousel>
        {ultsData.sliders.map((item) => (
          <div
            className={
              item.id === 1
                ? "bg-white text-blue-800 mb-12"
                : "bg-blue-800 text-white mb-12"
            }
          >
            <SliderItem key={item.id} item={item} />
          </div>
        ))}
      </Carousel>
    </>
  );
};
export default Slider;
