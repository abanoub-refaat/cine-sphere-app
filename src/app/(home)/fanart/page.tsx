import Banner from "@/components/Banner";
import FanartMainSlider from "@/components/FanartMainSlider";
import FooterEmail from "@/components/FooterEmail";
import LatesReleasesFanarts from "@/components/LatestReleasesFanarts";
import PopularFanartSection from "@/components/PopularFanartSection";
import TrendingFanarts from "@/components/TrendingFanarts";
import React from "react";

function Page() {
  return (
    <>
      <FanartMainSlider />
      <PopularFanartSection />
      <TrendingFanarts />
      <LatesReleasesFanarts />
      <Banner
        backgroundImage="bg-[url(/Images/fanart-banner.png)]"
        mainTitle="Bring Your Visions to Cine Sphere!"
        subTitle="Have a knack for creating amazing fan art? Don’t keep it to yourself! Share your talent with the Cine Sphere community and let the world see your artistic prowess. Your art could be the next big highlight!"
        buttonTitle="Make Creator Profile"
      />
      <FooterEmail />
    </>
  );
}

export default Page;
