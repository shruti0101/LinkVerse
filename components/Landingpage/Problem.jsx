"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Problem() {
  const stats = [
    {
      label: "Rise in exploited zero-day vulnerabilities (YoY, 2023)",
      value: 56,
    },
    {
      label: "Growth in ransomware incidents worldwide (YoY, 2023)",
      value: 73,
    },
    {
      label: "Increase in reported data breaches & leaks (YoY, 2023)",
      value: 56,
    },
  ];

  return (
    <>
      <section
        style={{ backgroundImage: "url('/dot1.png'),url('/dot2.png')" }}
        className="relative bg-center bg-cover bg-no-repeat bg-fixed text-white px-6 py-20 md:px-12 overflow-hidden wave-bg"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F7F5F1]/70"></div>

        <div className="relative max -w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <p className="uppercase text-[#F96614] tracking-wider font-semibold">
              The Good News
            </p>
            <h2 className="text-4xl text-black md:text-5xl font-extrabold leading-tight">
              A new <span className="text-[#F96614]">AI-driven era</span>{" "}
              is here
            </h2>
            <p className="text-lg text-black">
              Artificial Intelligence is transforming industries — automating
              tasks, accelerating decisions, and driving <strong>innovation at unprecedented scale</strong>.
              Enterprises adopting GenAI are witnessing faster product
              development, cost savings, and stronger customer engagement.
            </p>
          </div>

          {/* Right Stats Circles */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#333"
                    strokeWidth="12"
                    fill="none"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#F96614"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0,440" }}
                    animate={{ strokeDasharray: "342,440" }} // 78%
                    transition={{ duration: 2 }}
                  />
                </svg>
                <div className="absolute text-black inset-0 flex items-center justify-center text-2xl font-bold">
                  78%
                </div>
              </div>
              <p className="mt-4 text-[#F96614] font-semibold text-lg">
                AI Usage Surge
              </p>
              <p className="text-black text-sm text-center">
                growth in enterprise adoption
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#333"
                    strokeWidth="12"
                    fill="none"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#F96614"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0,440" }}
                    animate={{ strokeDasharray: "414,440" }} // 94%
                    transition={{ duration: 2 }}
                  />
                </svg>
                <div className="absolute text-black inset-0 flex items-center justify-center text-2xl font-bold">
                  94%
                </div>
              </div>
              <p className="mt-4 text-[#F96614] font-semibold text-lg">
                Development Focus
              </p>
              <p className="text-black text-sm text-center">
                enterprises exploring GenAI solutions
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mt-16">
          {/* Left Stats */}
          <div className="flex-1 flex flex-col space-y-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-sm md:text-lg font-medium text-black mb-2">
                  {stat.label}
                </p>
                <div className="relative h-4 bg-transparent rounded-full overflow-hidden">
                  {/* Background gradient bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000] via-[#F96614] to-[#F96614] opacity-80"></div>

                  {/* Animated fill bar */}
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F96614] to-[#F96614]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  ></motion.div>
                </div>
                {/* Value */}
                <p className="mt-2 text-2xl text-black font-bold">{stat.value}%</p>
              </div>
            ))}
          </div>

          {/* Right Text */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4">
            <p className="uppercase text-[#F96614] tracking-wider font-semibold">
              The Bad News
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-snug">
              Cybercriminals are <br />
              weaponizing AI to <br />
              outpace defenses.
            </h2>
            <p className="text-lg text-black">
              The same technologies empowering businesses are also fueling{" "}
              <strong>faster, more sophisticated cyberattacks</strong>.  
              Zero-day exploits, ransomware campaigns, and large-scale breaches
              are rising at alarming rates — leaving unprepared organizations
              vulnerable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
