"use client";
import {
  ArrowUpRight,
  Settings,
  ClipboardCheck,
  Headphones,
  GraduationCap,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function Markets() {
  const services = [
    {
      title: "Managed Services",
      desc: "LinkVerse provides expert managed services to host, monitor, and maintain your network and IT infrastructure 24/7, ensuring optimal performance and uptime.",
      icon: <Settings className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Project Services",
      desc: "LinkVerse delivers end-to-end project services including network design, implementation, and optimization for seamless and reliable connectivity.",
      icon: <ClipboardCheck className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Support",
      desc: "Our dedicated support team ensures your network infrastructure remains fully operational, minimizing downtime and maximizing ROI on your technology investments.",
      icon: <Headphones className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Education & Certification",
      desc: "LinkVerse training programs help build expertise in modern networking technologies, including wireless, IP/MPLS, and infrastructure management for professionals.",
      icon: <GraduationCap className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Consulting Services",
      desc: "Our consultants provide tailored guidance to plan, implement, and optimize network strategies, ensuring scalable and secure infrastructures for your business.",
      icon: <Users className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Network Security",
      desc: "Protect your network and critical infrastructure with LinkVerse’s proactive cybersecurity solutions, monitoring, and compliance-driven strategies.",
      icon: <ShieldCheck className="w-6 h-6 text-[#F96614]" />,
    },
  ];

  return (
    <section
      style={{ backgroundImage: "url('/tower.webp')" }}
      className="relative bg-contain bg-no-repeat bg-fixed bg-center py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        
        {/* Left content */}
        <div className="md:sticky md:top-28 self-start text-center md:text-left">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-[#F96614] uppercase">
            LINKVERSE SERVICES
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 sm:mt-4 leading-snug text-gray-900">
            Unlocking the Power of{" "}
            <span className="bg-gradient-to-r from-[#F96614] to-orange-700 bg-clip-text text-transparent">
              Network & Infrastructure
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From planning to security,{" "}
            <strong className="text-[#F96614]">LinkVerse</strong> delivers end-to-end
            services that transform networks into highly reliable, scalable, and
            future-ready infrastructures.
          </p>

          <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 bg-[#F96614] hover:bg-[#d45210] text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-300">
            Learn More
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#FFF8EF] p-4 sm:p-6 group relative border-l-4 border-[#F96614] pl-5 sm:pl-6 rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#F96614]/10 rounded-full animate-bounce group-hover:animate-none transition">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 group-hover:text-[#F96614] transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-black mt-2 sm:mt-3 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
