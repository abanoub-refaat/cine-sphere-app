import React from 'react';

interface Props {
  num: string;
  title: string;
  subtitle: string;
  month: string;
  image: string;
}

function UpcomingMovies({ num, title, subtitle, month, image }: Props) {
  return (
    <div className={`flex text-xs {month}`}>

      <div className="text-primary-500 bg-0f0b0e33 rounded-full h-16 w-16 flex items-center justify-center font-bold text-4xl m-2 border border-primary-500">
        {num}

      </div>
        <img src={image} alt={title} className="h-14 w-14 object-cover rounded"/>

      <div>
        <h2 className="text-white font-semibold text-sm">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export default UpcomingMovies;