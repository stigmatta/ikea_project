// Carousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestCarouselStyle.css";
import c1 from '../carouselImgs/c1.jpg';
import c2 from '../carouselImgs/c2.jpg';
import c3 from '../carouselImgs/c3.jpg';
import c4 from '../carouselImgs/c4.jpg';
import c5 from '../carouselImgs/c5.jpg';
import c6 from '../carouselImgs/c6.jpg';
import c7 from '../carouselImgs/c7.jpg';
import arrowNext from '../assets/arrowNext.svg'; 

const images = [
  { src: c1, alt: 'Image 1', objectFit: 'contain' },
  { src: c2, alt: 'Image 2', objectFit: 'contain' },
  { src: c3, alt: 'Image 3', objectFit: 'contain' },
  { src: c4, alt: 'Image 4', objectFit: 'contain' },
  { src: c5, alt: 'Image 5', objectFit: 'contain' },
  { src: c6, alt: 'Image 6', objectFit: 'contain' },
  { src: c7, alt: 'Image 7', objectFit: 'contain' },
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: `url(${arrowNext}) no-repeat center center`,
        width: '40px',
        height: '40px',
        backgroundSize: 'contain',
        right: '-45px'
      }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: null,
    responsive: [
      { 
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
