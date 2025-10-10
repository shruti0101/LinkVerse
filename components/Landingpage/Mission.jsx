"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const tabs = [
  {
    id: 1,
    title: "Empowering Digital Infrastructure",
    description: `We deliver end-to-end networking and infrastructure solutions designed to strengthen enterprise connectivity, enhance security, and support business growth in the digital era. Our infrastructure services ensure seamless communication, high performance, and future-ready scalability.`,
    points: [
      "High-Speed Connectivity – Reliable LAN, WAN, and wireless solutions tailored for enterprises.",
      "Scalable Infrastructure – Modular and cloud-ready systems to adapt to business growth.",
      "Optimized Data Centers – Efficient and secure server, storage, and virtualization solutions.",
      "Enterprise-Grade Security – Network protection through firewalls, monitoring, and access control.",
    ],
    image: "/Cloud-1.gif",
  },
  {
    id: 2,
    title: "Sustainable & Reliable Networking",
    description: `Our approach focuses on building sustainable, resilient, and secure networks that minimize downtime while maximizing performance. We integrate cutting-edge technologies with best practices to ensure compliance, scalability, and long-term efficiency.`,
    points: [
      "Smart Networking – IoT-ready infrastructure for smarter business operations.",
      "Cloud Integration – Seamless migration and hybrid cloud solutions.",
      "24/7 Monitoring – Proactive support to minimize risks and downtime.",
      "Green IT Practices – Energy-efficient networking and infrastructure planning.",
    ],
    image: "/partner.gif",
  },
  {
    id: 3,
    title: "Building Long-Term Partnerships",
    description: `We believe in creating lasting collaborations by providing reliable, future-ready infrastructure services. Our solutions are built around customer needs, ensuring long-term success through trust, performance, and continuous innovation.`,
    points: [
      "Tailored Solutions – Custom networking strategies for diverse industries.",
      "Future-Proof Technology – Deploying the latest in cloud, AI, and automation.",
      "Dedicated Support – Expert teams available round-the-clock for assistance.",
      "Agile Collaboration – Scalable models designed to grow with your business.",
      "Commitment to Excellence – Delivering consistent, high-quality infrastructure services.",
    ],
    image: "/building.webp",
  },
];

export default function PremiumTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto change every 9s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-gray-50 via-white pt-5 md:pt-0 to-gray-50 md:py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center px-4 sm:px-6 lg:px-8">
        
        {/* LEFT SIDE - CONTENT */}
        <div className="flex flex-col">
          {/* Tab Headers */}
          <div className="flex overflow-x-auto border-b border-gray-200 mb-6 sm:mb-8 scrollbar-hide">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveIndex(index)}
                className={`relative whitespace-nowrap px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-lg font-medium transition-all flex-shrink-0 ${
                  index === activeIndex
                    ? "text-[#ff6600]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.title.split(" ")[0]} {/* short label */}
                {index === activeIndex && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] sm:h-[3px] bg-[#ff6600] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence data-aos="fade-up" mode="wait">
            <motion.div
              key={tabs[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                {tabs[activeIndex].title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6">
                {tabs[activeIndex].description}
              </p>
              <ul className="space-y-3 sm:space-y-4 text-gray-800">
                {tabs[activeIndex].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                    <FaCheckSquare className="text-[#ff6600] mt-1 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative w-full mt-10 sm:mt-16 md:mt-0 h-60 sm:h-72 md:h-[450px] flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeIndex].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden w-full flex justify-center"
            >
              <Image
                data-aos="fade-left"
                src={tabs[activeIndex].image}
                alt={tabs[activeIndex].title}
                width={500}
                height={500}
                className="object-contain rounded-lg w-[85%] sm:w-[70%] md:w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
