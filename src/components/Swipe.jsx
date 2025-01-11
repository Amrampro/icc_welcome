import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { images } from "../assets/assets";

import "../assets/styles/Swipe.css";

function Swipe() {
  return (
    <div className="container">
      <div className="first mt-10">
      <h1>This is the testament</h1>
      </div>
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={images.hall1} alt="slide_image" />
          ss
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.hall2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.hall3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.hall1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.hall2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.hall3} alt="slide_image" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowLeftLong />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowRightLong />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Swipe;
