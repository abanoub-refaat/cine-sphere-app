/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  title: string;
  hasIcon: boolean;
  iconName?: string;
}
function ButtonLightOutline({ title, hasIcon, iconName }: Props) {
  return (
    <button
      type="button"
      className="bg-[#9279c1ff] bg-opacity-5 items-center text-white border-2 border-white text-sm hover:bg-primary-500 flex justify-center gap-2 rounded-tr-2xl rounded-bl-2xl w-36
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

export default ButtonLightOutline;
