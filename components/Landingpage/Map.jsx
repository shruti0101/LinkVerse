import React from "react";
import Link from "next/link";

const Map = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: "url(/globee.png)" }}
        className="bg-center bg-fixed h-[80vh] bg-cover w-full  relative flex items-center justify-center"
      >
     

        {/* CTA Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Get in touch with us today and let’s discuss how we can support your
            next project.
          </p>
          <Link href="/contact-us">
            <button className="bg-[#FAAC18] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Map;
