"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import {
  FiClipboard,
  FiSettings,
  FiTag,
  FiCpu,
  FiHeadphones,
  FiClock,
} from "react-icons/fi";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const points = [
    {
      icon: FiClipboard,
      title: "Impressive track record",
      desc: "Like hiring any other company, people always check the company’s track record while hiring an IT service provider.",
    },
    {
      icon: FiSettings,
      title: "Flexibility",
      desc: "We understand that every business is unique. Hence, they demand unique IT solutions.",
    },
    {
      icon: FiTag,
      title: "Competitive price",
      desc: "We offer cost-effective solutions for every IT-related issue without compromising on quality.",
    },
    {
      icon: FiCpu,
      title: "Newest technology",
      desc: "We keep your business updated with the latest technology and ensure the same with our services.",
    },
    {
      icon: FiHeadphones,
      title: "24/7 online support",
      desc: "We provide answers to all your IT needs whenever you need them. You can rely on us anytime.",
    },
    {
      icon: FiClock,
      title: "Speedy resolutions",
      desc: "In business, ‘Time is cash’. We ensure prompt resolutions to avoid interruptions in your workflow.",
    },
  ];

  return (
    <section className="relative py-16 px-6 md:px-12 bg-white overflow-hidden">
      {/* Background decorative wire */}
      <img
        className="absolute top-0 left-0 -rotate-180 opacity-30 w-32 md:w-80"
        src="/wire.webp"
        alt="decor"
      />

      <div className="text-center mb-12 relative z-10">
        <p className="uppercase mb-3 border-l-[3px] border-[#F96614] inline-block pl-2 text-[#F96614] text-lg font-bold tracking-wider">
          Why Choose Us
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
          Why You Should Choose Our IT Services
        </h2>
      </div>

      {/* 6-Points Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {points.map((item, index) => (
          <div
            key={index}
            className="text-center px-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <item.icon className="mx-auto text-[#F96614] text-5xl mb-4" />

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              {index + 1}. {item.title}
            </h3>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
