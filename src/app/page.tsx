import HomeSlider from "@/components/HomeSlider";
import FooterEmail from "@/components/FooterEmail";
import AccordionSection from "@/components/AccordionSection";
import LatestRelease from "@/components/LatestRelease";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <LatestRelease />
      <AccordionSection />
      <FooterEmail />
    </>
  );
}
