import React from "react";
import TalkPreview from "./TalkPreview";
import FourmSection from "./FourmSection";

const TrendingTalks = () => {
  return (
    <div className="p-12 text-center flex flex-col text-white">
      <h2 className="font-extrabold text-4xl">Trending Talks</h2>
      <TalkPreview />
      <FourmSection />
    </div>
  );
};

export default TrendingTalks;
