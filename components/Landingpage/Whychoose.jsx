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
    <section className="relative py-12 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      {/* Decorative wire image */}
      <img
        className="absolute top-0 left-0 -rotate-180 opacity-40 w-40 md:w-64 lg:w-80"
        src="/wire.png"
        alt="decor"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Images */}
        <div className="relative flex justify-center" data-aos="fade-right">
          <Image
            width={550}
            height={500}
            src="/it-infrastrucure.png"
            alt="Network Infrastructure"
            className="rounded-xl drop-shadow-xl w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Right side - Content */}
        <div data-aos="fade-left">
          <p className="uppercase mb-5 border-l-[3px] border-[#F96614] text-[#F96614] text-lg md:text-xl tracking-wider font-bold pl-2">
            Why Choose Us
          </p>

          <h2 className="mt-2 text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Why You Should Choose <br /> Our Network & Infrastructure Services
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
            We provide cutting-edge network and infrastructure solutions designed
            to ensure reliability, scalability, and security for your business.
            Our team delivers tailored solutions with the most cost-effective
            approach.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#FFF4ED] rounded-md text-[#F96614] font-medium text-sm md:text-base flex items-center gap-2">
              ✔ High-Speed Connectivity
            </span>
            <span className="px-4 py-2 bg-[#FFF4ED] rounded-md text-[#F96614] font-medium text-sm md:text-base flex items-center gap-2">
              ✔ Secure Infrastructure
            </span>
          </div>

          {/* Services List */}
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
              <FaNetworkWired className="text-[#F96614] text-2xl md:text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Advanced Networking</h3>
                <p className="text-black text-sm md:text-base">
                  Robust LAN, WAN, and cloud networking solutions to keep your
                  business connected seamlessly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <FaCloud className="text-[#F96614] text-2xl md:text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Cloud Infrastructure</h3>
                <p className="text-black text-sm md:text-base">
                  Scalable cloud systems to optimize resources and reduce costs
                  while ensuring uptime.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <FaUsersCog className="text-[#F96614] text-2xl md:text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Expert Support Team</h3>
                <p className="text-black text-sm md:text-base">
                  Certified professionals to manage and monitor your IT
                  infrastructure 24/7.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <FaShieldAlt className="text-[#F96614] text-2xl md:text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Security & Compliance</h3>
                <p className="text-black text-sm md:text-base">
                  End-to-end protection of your data and networks with compliance
                  to global standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
