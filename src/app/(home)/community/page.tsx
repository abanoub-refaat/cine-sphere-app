import FanartPreview from "@/components/FanartPreview";
import TrendingTalks from "@/components/TrendingTalks";
import React from "react";

const page = () => {
  return (
    <>
      <FanartPreview
        className="bg-[url(/Images/comm-header.png)] w-full "
        headerText="Welcome to the Cine Sphere Community"
        subHeader=""
        paragraphText="Join the conversation! Our community is buzzing with the latest discussions about your favorite shows and movies. Share your thoughts, ask questions, and connect with fellow fans."
      />
      <TrendingTalks />
    </>
  );
};

export default page;
