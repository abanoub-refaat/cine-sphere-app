/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  title: string;
  hasIcon: boolean;
  iconName?: string;
}
function ButtonOutline({ title, hasIcon, iconName }: Props) {
  return (
    <button
      type="button"
      className="bg-primary-200 bg-opacity-5	items-center text-primary-500 border-2 border-primary-500 text-sm hover:bg-primary-300 flex justify-center gap-2 rounded-tr-2xl rounded-bl-2xl w-36
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

export default ButtonOutline;
