import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DefaultCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="flex items-center">
          <div>
            <h1>1</h1>
          </div>
          <div>
            <h1>111</h1>
          </div>
        </div>
      </div>
      <div>
        <h1>2</h1>
      </div>
      <div>
        <h1>1</h1>3
      </div>
    </Slider>
  );
}

export default DefaultCarousel;
