"use client";

export const dynamic = "force-dynamic";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Formsection from "@/components/Landingpage/Formsection"
import { Eye, Gem, Target } from "lucide-react";
import { CheckCircle, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const features = [
    "Years of industry experience make us a reliable Titanium Dioxide Wholesaler.",
    "Every batch of Titanium Dioxide is tested for purity, brightness, and particle size.",
    "Maintain large inventory stocks to efficiently fulfill bulk orders.",
    "Expert guidance on dispersion, formulation, and application for best results.",
    "Serving manufacturers in paints, coatings, plastics, paper, cosmetics, and food.",
    "Personalized solutions, flexible packaging, and timely delivery.",
  ];

const tabs = [
  {
    id: "vision",
    icon: <Eye className="w-14 h-14" />,
    title: "VISION",
    color: "#F76238",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-[#F76238]">
          Our Vision as a Networking & IT Infrastructure Company
        </h2>
        <p>
          At <b>LinkVerse Networks</b>, our vision is to become a globally
          recognized provider of Networking & IT Infrastructure solutions,
          known for excellence, innovation, and reliable technology services.
          We focus on helping businesses achieve operational efficiency,
          scalability, and security through state-of-the-art IT solutions.
        </p>
        <p>
          We aim to lead the industry as a trusted IT partner, combining
          technical expertise, ethical practices, and consistent service quality
          to create value for every client we serve. Our goal is to empower
          organizations across enterprise IT, data centers, cloud services,
          cybersecurity, and telecom networks to excel in their respective
          markets.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Become a globally recognized IT Infrastructure provider, setting
            benchmarks for quality and service.
          </li>
          <li>
            Provide innovative and scalable networking solutions to meet
            evolving business needs.
          </li>
          <li>
            Ensure ethical and sustainable practices in all technology
            operations.
          </li>
          <li>
            Deliver reliable, secure, and high-performance IT infrastructure
            consistently.
          </li>
          <li>
            Support clients in optimizing IT systems and network performance
            through expert guidance.
          </li>
          <li>
            Build long-term partnerships based on trust, reliability, and
            excellence.
          </li>
        </ul>
        <p>
          As a dedicated IT solutions provider, <b>LinkVerse Networks</b>{" "}
          envisions creating lasting impact, innovation, and growth for our
          clients and the industries we serve.
        </p>
      </div>
    ),
  },
  {
    id: "mission",
    icon: <Target className="w-14 h-14" />,
    title: "MISSION",
    color: "#F76238",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-[#F76238]">
          Our Mission as a Networking & IT Infrastructure Company
        </h2>
        <p>
          At <b>LinkVerse Networks</b>, our mission is to be the most trusted IT
          Infrastructure partner, providing secure, scalable, and high-performance
          networking solutions to businesses worldwide. We are committed to
          delivering consistent service, technical expertise, and tailored IT
          solutions for every client.
        </p>
        <p>
          We strive to help organizations across enterprise IT, cloud computing,
          cybersecurity, telecom, and data center operations achieve superior
          results by implementing industry-standard solutions. Our goal is to
          combine reliability, innovation, and client-focused service in every
          engagement, ensuring long-term partnerships and business success.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Be recognized as a trusted IT Infrastructure partner for enterprises
            and organizations.
          </li>
          <li>
            Deliver secure, scalable, and high-performance networking solutions
            consistently.
          </li>
          <li>
            Provide expert guidance, technical support, and tailored IT strategies.
          </li>
          <li>
            Ensure timely project delivery and dependable IT service management.
          </li>
          <li>
            Maintain long-term partnerships by offering personalized and proactive service.
          </li>
          <li>
            Help clients optimize IT systems, network performance, and
            cybersecurity posture.
          </li>
        </ul>
        <p>
          As a dedicated IT solutions provider, <b>LinkVerse Networks</b> is
          committed to excellence, reliability, and client success, making us
          a dependable partner for all networking and IT infrastructure needs.
        </p>
      </div>
    ),
  },
  {
    id: "values",
    icon: <Gem className="w-14 h-14" />,
    title: "VALUES",
    color: "#F76238",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-[#F76238]">
          Our Core Values as a Networking & IT Infrastructure Company
        </h2>
        <p>
          At <b>LinkVerse Networks</b>, our values form the foundation of
          everything we do. We believe in trust, reliability, and innovation in
          every service we provide. Our values guide us in delivering excellent
          IT solutions and building long-term partnerships.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <b>Integrity:</b> Conducting business with honesty, transparency, and accountability.
          </li>
          <li>
            <b>Quality First:</b> Delivering networking and IT solutions that meet global standards.
          </li>
          <li>
            <b>Customer-Centric Approach:</b> Placing clients at the center of every solution.
          </li>
          <li>
            <b>Innovation:</b> Continuously improving processes and technology solutions.
          </li>
          <li>
            <b>Sustainability:</b> Operating responsibly with ethical practices in IT operations.
          </li>
          <li>
            <b>Reliability:</b> Ensuring consistent performance, uptime, and dependable service.
          </li>
          <li>
            <b>Partnership:</b> Building long-term relationships through collaboration and trust.
          </li>
        </ul>
        <p>
          Guided by these values, <b>LinkVerse Networks</b> continues to grow as
          a dependable IT Infrastructure provider, ensuring clients can always
          count on us for excellence.
        </p>
      </div>
    ),
  },
];


  return (
    <div>
{/* ===== Banner Section ===== */}
<div
  className="relative px-15 bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
  style={{
    backgroundImage: "url('/about/Network-Infrastructure-Hero.webp')",
  }}
>
  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A49]/40 via-[#0A3A49]/60 to-[#F25F3D]/30"></div>

  {/* Content */}
  <div className="relative z-10 text-white">
  
    <h1 className="text-5xl font-serif text-[#F25F3D] md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
      About Us
    </h1>
    <p className="text-white mt-4 max-w-2xl text-sm md:text-lg leading-relaxed">
      Partner with <b>LinkVerse</b>, your trusted Networking & IT
      Infrastructure partner, and get reliable, secure, and scalable solutions
      for enterprise IT, cloud, cybersecurity, and telecom networks. We help
      businesses optimize performance, enhance security, and achieve seamless
      connectivity for all their operations.
    </p>
  </div>
</div>



      {/* About Content Section */}
      <section className="relative ">
        <div className="w-full  mx-auto px-6 py-10   grid md:grid-cols-2  items-center">
          {/* Left Side - Image */}
          <div className="w-full">
            <img
              src="/about/about.png "
              alt="About Aanya Enterprise"
              className=" w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
      <div>
  <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
    Welcome to{" "}
    <span className="font-semibold text-[#F76238]">
      LinkVerse Networks
    </span>{" "}
    – Your Trusted Networking & IT Infrastructure Partner.
  </h2>

  <p className="text-lg text-black leading-relaxed ">
    At{" "}
    <span className="font-semibold text-[#F76238]">
      LinkVerse Networks
    </span>{" "}
    we take pride in being a{" "}
    <span className="font-semibold text-[#F76238]">
      leading provider of Networking & IT Infrastructure solutions
    </span>{" "}
    delivering high-quality, reliable, and scalable services to businesses across the globe. As a professional IT Infrastructure provider, we are committed to implementing solutions that meet international standards, ensuring every network, cloud deployment, and security setup maintains consistent performance, reliability, and security for all business applications.
  </p>

  <p className="text-lg text-black leading-relaxed mb-4">
    Being a trusted partner in{" "}
    <span className="font-semibold text-[#F76238]">
      Networking & IT Infrastructure
    </span>{" "}
    LinkVerse Networks understands the diverse needs of industries such as{" "}
    <span className="font-semibold text-[#F76238]">
      enterprise IT, data centers, cloud services, telecommunications, and cybersecurity
    </span>
    . Every project we deliver reflects the expertise and dedication expected from a leading IT Infrastructure provider, giving our clients confidence in their technology operations.
  </p>

  <p className="text-lg text-black leading-relaxed">
    As a dedicated IT solutions provider, we go beyond just implementing networks. LinkVerse Networks provides technical guidance, infrastructure optimization, and customized IT solutions, ensuring our clients receive maximum value from every deployment. Choosing LinkVerse Networks as your{" "}
    <span className="font-semibold text-[#F76238]">
      IT Infrastructure partner means collaborating with a company that delivers reliability, consistency, and excellence in every service engagement.
    </span>
  </p>
</div>

        </div>
      </section>

      <section className="w-full bg-[#F0F5FC] py-5 md:py-10 text-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <h5 className="text-[#F76238] font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="h-[1px] w-10 bg-[#F76238] font-serif"></span>
            Our Core Features
            <span className="h-[1px] w-10 bg-[#F76238]"></span>
          </h5>

          <h2 className="text-[20px] sm:text-[30px] md:text-[30px] leading-tight font-light text-[#0b2341] mb-6">
           We ensure robust, reliable, and secure IT and networking solutions in compliance with industry standards and best practices. Our services guarantee high performance, scalability, and safety, helping businesses achieve seamless connectivity and operational excellence across their IT infrastructure.
         
          </h2>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-center items-center border-t border-gray-200 md:pt-12 gap-10">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 px-6 ${
                  activeTab === tab.id
                    ? "scale-105 text-[#F76238]"
                    : "text-black "
                }`}
              >
                <div className="mb-4  text-4xl">{tab.icon}</div>
                <h3 className="font-bold text-xl text-center tracking-wide font-serif">{tab.title}</h3>
                {activeTab === tab.id && (
                  <div className="h-[3px] w-10 bg-[#F76238] mt-2 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl text-center mx-auto mt-12 text-black text-xl leading-relaxed animate-fadeIn">
            {tabs.find((t) => t.id === activeTab)?.content}
          </div>
        </div>
      </section>

      {/* <section
        style={{
          backgroundImage:
            "url()",
        }}
        className="bg-center bg-fixed   bg-cover py-9 md:py-20 px-6 md:px-20 relative"
      >

        <div className="absolute inset-0 bg-black/50 z-10"></div>

  
        <div className="max-w-6xl mx-auto relative z-20 text-center md:text-left">
        
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
            Who We Are – <br />{" "}
            <span className="text-[#F7C600]">
              A Trusted Titanium Dioxide Wholesaler
            </span>
          </h2>

   
          <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">
            Aanya Enterprise has established itself as a professional Titanium
            Dioxide Wholesaler with years of experience in the chemical supply
            sector. We are committed to providing high-quality Titanium Dioxide
            (TiO₂) in bulk to industries worldwide. Our dedication to quality,
            consistency, and customer satisfaction makes us a preferred partner
            for manufacturers across paints, coatings, plastics, paper,
            cosmetics, and food industries.
          </p>
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
            We focus on delivering not just products but complete solutions and
            support, ensuring our clients benefit from a trusted Titanium
            Dioxide Wholesaler who understands their industrial needs.
          </p>

    
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3  p-4 rounded-lg shadow-lg bg-white/30 transition hover:bg-yellow-500/30"
              >
                <CheckCircle className="text-[#F7C600] w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-white text-base md:text-xl">{feature}</p>
              </div>
            ))}
          </div>

   
          <p className="mt-10 text-white text-lg md:text-xl font-medium">
            As a dedicated Titanium Dioxide Wholesaler, Aanya Enterprise ensures
            consistent quality, dependable supply, and expert support for all
            Titanium Dioxide needs, making us the ideal partner for your
            business.
          </p>
        </div>
      </section> */}

      <Formsection></Formsection>

      {/* <section
        style={{
          backgroundImage:
            "url()",
        }}
        className="relative bg-fixed  bg-center bg-cover w-full pb-3 md:py-20"
      >
        <div className="absolute inset-0 bg-white/40 z-0"></div>

        <div className="max-w-7xl  mx-auto grid md:grid-cols-2 gap-5 px-6 md:px-15 items-center">
        
          <div className="flex ">
            <div className="relative">
           
              <div className="absolute -top-4 -right-4 w-full h-full rounded-xl border-4 border-yellow-400 z-0"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 z-10">
                <Image
                  src=""
                  alt="Industrial Crane"
                  title="Titanium Dioxide "
                  width={800}
                  height={800}
                  className="hidden md:block object-cover h-full w-full transform hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>

       
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#002B5B] leading-snug mb-6">
              Why Choose{" "}
              <span className="text-[#F7A400]">Aanya Enterprise</span> as Your
              Titanium Dioxide Wholesaler
            </h2>

            <p className="text-xl text-black leading-relaxed mb-6">
              <b className="text-[#002B5B]">High-Quality Titanium Dioxide:</b>{" "}
              As a reliable Titanium Dioxide Wholesaler, Aanya Enterprise
              ensures every batch of Titanium Dioxide is tested for purity,
              particle size, brightness, and dispersibility, providing
              consistent performance for all industrial applications.
            </p>

            <p className="text-xl text-black leading-relaxed mb-6">
              <b className="text-[#002B5B]">Consistent Bulk Supply:</b> We
              maintain large inventory stocks to meet both domestic and
              international bulk orders, ensuring supply and timely delivery
            </p>

            <p className="text-xl text-black leading-relaxed mb-6">
              <b className="text-[#002B5B]">Technical Expertise:</b> Our experts
              provide guidance on dispersion, formulation, and application,
              helping clients achieve exceptional results with their Titanium
              Dioxide products.
            </p>

            <p className="text-xl text-black leading-relaxed mb-6">
              <b className="text-[#002B5B]">Global Reach:</b> Aanya Enterprise
              supplies Titanium Dioxide worldwide, trusted by industries
            </p>

   
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {[
                "100% Quality Assurance",
                "Consistent Global Supply",
                "Technical Expertise",
                "Customer Satisfaction",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group transition-all duration-300"
                >
                  <div className="bg-[#F7A400]/10 p-2 rounded-full group-hover:bg-[#F7A400]/20 transition">
                    <CheckCircle2 className="text-[#F7A400] w-5 h-5" />
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-[#002B5B] transition text-base md:text-lg">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#F7A400] to-[#002B5B]" />
      </section> */}
    </div>
  );
};

export default AboutPage;
