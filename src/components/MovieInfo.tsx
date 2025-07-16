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
      <div className="movie-info flex flex-col my-5">
        <p className="text-sm font-light">{year}</p>
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="text-xs py-2">
          {data.map((el, index) =>
            index === data.length - 1 ? el : el + " • "
          )}
        </p>
      </div>
      <p className="w-6/12 font-extralight mb-5 ">{description}</p>
      <div className="flex gap-2">
        <Button
          title="Play Now"
          hasIcon={true}
          iconName="icons/ph_play-fill.svg"
        />
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
  );
}

export default MovieInfo;
