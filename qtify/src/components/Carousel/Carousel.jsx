import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { green } from "@mui/material/colors";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 7,
    slidesToScroll: 7,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="carousel-card">
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
