import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScaleRuler } from "@/components/ScaleRuler";
import { SelectedWork } from "@/components/SelectedWork";
import { VolumeType } from "@/components/VolumeType";
import { ThreeColumns } from "@/components/ThreeColumns";
import { StatementBand } from "@/components/StatementBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-paper text-ink">
      <div className="relative z-[51] bg-white">
        <Header />
      </div>
      <main>
        <div className="relative z-[51] bg-white">
          <div className="px-page" style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
            <Hero />
            <ScaleRuler />
          </div>
        </div>
        <SelectedWork />
        <VolumeType />
        <ThreeColumns />
        <StatementBand />
      </main>
      <Footer />
    </div>
  );
}
