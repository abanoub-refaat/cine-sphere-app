"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "@/components/MovieCard";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
function TrendingMovies() {
  return (
    <div className="px-14 trendin-movies">
      <h2 className="text-3xl font-bold text-white mb-10">
        Trending Movies & Shows
      </h2>
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
          <MovieCard
            title="Breaking Bad"
            image="/images/bb.png"
            data={["Drama", "crime"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            title="Dune Part II"
            image="/images/dunte.png"
            data={["Action", "Thriller"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            title="Avatar"
            image="/images/avatar (2).png"
            data={["Action", "Thriller"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            title="John Wick 4"
            image="/images/jw-4.png"
            data={["Action", "Thriller"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            title="Top Gun"
            image="images/top-gun.png"
            data={["Action", "Anime", "Top"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            title="The Last Of Us"
            image="/images/last-of-us (1).png"
            data={["Action", "Thriller"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            title="The Marvels"
            image="images/the-marvels.png"
            data={["Action", "Thriller"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard
            title="Attack on Titans"
            image="images/aot.jpg"
            data={["Action", "Anime", "Top"]}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TrendingMovies;
