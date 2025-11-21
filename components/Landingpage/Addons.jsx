import { Phone, Building2, Server, ShieldCheck } from "lucide-react";
import Image from "next/image";
export default function PremiumServices() {
  const services = [
    {
      icon: Phone,
      title: "IT Support 24 x 7",
      desc: "We provide round-the-clock IT support to keep your business running smoothly without interruptions. Our expert technicians handle system issues, network failures, and urgent technical problems with quick response times, ensuring reliable performance and complete peace of mind.",
    },
    {
      icon: Building2,
      title: "Office IT Relocation",
      desc: "Seamless office IT relocation services handled by a single trusted company. We manage dismantling, secure transport, reinstallation, and complete configuration of your IT infrastructure with guaranteed on-time delivery, minimal downtime, and high-quality professional support.",
    },
    {
      icon: Server,
      title: "Server Support",
      desc: "Professional server management and support solutions designed to improve business efficiency and data reliability. We use modern IT tools to monitor, maintain, secure, and optimize your servers for stable performance and long-term scalability.",
    },
    {
      icon: ShieldCheck,
      title: "IT Security",
      desc: "Advanced IT security solutions to protect your business systems, websites, and CRM applications from cyber threats. We ensure strong data protection, secure access control, and continuous monitoring for complete digital safety.",
    },
  ];

  return (

    <>
    


    <section className="w-full py-6 bg-white">

          <h1 className="text-center text-3xl md:text-6xl  mb-15 font-bold text-gray-900 ">
              IT Support Services in Delhi
            </h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">



              {/* Right Content */}
          <div>
          

            <p className="text-black leading-relaxed mb-2">
              <span className="font-semibold">We don’t just sell hardware</span> – we make sure it is truly required for your business, installed correctly, and maintained efficiently to deliver the best possible return on investment. Our goal is to provide reliable and cost-effective IT support services across Delhi that help businesses operate smoothly and stay competitive in the digital world.
            </p>

            <p className="text-black leading-relaxed ">
              When you are looking for <span className="font-semibold">Managed IT Services in Delhi</span>, our expert team is ready to support you with complete IT solutions that reduce downtime and control operational costs. As a trusted provider of <span className="font-semibold">IT Services in Delhi</span>, we serve businesses of all sizes with dedicated technical support, proactive monitoring, and timely maintenance to ensure uninterrupted performance.
            </p>

            <p className="text-black leading-relaxed">
              Our IT solutions are designed to create a hassle-free working environment by delivering high-quality <span className="font-semibold">IT Consultancy Services in Delhi</span>. We focus on simplicity, efficiency, and innovation while keeping our clients informed about improvements in their Business IT Support systems. With strong expertise, hands-on experience, and a customer-first approach, we deliver robust solutions for both simple and complex business challenges across Delhi and NCR. 
            </p>
          </div>
          {/* Left Image */}
          <div className="">
            <Image
              src="/it-infrastrucure.webp"
              alt="IT Support Services in Delhi"
              width={500}
              height={500}
              className=" object-contain"
            />
          </div>

        
        </div>
      </div>
    </section>



    <section className="w-full  mb-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        {/* <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Premium IT Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Reliable, secure, and professional IT solutions designed to support and grow your business with confidence and efficiency.
          </p>
        </div> */}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group  rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-black to-gray-800 text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <service.icon size={36} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
                {service.desc}
              </p>

              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>





    </>
  );
}
