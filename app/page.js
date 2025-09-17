import Image from "next/image";
import Hero from "@/components/Hero"
import Howtohelp from "@/components/Landingpage/Howtohelp"
import Missinvision from "@/components/Landingpage/Mission"
import Services from "@/components/Landingpage/Sevices"
import Markets from "@/components/Landingpage/Markets"
import Problem from "@/components/Landingpage/Problem";
export default function Home() {
  return (
   <>
   <Hero></Hero>
   <Problem></Problem>
   <Missinvision></Missinvision>
      <Howtohelp></Howtohelp>
   <Services></Services>
   <Markets></Markets>
   </>
  );
}
