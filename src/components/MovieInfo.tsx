import React from "react";
import Button from "@/components/Button";
import Buttonlight from "@/components/Buttonlight";
import ButtonLightOutline from "@/components/ButtonLightOutline";

interface Props {
  year: number;
  title: string;
  data: Array<string>;
  description: string;
}

function MovieInfo({ year, title, data, description }: Props) {
  return (
    <div className="p-6 overflow-auto">
      <div className="movie-info flex flex-col my-2 sm:my-5">
        <p className="hidden sm:block text-sm font-light">{year}</p>
        <h2 className="font-bold text-xl py-2 sm:text-4xl">{title}</h2>
        <p className="hidden sm:block text-xs py-2">
          {data.map((el, index) =>
            index === data.length - 1 ? el : el + " • "
          )}
        </p>
      </div>
      <p className="text-sm font-extralight sm:w-6/12 mb-4 sm:mb-5 ">
        {description}
      </p>
      <div className="flex gap-2">
        <Button
          title="Play Now"
          hasIcon={true}
          iconName="icons/ph_play-fill.svg"
        />
        <div className="hidden sm:flex gap-2">
          <Buttonlight
            title="Watch Trailer"
            hasIcon={true}
            iconName="/icons/ph_play-fill.svg"
          />
          <ButtonLightOutline
            title="Add to Wishlist"
            hasIcon={true}
            iconName="icons/Wishlist.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
