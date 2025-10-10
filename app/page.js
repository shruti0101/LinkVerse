import Image from "next/image";
import Hero from "@/components/Hero"
import Howtohelp from "@/components/Landingpage/Howtohelp"
import Missinvision from "@/components/Landingpage/Mission"
import Services from "@/components/Landingpage/Sevices"
import Markets from "@/components/Landingpage/Markets"
import Problem from "@/components/Landingpage/Problem";
import Whychoose from "@/components/Landingpage/Whychoose"
import Faq from "@/components/Landingpage/Faq"
import Approach from "@/components/Landingpage/Approach"
import Map from "@/components/Landingpage/Map";
import Scrolltop from "@/components/Landingpage/Scrolltop"
import Whatsapp from "@/components/Landingpage/Whatsapp";
import Form from "@/components/Landingpage/Form"
import Countup from "@/components/Landingpage/Countup"
import TestimonialSlider from "@/components/Landingpage/Testimonial";
export default function Home() {
  return (
   <>

   <Scrolltop></Scrolltop>
   <Whatsapp></Whatsapp>
   <Hero></Hero>
   <Problem></Problem>
   <Missinvision></Missinvision>
  <Countup></Countup>
   <Services></Services>
       <Howtohelp></Howtohelp>
   <Markets></Markets>
   <Approach></Approach>
   <Map></Map>
   <Form></Form>
   <Whychoose></Whychoose>
   <TestimonialSlider></TestimonialSlider>
   <Faq></Faq>
   </>
  );
}
