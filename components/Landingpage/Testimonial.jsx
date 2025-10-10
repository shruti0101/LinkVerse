"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "LinkVerse Networks completely redesigned our corporate network infrastructure. Their team implemented a secure, high-performance solution that improved connectivity across all our offices. Downtime is now virtually zero, and the staff is extremely satisfied with the seamless user experience.",
    name: "Enterprise IT – Mumbai",
  },
  {
    text: "We migrated our entire on-premise setup to a scalable cloud infrastructure with LinkVerse Networks. The transition was smooth, and their support team ensured minimal disruption to daily operations. Their expertise in cloud networking helped optimize our resources and reduce costs significantly.",
    name: "Cloud Services Company – Bangalore",
  },
  {
    text: "Our organization needed a reliable VoIP and unified communications solution. LinkVerse Networks delivered a robust setup with integrated monitoring, which has improved collaboration and efficiency among our teams. Their ongoing support has been exemplary.",
    name: "Corporate Office – Delhi",
  },
  {
    text: "We rely heavily on network security for our data-sensitive operations. LinkVerse Networks implemented advanced cybersecurity measures including zero-trust architecture and monitoring tools. We now feel confident about protecting critical assets from cyber threats.",
    name: "Financial Services Firm – Pune",
  },
  {
    text: "Their team optimized our wireless infrastructure across multiple sites, improving coverage and reducing connectivity issues. The structured cabling and network monitoring solutions they implemented have made IT management much easier.",
    name: "Tech Startup – Hyderabad",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="relative h-full w-full bg-[#F7DF86] py-5 md:py-12 text-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 md:mb-8">
          <span className="text-white">Client </span>
          <span className="text-black">Testimonials</span>
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="italic text-sm sm:text-lg md:text-xl leading-relaxed text-black max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
              {current.text}
            </p>
            <div className="flex flex-col items-center mt-4">
              <h4 className="text-xs sm:text-base md:text-lg font-serif font-semibold text-black">
                {current.name}
              </h4>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="hidden md:flex justify-between mt-8 sm:mt-12 max-w-[calc(100%-2rem)] mx-auto px-4 sm:px-0">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full transition"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#00537B]" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full transition"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00537B]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#F7C600]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
