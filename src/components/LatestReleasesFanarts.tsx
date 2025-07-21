"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const LatesReleasesFanarts = () => {
  return (
    <div className="pb-12 px-12">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-3xl font-bold text-white my-8">
          Latest Releases
        </h2>
      </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        style={{ paddingBottom: 80, gap: 20 }}
        className="default-swipper bg-black"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <Image
            height={360}
            width={360}
            alt="fanart image"
            src={"/Images/fanart-6.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={360}
            width={360}
            alt="fanart image"
            src={"/Images/fanart-7.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={360}
            width={360}
            alt="fanart image"
            src={"/Images/fanart-8.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={360}
            width={360}
            alt="fanart image"
            src={"/Images/fanart-5.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={360}
            width={360}
            alt="fanart image"
            src={"/Images/fanart-7.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={360}
            width={360}
            alt="fanart image"
            src={"/Images/fanart-8.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={360}
            width={360}
            alt="fanart image"
            src={"/Images/fanart-6.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={360}
            width={360}
            alt="fanart image"
            src={"/Images/fanart-5.png"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LatesReleasesFanarts;
