import React from "react";
import FanartPreview from "@/components/FanartPreview";
import MovieList from "@/components/MovieList";
import FreeTrial from "@/components/FreeTrial";
export default function page() {
  return (
    <>
      <FanartPreview
        className="bg-[url(/Images/log-bg.png)] w-fit"
        headerText="Get Ready for Action: Upcoming Blockbusters You Can't Miss!"
        subHeader=""
        paragraphText="Prepare for an adrenaline-packed season with our upcoming blockbusters! From thrilling action sequences to heart-pounding adventures, these movies will keep you on the edge of your seat. Mark your calendars for an unforgettable cinematic experience!"
      />
      <MovieList/>
      <FreeTrial />
    </>
  );
}