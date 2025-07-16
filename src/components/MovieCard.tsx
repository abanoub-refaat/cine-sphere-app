import react from "react";

interface Props{
    title: string;
    image: string;
    data: string[];
}

function MovieCard({ title, image, data }: Props) {
  return (
    <div className="">
      <img src={image} alt={title} className="h-60 object-cover rounded-md" />
      <h2 className="text-white text-sm font-semibold">{title}</h2>
      <p className="text-primary-400 text-xs font-semibold">{data.join(" • ")}</p>
    </div>
  );
}

export default MovieCard;
