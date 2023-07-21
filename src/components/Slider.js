import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.sass";
import "./SliderButtons.sass";
import Banner_1 from "../img/banner1_new.jpg";
import Banner_2 from "../img/banner2_new.jpg";

const Slide = ({ image }) => (
  <div>
    <img src={image} alt="Slide" />
  </div>
);

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Создаем состояние currentSlide и функцию setCurrentSlide для обновления состояния

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} prev-button`}
        style={{ ...style }}
        onClick={onClick}
      ></div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} next-button`}
        style={{
          ...style,
        }}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: (i) => (
      <div className={`custom-pages ${i === currentSlide ? "active" : ""}`} />
    ),
  };

  return (
    <div className="slider-container">
      <Slider
        {...settings}
        beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)} // Обновляем состояние currentSlide при изменении слайда
      >
        <Slide image={Banner_1} />
        <Slide image={Banner_2} />
      </Slider>
    </div>
  );
};

export default SliderComponent;
