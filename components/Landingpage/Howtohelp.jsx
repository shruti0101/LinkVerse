"use client";
import { Phone, Mail, BookOpen } from "lucide-react";
import Veil from "@/components/utils/Veil";

const helpOptions = [
  {
    title: "Contact Support",
    desc: "Get in touch with our team for quick assistance.",
    icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
  },
  {
    title: "Email Us",
    desc: "Send us your queries, we’ll reply within 24 hours.",
    icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
  },
  {
    title: "Knowledge Base",
    desc: "Browse articles, guides and FAQs to solve issues yourself.",
    icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
  },
];

export default function HelpSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden text-white">
      {/* Veil background */}
      <div className="absolute inset-0 z-0">
        <Veil uBgColor={[0.137, 0.082, 0.235]} hueShift={40} />
      </div>

      {/* Content above veil */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          How can we help today?
        </h2>
        <p className="text-gray-200 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed">
          Choose an option below to quickly get the support you need.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {helpOptions.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 
                         border border-white/20 shadow-lg hover:shadow-2xl 
                         hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
