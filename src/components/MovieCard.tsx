import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  data: string[];
}

function MovieCard({ title, image, data }: Props) {
  return (
    <div className="rounded rounded-tr-2xl rounded-bl-2xl">
      <Image
        src={image}
        alt={title}
        width={200}
        height={300}
        className="h-60 object-cover rounded-tr-2xl rounded-bl-2xl"
      />
      <h2 className="text-white pt-2 font-semibold">{title}</h2>
      <p className="text-primary-400 text-xs font-semibold">
        {data.join(" • ")}
      </p>
    </div>
  );
}

export default MovieCard;
