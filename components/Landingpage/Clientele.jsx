"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const clients = [
  { name: "Client 1", logo: "/clientele/1.webp" },
  { name: "Client 2", logo: "/clientele/2.webp" },
  { name: "Client 3", logo: "/clientele/3.webp" },
  { name: "Client 4", logo: "/clientele/4.webp" },
  { name: "Client 5", logo: "/clientele/5.webp" },
  { name: "Client 6", logo: "/clientele/6.webp" },
  { name: "Client 7", logo: "/clientele/7.webp" },
  { name: "Client 8", logo: "/clientele/8.webp" },
  { name: "Client 9", logo: "/clientele/9.webp" },
];

const ClienteleSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Our Esteemed Clients
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-black mb-12 max-w-2xl mx-auto"
        >
          We are proud to have partnered with leading brands across various
          industries — building trust, quality, and lasting relationships.
        </motion.p>

        {/* Slider */}
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center justify-center p-6 bg-stone-200 rounded-xl shadow-sm hover:shadow-lg transition-transform duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain bg-black rounded"
                  unoptimized
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClienteleSection;
