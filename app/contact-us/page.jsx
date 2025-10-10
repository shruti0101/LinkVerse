"use client";
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="relative px-4 sm:px-6 md:px-12 bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/about/Network-Infrastructure-Hero.webp')",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A49]/40 via-[#0A3A49]/60 to-[#F25F3D]/30"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-extrabold tracking-tight drop-shadow-lg text-[#F25F3D]">
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Partner with <b>LinkVerse</b>, your trusted Networking & IT
            Infrastructure partner, and get reliable, secure, and scalable
            solutions for enterprise IT, cloud, cybersecurity, and telecom
            networks. We help businesses optimize performance, enhance security,
            and achieve seamless connectivity for all their operations.
          </p>
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <section className="w-full bg-gradient-to-b from-white to-[#F6DB9C] py-10 sm:py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">
          {/* Left Side - Form */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#002B5B] mb-6 md:mb-8 leading-snug text-center md:text-left">
              Let’s Connect and Build Your Network
            </h2>

            <form className="space-y-4 sm:space-y-5">
              {["Your Name", "Your Email", "Phone Number", "Company Name", "Subject"].map(
                (placeholder, i) => (
                  <input
                    key={i}
                    type={placeholder.includes("Email") ? "email" : "text"}
                    placeholder={placeholder}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 sm:py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F86613] transition shadow-sm hover:shadow-md text-sm sm:text-base"
                  />
                )
              )}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 sm:py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F86613] transition shadow-sm hover:shadow-md text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-[#F86613] to-[#d7540e] hover:from-[#d7540e] hover:to-[#F86613] transition text-white font-semibold py-3 px-6 sm:px-10 rounded-lg shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="md:pl-0 lg:pl-10 mt-10 md:mt-0">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-medium text-center md:text-left">
              <span className="block text-[#002B5B] text-lg sm:text-xl md:text-3xl font-extrabold mb-3">
                Reach Out to LinkVerse Networks for Tailored{" "}
                <span className="text-[#F86613]">Networking & IT Infrastructure Solutions</span>
              </span>
              <span className="block mb-3 text-gray-800">
                Whether you need <b>Enterprise Networking</b>, <b>Cloud Infrastructure</b>, <b>Cybersecurity Services</b>, or <b>Managed IT Support</b> – <span className="text-[#F86613] font-semibold">we deliver scalable and secure solutions!</span>
              </span>
              <span className="block text-gray-600">
                Planning a new IT project or upgrading your existing infrastructure? Our experts provide guidance and customized solutions. Fill out the form, and our team will respond within <span className="text-[#F86613] font-semibold">24 hours.</span>
              </span>
            </p>

            {/* Contact Items */}
            <div className="space-y-4 sm:space-y-6">
              {/* Address */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group">
                <div className="bg-[#F86613]/10 p-3 sm:p-4 rounded-xl group-hover:scale-105 transition flex-shrink-0">
                  <MapPin className="text-[#F86613] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#F86613] mb-1">
                    Address:
                  </h4>
                  <p className="text-black text-sm sm:text-base md:text-lg leading-snug">
                    4A, S-Block, Tech Park, Cyber City, New Delhi – 110059, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group">
                <div className="bg-[#F86613]/10 p-3 sm:p-4 rounded-xl group-hover:scale-105 transition flex-shrink-0">
                  <Phone className="text-[#002B5B] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#F86613] mb-1">
                    Phone:
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-black text-sm sm:text-base md:text-lg leading-snug">
                    <a href="tel:+917636465545">+91-76364 65545</a>
                    <a href="tel:+919876543210">+91-98765 43210</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group">
                <div className="bg-[#F86613]/10 p-3 sm:p-4 rounded-xl group-hover:scale-105 transition flex-shrink-0">
                  <Mail className="text-[#002B5B] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#F86613] mb-1">
                    Email:
                  </h4>
                  <p className="text-black text-sm sm:text-base md:text-lg leading-snug break-words">
                    sales@linkverse.com <br />
                    support@linkverse.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#F86613]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-6 right-6 w-40 h-40 sm:w-56 sm:h-56 bg-[#002B5B]/10 rounded-full blur-3xl"></div>

        {/* Map */}
        <div className="w-full h-[250px] sm:h-[350px] md:h-[550px] overflow-hidden mt-8 sm:mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7600213988226!2d77.2311174149927!3d28.550102182453842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58a36d9b0d5%3A0x118359296134aace!2sTech%20Park%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
