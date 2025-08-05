import Image from "next/image";
import Silk from "@/components/hero";
import { MarqueeDemo } from "@/components/flagsection";
import GlobalPresenceSection from "@/components/globalpresence";

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, width: "100%", height: "auto", overflow: "hidden" }}>
      <Silk
        speed={9}
        scale={0.8}
        color="#4F46E5"
        noiseIntensity={1.5}
        rotation={0}
        height={650}
      />
      <div>
        <MarqueeDemo />
      </div>
      <GlobalPresenceSection />
    </div>
  );
}