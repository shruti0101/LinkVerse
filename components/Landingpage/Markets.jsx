"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  { 
    title: "Mobile Operators", 
    subtitle: "LinkVerse 5G-ready networks delivering seamless coverage and high-speed connectivity.", 
    image: "5.webp" 
  },
  { 
    title: "WISPs", 
    subtitle: "LinkVerse provides reliable last-mile wireless solutions for rural and underserved regions.", 
    image: "6.webp" 
  },
  { 
    title: "Public Safety", 
    subtitle: "Mission-critical communication networks by LinkVerse for first responders and emergency services.", 
    image: "7.webp" 
  },
  { 
    title: "Government", 
    subtitle: "Secure and scalable LinkVerse Technology supporting digital governance initiatives.", 
    image: "8.webp" 
  },
  { 
    title: "Utilities", 
    subtitle: "Smart grid and infrastructure connectivity solutions by LinkVerse ensuring energy and water reliability.", 
    image: "9.webp" 
  },
  { 
    title: "Oil and Gas", 
    subtitle: "LinkVerse robust wireless infrastructure for remote exploration and operations.", 
    image: "10.webp" 
  },
  { 
    title: "Mining", 
    subtitle: "Durable wireless networks from LinkVerse designed for extreme industrial environments.", 
    image: "11.webp" 
  },
  { 
    title: "Transportation", 
    subtitle: "Smart mobility and wireless transit solutions by LinkVerse for connected and safe journeys.", 
    image: "12.webp" 
  },
];

export default function ServicesGrid() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      style={{ backgroundImage: "url('/services/bg.webp')" }}
      className="bg-cover bg-center py-16  relative overflow-hidden"
    >
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center px-6" data-aos="fade-down">
     
        <h2 className=" text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Empowering{" "}
          <span className="bg-gradient-to-r from-[#F96614] to-orange-700 bg-clip-text text-transparent">
            Industries Worldwide
          </span>
        </h2>
        <p className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
          From mobile operators to mission-critical public safety,{" "}
          <strong>LinkVerse</strong> delivers <strong>resilient connectivity</strong> and{" "}
          <strong>future-ready networks</strong> across diverse sectors.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12" data-aos="fade-up">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveCard(index)}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full  object-contain h-70 transition-transform duration-500 group-hover:scale-105 "
              
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500"></div> */}

            {/* Content */}


            {/* <div className="absolute bottom-4 left-4 pr-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
              <p className="text-sm md:text-base">{service.subtitle}</p>
            </div> */}

            {/* Arrow */}
            {/* {activeCard !== index && (
              <div
                className="absolute top-4 left-4 bg-[#F96614] p-3 rounded-full 
                           transition-all duration-500 opacity-90 
                           group-hover:opacity-0 group-hover:scale-0 
                           group-hover:translate-x-2 group-hover:-translate-y-2"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}
