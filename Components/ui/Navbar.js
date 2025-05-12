'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Create an array of page names and their corresponding routes
  const links = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about-us" },
    { name: "Our Products", route: "/products" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav 
        className={`${
          scrolled 
            ? "bg-[#190000]/95 shadow-lg backdrop-blur-md py-2" 
            : "bg-[#190000] py-4"
        } fixed top-0 w-full z-50 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Image must be in the public folder */}
            <div className="relative w-12 h-12">
  <Image
    src="/logo.png" // Simplify to the root of public folder
    alt="Classic Veneer"
    width={48}
    height={48}
    className="object-contain"
    priority
  />
</div>
            <span className="text-2xl font-bold text-[#F1E2C6]">
              Classic Veneer
            </span>
          </Link>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex space-x-1 items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                className={`px-4 py-2 rounded-lg transition-all duration-300 text-lg ${
                  pathname === link.route
                    ? "text-[#F1E2C6] font-bold bg-[#7B3F00]/80"
                    : "text-[#D1B49D] hover:bg-[#3E2A47]/30 hover:text-[#F1E2C6]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mail Link with Icon */}
            <a
              href="mailto:sales@classicveneer.org"
              className="ml-2 px-4 py-2 bg-[#7B3F00] text-[#F1E2C6] rounded-lg hover:bg-[#8B4F10] transition-all duration-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7 5 7-5M3 8v8m7 5v-5m7 5V8"
                />
              </svg>
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-[#F1E2C6] p-2 rounded-md hover:bg-[#3E2A47]/30 focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-[#3E2A47] text-[#F1E2C6] p-6 space-y-4 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                className={`block text-lg py-2 px-4 rounded-md ${
                  pathname === link.route
                    ? "bg-[#7B3F00]/80 text-[#F1E2C6] font-bold"
                    : "text-[#F1E2C6] hover:bg-[#7B3F00]/40"
                }`}
                onClick={toggleMenu} // Close menu when an item is clicked
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="mailto:sales@classicveneer.org" 
              className="text-lg py-2 px-4 rounded-md bg-[#7B3F00] text-[#F1E2C6] mt-4 flex items-center"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7 5 7-5M3 8v8m7 5v-5m7 5V8"
                />
              </svg>
              Contact Us
            </a>
          </motion.div>
        )}
      </nav>

      {/* Add padding to compensate for navbar height */}
      <div className={`${scrolled ? 'h-20' : 'h-24'} transition-all duration-300`}></div>
    </>
  );
};

export default Navbar;