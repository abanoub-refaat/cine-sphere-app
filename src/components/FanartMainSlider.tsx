"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import FanartPreview from "@/components/FanartPreview";

export default function FanartMainSlider() {
  return (
    <>
      <Swiper className="mySwiper w-screen">
        <SwiperSlide>
          <FanartPreview className="bg-[url(/Images/fanart-1.png)]" />
        </SwiperSlide>
        <SwiperSlide>
          <FanartPreview className="bg-[url(/Images/fanart-2.png)]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
