import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import img from '../../public/apartment.png'

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider  {...settings}>
      <div>
        <img className='md:w-3/5 md:ml-40' src={img.src} alt="" />
      </div>
      <div>
       <img className='md:w-3/5 md:ml-24 ' src={img.src} alt="" />
      </div>
      <div>
        <img className='md:w-3/5 md:ml-64' src={img.src} alt="" />
      </div>
      <div>
        <img className='md:w-3/5 md:ml-64' src={img.src} alt="" />
      </div>
      <div>
        <img className='md:w-3/5 md:ml-64' src={img.src} alt="" />
      </div>
      <div>
        <img className='md:w-3/5 md:ml-64' src={img.src} alt="" />
      </div>
    </Slider>
  );
}