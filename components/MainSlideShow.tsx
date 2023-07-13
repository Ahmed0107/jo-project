'use client'
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function MainSlideShow() {
  return (
    <Swiper
      className="w-full md:h-[600px] h-fit mt-[60px] flex items-center justify-center"
      id="slide_show"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      //   autoplay={}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={"/slideimg1.jpg"}
            alt=""
            className="w-full h-full contain"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={"/slideimg2.jpg"}
            alt=""
            className="w-full h-full contain"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={"/slideimg3.png"}
            alt=""
            className="w-full h-full contain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
