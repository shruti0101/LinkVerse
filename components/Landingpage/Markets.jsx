"use client";
import { ArrowUpRight, Settings, ClipboardCheck, Headphones, GraduationCap, Users, ShieldCheck } from "lucide-react";

export default function Markets() {
  const services = [
    {
      title: "Managed Services",
      desc: "We have the proven expertise to host, monitor, and manage your wireless transport infrastructure around the clock.",
      icon: <Settings className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Project Services",
      desc: "Aviat offers a wide range of project-based services to help you manage your network for optimal performance and reliability while improving operational efficiency.",
      icon: <ClipboardCheck className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Support",
      desc: "Aviat Networks offers industry-leading maintenance and support services focused on optimizing the investments you have made in your network infrastructure.",
      icon: <Headphones className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Education & Certification",
      desc: "Aviat training helps build a strong foundation in microwave and IP/MPLS networking concepts, enabling students to pursue successful careers in converged microwave and IP routing technologies.",
      icon: <GraduationCap className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Consulting Services",
      desc: "Our experts provide tailored consulting to optimize your wireless strategies, from planning to implementation and beyond.",
      icon: <Users className="w-6 h-6 text-[#F96614]" />,
    },
    {
      title: "Network Security",
      desc: "Protect your infrastructure with advanced security solutions and proactive monitoring against modern cyber threats.",
      icon: <ShieldCheck className="w-6 h-6 text-[#F96614]" />,
    },
  ];

  return (
    <section style={{backgroundImage:"url('/tower.png')"}} className="relative bg-contain bg-no-repeat bg-fixed bg-center py-19">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left content - sticky */}
       <div className="md:sticky md:top-28 self-start">
  <span className="text-sm font-semibold tracking-[0.15em] text-[#F96614] uppercase">
    AVIAT SERVICES
  </span>

  <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 leading-snug text-gray-900">
    Unlocking the Power of{" "}
    <span className="bg-gradient-to-r from-[#F96614] to-orange-700 bg-clip-text text-transparent">
      Wireless Infrastructure
    </span>
  </h2>

  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
    From strategy to security, we deliver{" "}
    <span className="font-semibold text-[#F96614]">end-to-end services</span>  
    that transform networks into engines of reliability, scalability,  
    and long-term growth.
  </p>

  <button className="mt-8 inline-flex items-center gap-3 bg-[#F96614] hover:bg-[#d45210] text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300">
    Learn More
    <ArrowUpRight className="w-5 h-5" />
  </button>
</div>


        {/* Right content - scrolls */}
        <div className="flex flex-col gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#FFF8EF] p-4 group relative border-l-4  border-[#F96614] pl-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3">

                <div>
                    <div className="w-10 h-10 flex items-center justify-center bg-[#F96614]/10 rounded-full animate-bounce group-hover:animate-none transition">
                      {service.icon}
                    </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#F96614] transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-lg text-black mt-3 leading-relaxed">
                {service.desc}
              </p>
         
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
