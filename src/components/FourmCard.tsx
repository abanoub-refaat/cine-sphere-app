import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  data: Array<string>;
  image: string;
}

const FourmCard = ({ ...props }: Props) => {
  return (
    <div className="p-4 outline border-primary-700">
      <Image src={props.image} alt={props.name} height={80} width={80} />
      <div className="data">
        <h4>{props.name}</h4>
        <span>{props.data.map((el) => el)}</span>
      </div>
      <button className="bg-primary-800 rounded-md text-bold p-6">Join</button>
    </div>
  );
};

export default FourmCard;
