"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Problem() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <>
      <section
        style={{ backgroundImage: "url('/dot1.webp'),url('/dot2.webp')" }}
        className="relative bg-center bg-cover bg-no-repeat bg-fixed text-white px-6 py-10 md:py-20 md:px-12 overflow-hidden wave-bg"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F7F5F1]/70"></div>

        <div className="relative w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between md:gap-14">
          {/* Right Image with Stats Below */}
          <div data-aos="fade-right" className="flex-1 flex flex-col items-center md:items-end gap-10 relative">
            <Image
              width={400}
              height={400}
              src="/server2.webp"
              alt="About LinkVerse"
              className="rounded-2xl absolute left-0 "
              data-aos="zoom-in-up"
            />

            <Image
              width={400}
              height={400}
              src="/datacenter.webp"
              alt="About LinkVerse"
              className="rounded-2xl absolute top-65 "
              data-aos="zoom-in-down"
            />

            {/* ✅ Stats placed below the images */}
            <div className="hidden md:flex relative mt-[600px] flex flex-col md:flex-row items-center justify-center gap-12">
              {/* Stat 1 */}
              <div className="flex flex-col items-center" data-aos="flip-left">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="#333" strokeWidth="12" fill="none" />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#F96614"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0,440" }}
                      animate={{ strokeDasharray: "436,440" }}
                      transition={{ duration: 2 }}
                    />
                  </svg>
                  <div className="absolute text-white inset-0 flex items-center justify-center text-2xl font-bold">
                    99%
                  </div>
                </div>
                <p className="mt-4 text-[#F96614] font-semibold text-lg">Network Uptime</p>
                <p className="text-black text-sm text-center">ensured through robust infrastructure</p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center" data-aos="flip-right">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="#333" strokeWidth="12" fill="none" />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#F96614"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0,440" }}
                      animate={{ strokeDasharray: "405,440" }}
                      transition={{ duration: 2 }}
                    />
                  </svg>
                  <div className="absolute text-white inset-0 flex items-center justify-center text-2xl font-bold">
                    92%
                  </div>
                </div>
                <p className="mt-4 text-[#F96614] font-semibold text-lg">Client Satisfaction</p>
                <p className="text-black text-sm text-center">delivering reliable IT solutions</p>
              </div>
            </div>
          </div>

          {/* Left Text */}
          <div data-aos="fade-left" className="flex-1 md:text-left space-y-6">
            <p
              className="uppercase border-l-[3px] border-[#F96614] text-[#F96614] text-2xl tracking-wider font-bold pl-2"
              data-aos="fade-down"
            >
              About Us
            </p>

            <p className="md:text-xl text-black" data-aos="fade-up">
              At <strong className="text-[#F96614]">LinkVerse</strong>, we specialize in delivering
              cutting-edge networking and infrastructure solutions that empower businesses to stay
              connected, secure, and future-ready. With a team of skilled professionals and years of
              industry experience, we design, implement, and manage robust IT infrastructures that
              drive efficiency and innovation.
              <br />
              <br />
              Our expertise spans across network design, cloud integration, cybersecurity, data
              centers, structured cabling, and enterprise IT solutions, ensuring that every project
              we deliver meets the highest standards of reliability and performance.
              <br />
              <br />
              We believe technology should simplify, not complicate, your business operations.
              That’s why our approach is centered on understanding your unique needs, offering
              customized solutions, and providing ongoing support that guarantees long-term success.
            </p>

            {/* Feature Cards */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div
                className="relative bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
                data-aos="zoom-in"
              >
                <span className="absolute -left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#F96614] to-orange-500 text-white font-bold shadow-md">
                  ✓
                </span>
                <h3 className="text-black font-semibold text-xl mb-2">End-to-End Solutions</h3>
                <p className="text-black text-sm leading-relaxed">From planning to execution, we handle everything with precision.</p>
              </div>

              {/* Item 2 */}
              <div
                className="relative bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <span className="absolute -left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#F96614] to-orange-500 text-white font-bold shadow-md">
                  ✓
                </span>
                <h3 className="text-black font-semibold text-xl mb-2">Scalable Infrastructure</h3>
                <p className="text-black text-sm leading-relaxed">Designed to grow with your business and adapt to future needs.</p>
              </div>

              {/* Item 3 */}
              <div
                className="relative bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <span className="absolute -left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#F96614] to-orange-500 text-white font-bold shadow-md">
                  ✓
                </span>
                <h3 className="text-black font-semibold text-xl mb-2">Security First</h3>
                <p className="text-black text-sm leading-relaxed">Ensuring your networks and data remain secure and protected.</p>
              </div>

              {/* Item 4 */}
              <div
                className="relative bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                <span className="absolute -left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#F96614] to-orange-500 text-white font-bold shadow-md">
                  ✓
                </span>
                <h3 className="text-black font-semibold text-xl mb-2">24/7 Support</h3>
                <p className="text-black text-sm leading-relaxed">Always available to keep your business running smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
