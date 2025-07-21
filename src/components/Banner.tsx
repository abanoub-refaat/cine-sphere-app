import React from "react";
import Button from "@/components/Button";

interface Props {
  mainTitle: string;
  subTitle: string;
  buttonTitle: string;
  backgroundImage: string;
}

function Banner({ ...props }: Props) {
  return (
    <div
      className={`flex ${props.backgroundImage} bg-center bg-cover h-fit p-12 md:p-24 gap-2 flex flex-col justify-end items-start`}
    >
      <div className="flex flex-col">
        <h3 className="text-xl md:text-4xl w-[50%] text-white  font-bold">
          {props.mainTitle}
        </h3>
        <p className="text-xs md:text-lg w-full md:w-[50%] mb-4 text-white mt-2">
          {props.subTitle}
        </p>
        <Button
          title={props.buttonTitle}
          hasIcon={false}
          styles="px-2 w-[15%]"
        />
      </div>
    </div>
  );
}

export default Banner;
