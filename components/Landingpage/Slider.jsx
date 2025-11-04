"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";



/* Carousel data */
const industries = [
  { image: "/1.webp", name: "Agriculture"  },
  { image: "/2.webp", name: "Oil & Gas Industry" },
  { image: "/3.webp", name: "Plastics & Polymers" },
  { image: "/4.webp", name: "Building And Homes" },

];

const ServicesCarousel = () => {


  return (
    <section className="py-7 md:py-10  bg-zinc-100">
      {/* Heading */}
      <div
        className="text-center max-w-3xl mx-auto mb-16 px-4"
        data-aos="fade-up"
      >
       

        <h2 className="relative inline-block font-bold text-[#d8450b] text-xl md:text-3xl  leading-snug group capitalize">
          Delivering reliable solutions across diverse industries with unmatched quality and expertise.
          <br />
      
        </h2>
      
      </div>

      {/* Carousel */}
      <div className="md:max-w-6xl mx-auto ">
        <Swiper
          modules={[Navigation, Autoplay]}
          
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {industries.map((service, index) => (
            <SwiperSlide key={index}>
              {/* Make each card clickable */}
              <div >
                <div className="relative h-[420px] sm:h-[440px] md:h-[460px] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-xl group ">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-300 group-hover:bg-black/20" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#c16118] via-[#7DAADA]/30 to-transparent opacity-90 group-hover:h-full transition-all duration-500 z-20" />
                  {/* Title */}
                  {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 text-white text-center transition-all duration-500 group-hover:bottom-18">
                    <h3 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
                      {service.name}
                    </h3>
                  </div> */}
              
                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-orange-400 transition-all duration-500 z-50 pointer-events-none" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesCarousel;
