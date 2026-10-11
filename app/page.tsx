import { Header } from "@/components/Header";
import { Showreel } from "@/components/Showreel";
import { VolumeRow } from "@/components/VolumeRow";
import { Intro } from "@/components/Intro";
import { BrandCards } from "@/components/BrandCards";
import { WorkCarousel } from "@/components/WorkCarousel";
import { Ticker } from "@/components/Ticker";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-bg text-white">
      <Header />
      <Showreel />
      <VolumeRow />
      <Intro />
      <BrandCards />
      <WorkCarousel />
      <Ticker />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
