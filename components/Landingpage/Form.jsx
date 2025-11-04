"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PopupForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "network-design", name: "Network Design & Architecture" },
    { id: "cloud-infrastructure", name: "Cloud Infrastructure" },
    { id: "data-center", name: "Data Center Solutions" },
    { id: "cybersecurity", name: "Cybersecurity Services" },
    { id: "managed-it", name: "Managed IT Support" },
    { id: "wireless-solutions", name: "Wireless & Mobility Solutions" },
    { id: "structured-cabling", name: "Structured Cabling" },
    { id: "network-monitoring", name: "Network Monitoring & Optimization" },
    { id: "voip-solutions", name: "VoIP & Unified Communications" },
    { id: "disaster-recovery", name: "Disaster Recovery Solutions" },
  ];

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[3000] overflow-y-auto">
      <div className="relative bg-white max-w-xs  md:max-w-lg  p-5 sm:p-10 rounded-lg shadow-lg ">
        {/* Small Icon (Top-left) */}
        <Image
          src="/form.webp"
          alt="Popup Image"
          width={63}
          height={55}
          className="hidden md:block absolute left-0 top-0 bottom-0 z-100  "
        />

        {/* Close button */}
        <button
          className="absolute cursor-pointer top-3 right-3 text-gray-600 hover:text-black"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Form Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
  Get Your <span className="text-[#F96614]">Free Quote Today!</span>
</h2>
<p className="text-xs sm:text-sm text-black mb-4 text-center z-200">
  Looking for reliable <b>Networking & IT Infrastructure Solutions</b>? 
  Share your requirements and get the best customized quote — fast, secure, and hassle-free.
</p>


        {/* Form */}
        <form
          action="https://formsubmit.co/shruti@gmail.com"
          method="POST"
          className="space-y-2 md:ml-3"
        >
          <input type="hidden" name="_sponsor" value="false" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Enquiry from Website" />
           <input type="hidden" name="_nosponsor"  value="false"/>
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out! We will get back to you shortly."
          />  
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_cc" value="shrutiguptabhu@gmail.com" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
          />

          {/* Mobile */}
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No."
            minLength={10}
            maxLength={10}
            pattern="[0-9] {10}"
            required
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
          />

          {/* Select Machine */}
          <select
            name="machine"
            required
            className="w-full p-3 rounded-md bg-[#F96614] border border-gray-300 text-sm sm:text-base"
          >
            <option value="">Select Product</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message for us..."
            rows="3"
            className="w-full p-3 rounded-md bg-[#FFF3E0] border border-gray-300 text-sm sm:text-base"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Send My Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
