import HomeSlider from "@/components/HomeSlider";
import FooterEmail from "@/components/FooterEmail";
import AccordionSection from "@/components/AccordionSection";
import LatestRelease from "@/components/LatestRelease";
import FreeTrial from "@/components/FreeTrial";
import TrendingMovies from "@/components/TrendingMovies";

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <HomeSlider />
      <LatestRelease />
      <TrendingMovies />
      <FreeTrial />
      <AccordionSection />
      <FooterEmail />
    </>
  );
}
