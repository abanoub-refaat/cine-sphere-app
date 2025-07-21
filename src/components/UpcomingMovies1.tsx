import React from "react";

interface Props {
  className: string;
  headerText: string;
  subHeader: string;
  paragraphText: string;
}

function UpcomingMovies1({
  className,
  headerText,
  subHeader,
  paragraphText,
}: Props) {
  return (
    <div
      className={`flex flex-col justify-end items-start w-screen bg-center md:h-screen p-10 md:p-24 ${className} bg-cover`}
    >
      <div className="text-white md:w-[50%]">
        <h2 className="font-bold text-lg md:text-4xl my-1 md:my-3">
          {headerText}
        </h2>
        <p className="font-bold text-lg md:text-xl my-2">{subHeader}</p>
        <p className="text-xs my-2 md:text-sm w-full text-gray-200">
          {paragraphText}
        </p>
      </div>
    </div>
  );
}


export default UpcomingMovies1;