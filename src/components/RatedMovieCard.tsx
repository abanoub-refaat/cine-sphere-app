import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  data: string[];
  rate?: number;
}

function MovieCard({ title, image, data, rate = 0 }: Props) {
  return (
    <div className="">
      <Image src={image} alt={title} className="w-80 h-50 rounded" />
      <h2 className="text-white text-sm font-semibold">{title}</h2>
      <div className="flex items-center">
        <Image
          src="icons/yellowstar.svg"
          alt="Rating"
          className="w-4 h-4 inline-block mr-1"
        />
        <span className="text-primary-400 text-xs font-semibold">
          {rate > 0 ? rate : "0.0"}
        </span>

        <p className="text-primary-400 text-xs font-semibold">
          | {data.join(" • ")}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
