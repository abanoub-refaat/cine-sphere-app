/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  title: string;
  hasIcon: boolean;
  iconName?: string;
}
function Buttonlight({ title, hasIcon, iconName }: Props) {
  return (
    <button
      type="button"
      className="bg-[#72678dff] bg-opacity-5	 text-[#FFFFFF] items-center text-sm hover:bg-primary-800 flex justify-center gap-2 rounded-tr-2xl rounded-bl-2xl w-36
          py-2 "
    >
      {hasIcon ? (
        <img
          src={iconName ?? ""}
          alt={iconName ?? ""}
          className="items-center"
        />
      ) : (
        ""
      )}
      {title}
    </button>
  );
}

export default Buttonlight;
