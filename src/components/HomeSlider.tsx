"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/Button";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function HomeSlider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwipe text-white w-full"
      >
        <SwiperSlide>
          <div className="bg-[url(/images/movie-1.png)] bg-cover flex flex-col justify-start items-start gap-4 pt-60 p-20">
            <div className="movie-info flex flex-col my-5">
              <p className="text-sm font-light sm:hidden">2019</p>
              <h2 className="font-bold text-4xl">Avengers:Endgame</h2>
              <p className="text-xs font-light">2 hr 3 min • Action • Sci-fi</p>
            </div>
            <p className="w-6/12 font-extralight">
              After Thanos, an intergalactic warlord, disintegrates half of the
              universe, the Avengers must reunite and assemble again to
              reinvigorate their trounced allies and restore balance.
            </p>
            <Button
              title="Play Now"
              hasIcon={true}
              iconName="icons/ph_play-fill.svg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(/images/movie-2.png)] bg-cover flex flex-col justify-start items-start gap-4 pt-60 p-20">
            <div className="movie-info flex flex-col my-5">
              <p className="text-sm font-light">2022</p>
              <h2 className="font-bold text-4xl">The Batman</h2>
              <p className="text-xs font-light">2 hr 56 min • Action • Drama</p>
            </div>
            <p className="w-6/12 font-extralight">
              Batman is called to intervene when the mayor of Gotham City is
              murdered. Soon, his investigation leads him to uncover a web of
              corruption, linked to his own dark past.
            </p>
            <Button
              title="Play Now"
              hasIcon={true}
              iconName="icons/ph_play-fill.svg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[url(/images/movie-3.png)] bg-cover flex flex-col justify-start items-start gap-4 pt-60 p-20">
            <div className="movie-info flex flex-col my-5">
              <p className="text-sm font-light">2020</p>
              <h2 className="font-bold text-4xl">Jujutsu Kaisen</h2>
              <p className="text-xs font-light">2 Seasons • Action • Drama</p>
            </div>
            <p className="w-6/12 font-extralight">
              After a boy is thrust into the world of the supernatural, he must
              rise to the challenge in order to prevent demons from obliterating
              all that he holds dear.
            </p>
            <Button
              title="Play Now"
              hasIcon={true}
              iconName="icons/ph_play-fill.svg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[url(/images/movie-4.png)] bg-cover flex flex-col justify-start items-start gap-4 pt-60 p-20">
            <div className="movie-info flex flex-col my-5">
              <p className="text-sm font-light">2023</p>
              <h2 className="font-bold text-4xl">
                Spiderman: Across the Spiderverse
              </h2>
              <p className="text-xs font-light">2 hr 20 min • Action • Drama</p>
            </div>
            <p className="w-6/12 font-extralight">
              In an attempt to curb the Spot, a scientist, from harnessing the
              power of the multiverse, Miles Morales joins forces with Gwen
              Stacy.
            </p>
            <Button
              title="Play Now"
              hasIcon={true}
              iconName="icons/ph_play-fill.svg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[url(/images/movie-5.png)] bg-cover flex flex-col justify-start items-start gap-4 pt-60 p-20">
            <div className="movie-info flex flex-col my-5">
              <p className="text-sm font-light">2023</p>
              <h2 className="font-bold text-4xl">Attack on Titan</h2>
              <p className="text-xs font-light">4 Seasons • Action • Drama</p>
            </div>
            <p className="w-6/12 font-extralight">
              Humankind constructs lofty walls to safeguard itself from immense
              creatures, the Titans. It battles to regain its land captured by
              the Titans which is not easy.
            </p>
            <Button
              title="Play Now"
              hasIcon={true}
              iconName="icons/ph_play-fill.svg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSlider;
