/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  rate: number;
}

function Ratings({ rate = 0 }: Props) {
  const stars: Array<React.JSX.Element> = [];
  const handelRating = () => {
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(
          <img src={"icons/iconamoon_star-fill.svg"} alt="filled star" />
        );
      } else {
        stars.push(
          <img src={"icons/iconamoon_star-light.svg"} alt="empty star" />
        );
      }
    }
  };
  handelRating();

  return <div className="flex gap-2 p-3">{stars.map((el) => el)}</div>;
}

export default Ratings;
