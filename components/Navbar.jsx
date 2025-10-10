"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all py-4  duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 py-8 text-gray-900 shadow-lg"
          : "bg-transparent text-white "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={scrolled ? "/logo-dark.webp" : "/logo-white.webp"} // ✅ Switch logos
              width={170}
              height={100}
              alt="Logo"
              className="object-cover  cursor-pointer transition-all duration-500"
            />
          </Link>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-10 font-bold text-xl">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative transition-all duration-500 hover:-translate-y-2"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-start gap-4">
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full shadow-md transition font-medium"
          >
            <MessageCircle className="w-4 h-5" />
            WhatsApp Now
          </Link>
          <Link
            href="tel:+911234567890"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow-md transition font-medium"
          >
            <Phone className="w-4 h-5" />
            Call Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-red-600 hover:bg-red-700 transition w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden ${
            scrolled
              ? "backdrop-blur-md bg-white/90 text-gray-900"
              : "bg-black/90 text-white"
          } flex flex-col space-y-6 py-6 px-6 text-lg font-medium`}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 pt-4">
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full shadow-md transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </Link>
            <Link
              href="tel:+911234567890"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow-md transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
