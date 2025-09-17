'use client'

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
const content = [
  {
    title: "Access Products for Any Network, Any Need",
    desc: "Achieve flexibility and scalability with Aviat’s versatile access products, built to adapt to your evolving network. Experience unmatched performance designed to grow with your business."
  },
  {
    title: "Speed Up Network Builds with Aviat Design",
    desc: "Plan faster, find tower space, and create bills of materials with Aviat Design’s real-time, intuitive tools. Accelerate your projects and reduce time-to-market effortlessly."
  },
  {
    title: "Reliable Network Solutions",
    desc: "Optimize your connectivity with innovative, reliable, and scalable solutions designed for modern networks. Ensure uptime and efficiency for mission-critical operations."
  },
  {
    title: "Secure Connectivity Everywhere",
    desc: "Protect your data and ensure secure communication with next-generation network security solutions. Safeguard your business from threats while staying connected."
  },
  {
    title: "Future-Proof Your Network",
    desc: "Stay ahead with scalable, cloud-ready, and sustainable solutions built for tomorrow’s challenges. Empower your growth with technology that evolves as you do."
  }
];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const setVanta = () => {
      if (window.VANTA) {
        window.VANTA.GLOBE({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      }
    };
    setVanta();
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
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        position: "relative",
        color: "#fff",
        padding: "0 8%",
      }}
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
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                fontWeight: "700",
                marginTop: "50px",
                whiteSpace: "normal",
                wordWrap: "break-word",
                lineHeight: "1.3",
              }}
            >
              {content[index].title}
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                opacity: 0.9,
                lineHeight: "1.6",
                maxWidth: "600px",
                marginBottom: "1.5rem",
              }}
            >
              {content[index].desc}
            </p>
            {/* ✅ Request a Quote Button */}
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
              onClick={() => alert("Redirect to Request a Quote Page")}
            >
              Request a Quote
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
