import Image from "next/image";
import Header from "@/components/header";
import Hero from "./hero";
import WhyMct from "./WhyMct";
import OurServices from "./OurServices";


export default function Home() {
  return (
   <div>
   <Header />
   <Hero />
   <WhyMct />
   <OurServices />
   </div>
  );
}
