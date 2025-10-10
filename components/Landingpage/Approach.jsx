"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Settings, Cloud, Activity } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: CheckCircle,
    title: "Identify",
    description:
      "Spot legacy systems or outdated hardware that reduce performance, and find bottlenecks that need upgrading.",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    icon: Settings,
    title: "Build",
    description:
      "Design a strong, secure network foundation and migrate from traditional data centers to the Cloud for better integration, security, and performance.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Cloud,
    title: "Secure",
    description:
      "Adopt zero-trust measures like monitoring, patching, authentication, encryption, and firewalls to safeguard your data and assets.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Activity,
    title: "Monitor",
    description:
      "Track network activity in real time to spot threats, performance bottlenecks, and prevent downtime in mission-critical systems.",
    gradient: "from-red-400 to-orange-500",
  },
];

export default function OurApproach() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-orange-50 py-16 overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Our Approach
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl mx-auto text-center text-gray-800 text-base sm:text-lg mb-8 px-4"
        >
          Our highly certified and experienced network architects and engineers
          assess your current environment, identify outdated and underperforming
          network topologies, and create a robust and secure networking solution
          to meet your business goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div
            className="flex justify-center order-1 md:order-none"
            data-aos="fade-right"
          >
            <Image
              src="/robo.webp"
              alt="Our Approach"
              width={400}
              height={400}
              className="hidden md:block drop-shadow-2xl rounded-2xl w-64 sm:w-80 md:w-[400px] object-contain"
            />
          </div>

          {/* Right Side - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-5 sm:p-6 border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
