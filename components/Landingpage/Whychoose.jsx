"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaCloud, FaNetworkWired, FaUsersCog, FaShieldAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative py-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      {/* Decorative wire image */}
      <img
        className="absolute top-0 left-0 -rotate-180 opacity-30 w-32 sm:w-40 md:w-64 lg:w-80"
        src="/wire.png"
        alt="decor"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        {/* Left side - Images */}
        <div className="flex justify-center order-1 md:order-none mb-6 md:mb-0" data-aos="fade-right">
          <Image
            width={550}
            height={500}
            src="/it-infrastrucure.webp"
            alt="Network Infrastructure"
            className="rounded-xl drop-shadow-xl w-72 sm:w-80 md:w-full max-w-md md:max-w-lg object-contain"
          />
        </div>

        {/* Right side - Content */}
        <div data-aos="fade-left">
          <p className="uppercase mb-3 sm:mb-5 border-l-[3px] border-[#F96614] text-[#F96614] text-base sm:text-lg md:text-xl tracking-wider font-bold pl-2">
            Why Choose Us
          </p>

          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Why You Should Choose <br /> Our Network & Infrastructure Services
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base md:text-base">
            We provide cutting-edge network and infrastructure solutions designed
            to ensure reliability, scalability, and security for your business.
            Our team delivers tailored solutions with the most cost-effective
            approach.
          </p>

          {/* Highlights */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FFF4ED] rounded-md text-[#F96614] font-medium text-xs sm:text-sm flex items-center gap-2">
              ✔ High-Speed Connectivity
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FFF4ED] rounded-md text-[#F96614] font-medium text-xs sm:text-sm flex items-center gap-2">
              ✔ Secure Infrastructure
            </span>
          </div>

          {/* Services List */}
          <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
            {[
              {
                icon: FaNetworkWired,
                title: "Advanced Networking",
                desc: "Robust LAN, WAN, and cloud networking solutions to keep your business connected seamlessly.",
              },
              {
                icon: FaCloud,
                title: "Cloud Infrastructure",
                desc: "Scalable cloud systems to optimize resources and reduce costs while ensuring uptime.",
              },
              {
                icon: FaUsersCog,
                title: "Expert Support Team",
                desc: "Certified professionals to manage and monitor your IT infrastructure 24/7.",
              },
              {
                icon: FaShieldAlt,
                title: "Security & Compliance",
                desc: "End-to-end protection of your data and networks with compliance to global standards.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <item.icon className="text-[#F96614] text-2xl sm:text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed mt-1 sm:mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
