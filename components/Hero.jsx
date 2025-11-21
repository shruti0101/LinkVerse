"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  const content = [
{ 
  title: "IT Support & IT Solutions Company in India", 
  desc: "We provide complete IT support and reliable IT solutions for businesses of all sizes across India. Our team is always ready to help you anytime, anywhere, for any technical issue or IT requirement without hassle." 
},

{ 
  title: "Onsite IT Engineers", 
  desc: "Our experienced and qualified IT engineers visit your location to fix problems, install systems, and ensure your IT setup runs smoothly with quick response and professional service." 
},

{ 
  title: "Office IT Setups", 
  desc: "We handle everything related to office IT setups including networking, system installation, configuration, and ongoing support, giving you all IT services conveniently under one roof." 
},



   

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
              Contact Us
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
