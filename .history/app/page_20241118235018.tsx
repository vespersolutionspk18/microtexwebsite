import Image from "next/image";
import Header from "@/components/header";
import Hero from "./hero";
import WhyMct from "./WhyMct";
import OurServices from "./OurServices";
import OurMachines from "./OurMachines";
import AboutUsSection from "./AboutUsSection";


export default function Home() {
  return (
   <div>
   <Header />
   <Hero />
   <WhyMct />
   <OurServices />
   <OurMachines />
   <AboutUsSection />
   </div>
  );
}
