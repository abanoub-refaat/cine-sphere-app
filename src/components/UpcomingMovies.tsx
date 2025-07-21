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
    <div className={'flex items-center gap-4 my-2 {month}'}>
      
      <div className="text-primary-500 bg-[#0f0b0e33] rounded-full min-h-16 min-w-16 h-16 w-16 flex items-center justify-center font-bold text-2xl border border-primary-500">
        {num}

      </div>
      
      <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />

      
      <div className="flex flex-col justify-center ml-2">
        <h2 className="text-white font-semibold text-sm">{title}</h2>
        <p className="text-gray-400 text-xs">{subtitle}</p>
      </div>
    </div>

  );
}

export default UpcomingMovies;