"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = [
  {
    id: "collaboration",
    title: "Collaboration",
    heading: "Smarter Team Collaboration",
    desc: "Empower your workforce with seamless collaboration tools. From real-time file sharing to integrated communication channels, LinkVerse makes teamwork effortless, no matter where your people are.",
    img: "/collab.png",
   
  },
  {
    id: "security",
    title: "Security",
    heading: "Enterprise-Grade Security",
    desc: "Protect your business with next-gen cybersecurity solutions. Our advanced monitoring and AI-driven protection shield your data from modern threats, ensuring peace of mind and compliance at every level.",
    img: "/security.png",
    cta: "Discover Security",
  },
  {
    id: "analytics",
    title: "Analytics",
    heading: "Data-Driven Insights",
    desc: "Turn raw data into actionable insights with LinkVerse Analytics. Unlock predictive intelligence, track performance in real-time, and make smarter business decisions with clarity and confidence.",
    img: "/images/analytics.png",
    cta: "Start Analyzing",
  },
];

export default function Mission() {
  const [active, setActive] = useState("collaboration");

  const activeTab = tabs.find((t) => t.id === active);

  return (
    <div className="w-full max-w-7xl mx-auto px-10 py-12">
      {/* Tabs */}
      <div className="flex justify-center gap-16 border-b border-gray-300 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative pb-2 text-xl font-bold ${
              active === tab.id ? "text-[#C53913]" : "text-gray-700"
            }`}
          >
            {tab.title}
            {active === tab.id && (
              <motion.div
                layoutId="underline"
                className="h-[2px] absolute left-0 right-0 bottom-0 bg-[#C53913] rounded"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-10 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {activeTab.heading}
          </h2>
          <p className="text-gray-600 mb-6">{activeTab.desc}</p>
       
        </div>
        <div className="flex justify-center">
          <Image
            src={activeTab.img}
            alt={activeTab.title}
            width={450}
            height={300}
            className="rounded-md shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
}
