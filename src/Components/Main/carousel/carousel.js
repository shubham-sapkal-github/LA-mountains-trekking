import "../carousel/carousel.css";

import React from "react";
import Slider from "react-slick";
import CarouselImg1 from "../../../Assets/thumb_1.jpg";
import CarouselImg2 from "../../../Assets/thumb_2.jpg";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    // autoplay: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    <div style={{ width: "70%", marginInline: "auto" }}>
      <Slider {...settings}>
        <div className="xxxx">
          <img className="carousel-image" src={CarouselImg1} alt="" />
        </div>
        <div>
          <img className="carousel-image" src={CarouselImg2} alt="" />
        </div>
        <div>
          <img className="carousel-image" src={CarouselImg1} alt="" />
        </div>
        <div>
          <img className="carousel-image" src={CarouselImg2} alt="" />
        </div>
        <div>
          <img className="carousel-image" src={CarouselImg1} alt="" />
        </div>
        <div>
          <img className="carousel-image" src={CarouselImg2} alt="" />
        </div>
        <div>
          <img className="carousel-image" src={CarouselImg1} alt="" />
        </div>
        <div>
          <img className="carousel-image" src={CarouselImg2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
