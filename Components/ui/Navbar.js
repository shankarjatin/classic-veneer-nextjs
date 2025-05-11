'use client';
import React, { useState } from "react";
import Link from "next/link"; // Import Link from next/link

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Create an array of page names and their corresponding routes
  const links = [
    { name: "Home", route: "/" },
    { name: "About US", route: "/about-us" },
    { name: "Our Products", route: "/products" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#190000] shadow-lg p-4 fixed top-0 w-full z-50 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo Placeholder */}
          <h1 className="text-2xl font-bold text-[#F1E2C6]">
            Classic Veneer
          </h1>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                className={`${
                  link.name === ""
                    ? "text-[#F1E2C6] font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                    : "text-[#D1B49D]"
                } hover:text-soft-sand transition text-lg`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mail Link with Icon */}
            <a
              href="mailto:your-email@example.com"
              className="text-[#D1B49D] hover:text-soft-sand transition text-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
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
            <button className="text-[#F1E2C6] focus:outline-none" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#3E2A47] text-[#F1E2C6] p-4 space-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                className="block text-lg"
              >
                {link.name}
              </Link>
            ))}
            <a href="mailto:your-email@example.com" className="block text-lg">
              Contact Us
            </a>
          </div>
        )}
      </nav>

      {/* Add padding to compensate for navbar height */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;