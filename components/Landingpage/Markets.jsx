"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  { 
    title: "Mobile Operators", 
    subtitle: "LinkVerse 5G-ready networks delivering seamless coverage and high-speed connectivity.", 
    image: "/services/Mobile-Operators-hp-tile.webp" 
  },
  { 
    title: "WISPs", 
    subtitle: "LinkVerse provides reliable last-mile wireless solutions for rural and underserved regions.", 
    image: "/services/WISPs-hp-tile.webp" 
  },
  { 
    title: "Public Safety", 
    subtitle: "Mission-critical communication networks by LinkVerse for first responders and emergency services.", 
    image: "/services/Public-safesafety-hp-tile.webp" 
  },
  { 
    title: "Government", 
    subtitle: "Secure and scalable LinkVerse networks supporting digital governance initiatives.", 
    image: "/services/Government-hp-tile.webp" 
  },
  { 
    title: "Utilities", 
    subtitle: "Smart grid and infrastructure connectivity solutions by LinkVerse ensuring energy and water reliability.", 
    image: "/services/Utilities-hp-tile.webp" 
  },
  { 
    title: "Oil and Gas", 
    subtitle: "LinkVerse robust wireless infrastructure for remote exploration and operations.", 
    image: "/services/Oil-and-Gas-hp-tile.webp" 
  },
  { 
    title: "Mining", 
    subtitle: "Durable wireless networks from LinkVerse designed for extreme industrial environments.", 
    image: "/services/Minings-hp-tile.webp" 
  },
  { 
    title: "Transportation", 
    subtitle: "Smart mobility and wireless transit solutions by LinkVerse for connected and safe journeys.", 
    image: "/services/Transportation-hp-tile.webp" 
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
      style={{ backgroundImage: "url('/services/bg.jpg')" }}
      className="bg-cover bg-center py-16 md:py-20 relative overflow-hidden"
    >
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center px-6" data-aos="fade-down">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#F96614]">
          Markets We Serve
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
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
              className={`w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105 ${
                activeCard === index ? "grayscale-0" : "grayscale group-hover:grayscale-0"
              }`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 pr-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
              <p className="text-sm md:text-base">{service.subtitle}</p>
            </div>

            {/* Arrow */}
            {activeCard !== index && (
              <div
                className="absolute top-4 left-4 bg-[#F96614] p-3 rounded-full 
                           transition-all duration-500 opacity-90 
                           group-hover:opacity-0 group-hover:scale-0 
                           group-hover:translate-x-2 group-hover:-translate-y-2"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
