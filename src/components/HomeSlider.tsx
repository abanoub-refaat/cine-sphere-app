"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieInfo from "@/components/MovieInfo";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function HomeSlider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwipe text-white w-full md:h-screen"
      >
        <SwiperSlide>
          <div
            className={`bg-[url(/Images/movie-1.png)] md:h-screen bg-cover bg-center flex flex-col justify-end items-start gap-4 pt-3 p-6 `}
          >
            <MovieInfo
              year={2019}
              title="Avengers: Endgame"
              data={["2 hr 3 min", "Action", "Sci-fi"]}
              description=" After Thanos, an intergalactic warlord, disintegrates half of the
              universe, the Avengers must reunite and assemble again to
              reinvigorate their trounced allies and restore balance."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(/Images/movie-2.png)] bg-cover bg-center md:h-screen flex flex-col gap-4 pt-3 p-6 justify-end items-start">
            <MovieInfo
              year={2022}
              title="The Batman"
              data={["2 hr 56 min ", "Action", "Drama"]}
              description="Batman is called to intervene when the mayor of Gotham City is
              murdered. Soon, his investigation leads him to uncover a web of
              corruption, linked to his own dark past."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(/Images/movie-3.png)] bg-cover bg-center md:h-screen flex flex-col gap-4 pt-3 p-6 justify-end items-start">
            <MovieInfo
              year={2020}
              title="Jujutsu Kaisen"
              data={["2 Seasons", "Action", "Drama"]}
              description="After a boy is thrust into the world of the supernatural, he must
              rise to the challenge in order to prevent demons from obliterating
              all that he holds dear."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(/Images/movie-4.png)] bg-cover bg-center md:h-screen flex flex-col gap-4 pt-3 p-6 justify-end items-start">
            <MovieInfo
              year={2023}
              title="Spiderman: Across the Spiderverse"
              data={["2 hr 20 min", "Action", "Drama"]}
              description="In an attempt to curb the Spot, a scientist, from harnessing the
              power of the multiverse, Miles Morales joins forces with Gwen
              Stacy."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(/Images/movie-5.png)] bg-cover bg-center md:h-screen flex flex-col gap-4 pt-3 p-6 justify-end items-start">
            <MovieInfo
              year={2023}
              title="Attack on Titan"
              data={["4 Seasons", "Action", "Drama"]}
              description="Humankind constructs lofty walls to safeguard itself from immense
              creatures, the Titans. It battles to regain its land captured by
              the Titans which is not easy."
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSlider;
