"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "./Category";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Button from "@/components/Button";
function PopularFanartSection() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-3xl font-bold text-white my-10">
          Popular Fanart Categories
        </h2>
        <Button
          title="Post"
          hasIcon={true}
          iconName="/icons/carbon_add-filled.svg"
          styles="h-10 w-[12%] p-12 text-sm "
        />
      </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        style={{ paddingBottom: 20, gap: 20 }}
        className="mySwiper py-10 bg-black"
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
          <Category
            categoryName="Superheros"
            backgourndImage="bg-[url(/Images/category-1.png)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Category
            categoryName="Fantacy"
            backgourndImage="bg-[url(/Images/category-2.png)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Category
            categoryName="Marvels"
            backgourndImage="bg-[url(/Images/category-3.png)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Category
            categoryName="Horror"
            backgourndImage="bg-[url(/Images/category-1.png)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Category
            categoryName="Games"
            backgourndImage="bg-[url(/Images/category-2.png)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Category
            categoryName="Anime"
            backgourndImage="bg-[url(/Images/fanart-3.png)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Category
            categoryName="Games"
            backgourndImage="bg-[url(/Images/category-2.png)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Category
            categoryName="Anime"
            backgourndImage="bg-[url(/Images/fanart-3.png)]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PopularFanartSection;
