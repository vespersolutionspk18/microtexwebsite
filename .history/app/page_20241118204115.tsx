import Image from "next/image";
import Header from "@/components/header";
import Hero from "./hero";
import WhyMct from "./WhyMct";


export default function Home() {
  return (
   <div>
   <Header />
   <Hero />
   <WhyMct />
   </div>
  );
}
