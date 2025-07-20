import React from "react";

interface Props {
  className: string;
}

function FanartPreview({ className }: Props) {
  return (
    <div
      className={`flex flex-col justify-end items-start w-screen bg-center md:h-screen p-8 ${className} bg-cover`}
    >
      <div className="text-white md:w-[50%]">
        <h2 className="font-bold text-lg md:text-4xl my-1 md:my-3">
          Welcome to the Cine Sphere Fan Art Gallery
        </h2>
        <p className="font-bold text-lg md:text-xl my-2">
          Unleash Your Creativity
        </p>
        <p className="text-xs my-2 md:text-sm w-full text-gray-200">
          Dive into a world of imagination with Cine Sphere’s Fan Art Gallery.
          Explore stunning artworks created by passionate fans like you. From
          beloved characters to iconic scenes, discover and share your creative
          masterpieces!
        </p>
      </div>
    </div>
  );
}

export default FanartPreview;
