import Image from "next/image";
import Silk from "@/components/hero";
import { MarqueeDemo } from "@/components/flagsection";
import GlobalPresenceSection from "@/components/globalpresence";
 import Threads from '@/components/hero';

export default function Home() {
  return (
    
     

    <>
    
  <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
</div>
    </>
  );
}