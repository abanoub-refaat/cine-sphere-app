/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  title: string;
  hasIcon: boolean;
  iconName?: string;
}

function Button({ title, hasIcon, iconName }: Props) {
  return (
    <button
      type="button"
      className="btn bg-primary-600 text-white text-sm rounded-tr-2xl rounded-bl-2xl w-36
          py-2 hover:bg-primary-700 active:bg-primary-700 flex justify-center items-center gap-2"
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

export default Button;
