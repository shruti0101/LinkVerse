"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronDown,
} from "lucide-react";

const services = [
  { id: "network-design", name: "Network Design & Architecture" },
  { id: "cloud-services", name: "Cloud Infrastructure" },
  { id: "data-centers", name: "Data Center Solutions" },
  { id: "cybersecurity", name: "Cybersecurity Services" },
  { id: "managed-it", name: "Managed IT Support" },
  { id: "wireless-solutions", name: "Wireless & Mobility" },
  { id: "structured-cabling", name: "Structured Cabling" },
  { id: "network-monitoring", name: "Network Monitoring" },
  { id: "voip-solutions", name: "VoIP & Unified Communications" },
  { id: "disaster-recovery", name: "Disaster Recovery Solutions" },
];

const Footer = () => {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <footer
      style={{ backgroundImage: "url('/footer.webp')" }}
      className="relative bg-cover bg-center text-gray-300 pt-14 pb-8"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D33F00] via-orange-400 to-[#D33F00]"></div>
      <div className="absolute inset-0 bg-[url('/patterns/noise.webp')] opacity-15 mix-blend-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1: Logo + About */}
          <div>
            <Image
              src="/logo-white.webp"
              alt="Logo"
              width={180}
              height={50}
              className="mb-5 drop-shadow-lg"
            />

            <p className="text-sm text-white leading-relaxed mb-4">
              At LinkVerse Technology, we specialize in delivering end-to-end
              networking and IT infrastructure solutions. From enterprise-grade
              connectivity to secure cloud and cybersecurity services, we help
              businesses stay connected, secure, and future-ready.
            </p>

            <a
              href="tel:+917636465545"
              className="flex items-center gap-2 mb-4 hover:scale-105 transition"
            >
              <Phone className="w-5 h-5 text-[#DA4B01]" />
              <span className="text-[16px] font-semibold underline">
                +91 76364 65545
              </span>
            </a>

            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-7 h-7 text-[#DA4B01]" />
              <p>
                4A, S-Block, Tech Park, Cyber City,
                <br />
                New Delhi – 110059
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a href="mailto:info@linkverse.com">
                <Mail className="w-5 h-5 text-[#DA4B01] hover:scale-110 transition" />
              </a>
              <a href="tel:+917636465545">
                <Phone className="w-5 h-5 text-[#DA4B01] hover:scale-110 transition" />
              </a>
              <a href="#" target="_blank">
                <Facebook className="w-5 h-5 hover:text-[#DA4B01] hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="#" target="_blank">
                <Instagram className="w-5 h-5 hover:text-[#DA4B01] hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="#" target="_blank">
                <Youtube className="w-5 h-5 hover:text-[#DA4B01] hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="#" target="_blank">
                <Linkedin className="w-5 h-5 hover:text-[#DA4B01] hover:scale-110 transition cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:hidden">
            <button
              className="flex justify-between items-center w-full text-white font-semibold mb-2"
              onClick={() => setShowQuickLinks(!showQuickLinks)}
            >
              Quick Links <ChevronDown className={`transition-transform ${showQuickLinks ? "rotate-180" : ""}`} />
            </button>
            {showQuickLinks && (
              <ul className="pl-2 space-y-2">
                <li><Link href="/" className="hover:text-[#DA4B01]">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-[#DA4B01]">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#DA4B01]">Services</Link></li>
                <li><Link href="/blogs" className="hover:text-[#DA4B01]">Blogs</Link></li>
                <li><Link href="/contact-us" className="hover:text-[#DA4B01]">Contact Us</Link></li>
              </ul>
            )}
          </div>
          <div className="hidden md:block md:ml-8">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-md">
              <li><Link href="/" className="hover:text-[#DA4B01]">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-[#DA4B01]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#DA4B01]">Services</Link></li>
              <li><Link href="/blogs" className="hover:text-[#DA4B01]">Blogs</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#DA4B01]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="md:hidden">
            <button
              className="flex justify-between items-center w-full text-white font-semibold mb-2"
              onClick={() => setShowServices(!showServices)}
            >
              Our Services <ChevronDown className={`transition-transform ${showServices ? "rotate-180" : ""}`} />
            </button>
            {showServices && (
              <ul className="pl-2 space-y-2">
                {services.map((srv) => (
                  <li key={srv.id}>
                    <Link href="/services" className="hover:text-[#DA4B01]">{srv.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="hidden md:block">
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm uppercase">
              {services.map((srv) => (
                <li key={srv.id}>
                  <Link href="/services" className="hover:text-[#DA4B01]">
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Certificate */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-[#FAAC18] font-semibold text-lg mb-4">
              Certified Excellence
            </h3>
            <Image
              src="/trustseal.webp"
              alt="Certification"
              width={120}
              height={120}
              className="rounded-lg shadow-lg hover:scale-105 transition"
            />
            <p className="text-sm leading-relaxed mt-4">
              ISO & globally recognized certifications that validate our
              expertise in delivering secure, reliable, and scalable networking
              and IT infrastructure solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-white">
        © 2025 LinkVerse Technology, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
