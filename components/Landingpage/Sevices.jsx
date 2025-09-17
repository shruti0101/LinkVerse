"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Mobile Operators", subtitle: "5G Empowerment", image: "/services/Mobile-Operators-hp-tile.jpg" },
  { title: "WISPs", subtitle: "Seamless Connectivity", image: "/services/WISPs-hp-tile.jpg" },
  { title: "Public Safety", subtitle: "Mission-Critical Reliability", image: "/services/Public-safesafety-hp-tile.jpg" },
  { title: "Government", subtitle: "Secure Networks", image: "/services/Government-hp-tile.jpg" },
  { title: "Utilities", subtitle: "Infrastructure Reliability", image: "/services/Utilities-hp-tile.jpg" },
  { title: "Oil and Gas", subtitle: "Exploration Connectivity", image: "/services/Oil-and-Gas-hp-tile.jpg" },
  { title: "Mining", subtitle: "Wireless Durability", image: "/services/Minings-hp-tile.jpg" },
  { title: "Transportation", subtitle: "Wireless Transit", image: "/services/Transportation-hp-tile.jpg" },
];

export default function ServicesGrid() {
  const [activeCard, setActiveCard] = useState(null);

  return (
<>

<section style={{backgroundImage:"url('/services/bg.jpg')"}} className="bg-cover   py-20  bg-center relative py-18">

 <div className="max-w-4xl mx-auto mb-10 text-center px-6">
    <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#F96614]">
      Markets We Serve
    </span>
    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
      Empowering{" "}
      <span className="bg-gradient-to-r from-[#F96614] to-orange-700 bg-clip-text text-transparent">
        Industries Worldwide
      </span>
    </h2>
    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
      From mobile operators to mission-critical public safety, our solutions
      drive <strong>reliable connectivity</strong> and <strong>future-ready networks</strong>
      across diverse sectors.
    </p>
  </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          onClick={() => setActiveCard(index)}
          className={`relative group cursor-pointer rounded-lg overflow-hidden shadow-md`}
        >
          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className={`w-full h-70 object-cover transition-all duration-500 hover:scale-105
              ${activeCard === index ? "grayscale-0" : "grayscale group-hover:grayscale-0 "}`}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Content */}
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm">{service.subtitle}</p>
          </div>

     {/* Arrow */}
{activeCard !== index && (
  <div
    className="absolute top-3 left-3 bg-[#F96614] p-3 rounded-full 
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

</>
  );
}
