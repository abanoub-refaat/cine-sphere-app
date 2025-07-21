import Banner from "@/components/Banner";
import FanartPreview from "@/components/FanartPreview";
import FooterEmail from "@/components/FooterEmail";
import LatesReleasesFanarts from "@/components/LatestReleasesFanarts";
import PopularFanartSection from "@/components/PopularFanartSection";
import TrendingFanarts from "@/components/TrendingFanarts";
import React from "react";

function Page() {
  return (
    <>
      <FanartPreview
        className="bg-[url(/Images/fanart-2.png)] w-fit"
        headerText="Welcome to the Cine Sphere Fan Art Gallery"
        subHeader="Unleash Your Creativity"
        paragraphText="          Dive into a world of imagination with Cine Sphere’s Fan Art Gallery.
          Explore stunning artworks created by passionate fans like you. From
          beloved characters to iconic scenes, discover and share your creative
          masterpieces!"
      />
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
