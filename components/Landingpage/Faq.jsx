"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What services do you provide for network infrastructure?",
    answer:
      "We provide end-to-end solutions including network design, implementation, optimization, and security. Our services cover LAN, WAN, cloud networking, and enterprise infrastructure.",
  },
  {
    question: "Do you offer 24/7 monitoring and support?",
    answer:
      "Yes, our team offers round-the-clock monitoring and proactive support to ensure your infrastructure remains secure, reliable, and optimized.",
  },
  {
    question: "Can you help migrate existing infrastructure to the cloud?",
    answer:
      "Absolutely. We specialize in cloud migration strategies, ensuring a smooth transition of your existing systems with minimal downtime.",
  },
  {
    question: "How do you ensure data security in network solutions?",
    answer:
      "We implement enterprise-grade firewalls, intrusion detection systems, and regular security audits to ensure your data and systems remain safe from threats.",
  },
  {
    question: "Do you provide customized network solutions?",
    answer:
      "Yes, we tailor every solution based on your business size, industry, and specific requirements to maximize performance and efficiency.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-black mb-12"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </h2>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`rounded-2xl border border-gray-200 transition-all duration-300 shadow-sm 
                  hover:shadow-md cursor-pointer
                  ${isOpen ? "bg-[#FFF4ED]" : "bg-white hover:bg-[#FFF4ED]"}`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-black">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-black transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
