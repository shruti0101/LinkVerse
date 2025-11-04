"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  const content = [
    { title: "Access Products for Any Network, Any Need", desc: "Achieve flexibility and scalability with Aviat’s versatile access products, built to adapt to your evolving network. Experience unmatched performance designed to grow with your business." },
    { title: "Speed Up Network Builds with Aviat Design", desc: "Plan faster, find tower space, and create bills of materials with Aviat Design’s real-time, intuitive tools. Accelerate your projects and reduce time-to-market effortlessly." },
    { title: "Reliable Network Solutions", desc: "Optimize your connectivity with innovative, reliable, and scalable solutions designed for modern networks. Ensure uptime and efficiency for mission-critical operations." },
    { title: "Secure Connectivity Everywhere", desc: "Protect your data and ensure secure communication with next-generation network security solutions. Safeguard your business from threats while staying connected." },
    { title: "Future-Proof Your Network", desc: "Stay ahead with scalable, cloud-ready, and sustainable solutions built for tomorrow’s challenges. Empower your growth with technology that evolves as you do." }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let vantaEffect;
    if (window.VANTA) {
      vantaEffect = window.VANTA.GLOBE({
        el: "#bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff4d4d, // optional accent color
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // ✅ cleanup on unmount
    };
  }, []);

  // Auto change content every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [content.length]);

  return (
   <div
      id="bg"
      className="relative w-full h-[70vh] md:h-[100vh] flex flex-col justify-center items-start text-white px-4 sm:px-6 md:px-12 lg:px-20 md:py-20"
    >
      <div style={{ maxWidth: "700px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
              {content[index].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed mb-6">
              {content[index].desc}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "600",
                background: "#ff4d4d",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
              
            >
              <Link href="/contact-us">
                  Request a Quote
              </Link>
          
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "8%",
          display: "flex",
          gap: "10px",
        }}
      >
        {content.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: i === index ? "#ff4d4d" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
