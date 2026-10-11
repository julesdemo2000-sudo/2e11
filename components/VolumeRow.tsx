import { VolumeKnob } from "./VolumeKnob";
import { Waveform } from "./Waveform";

export function VolumeRow() {
  return (
    <section
      aria-label="Waveform"
      className="flex flex-wrap items-center"
      style={{
        padding: "clamp(16px,2vw,24px) clamp(16px,3vw,40px) 0",
        gap: "clamp(16px,2.4vw,32px)",
      }}
    >
      <VolumeKnob />
      <Waveform />
    </section>
  );
}
