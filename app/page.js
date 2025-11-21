
import Hero from "@/components/Hero"
import Howtohelp from "@/components/Landingpage/Howtohelp"

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
import Slider from "@/components/Landingpage/Slider"
import ClienteleSection from "@/components/Landingpage/Clientele";
import Addons from "@/components/Landingpage/Addons";
import Portfolio from "@/components/Landingpage/Portfolio";
export default function Home() {
  return (  
   <>

   <Scrolltop></Scrolltop>
   <Whatsapp></Whatsapp>
   <Hero></Hero>
   <Addons> </Addons>
  <Slider></Slider>
 <Portfolio></Portfolio>
 
 
   <Services></Services>
       <Howtohelp></Howtohelp>

   <Approach></Approach>
    <Countup></Countup>
      <Markets></Markets>
   <Map></Map>
   <Form></Form>
   <Whychoose></Whychoose>
   <ClienteleSection></ClienteleSection>
   <TestimonialSlider></TestimonialSlider>\
    <Problem></Problem>
   <Faq></Faq>
    
   </>
  );
}
