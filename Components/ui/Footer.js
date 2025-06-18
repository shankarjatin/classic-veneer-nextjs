'use client';
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#190000] text-[#F1E2C6]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo.png"
                  alt="Classic Veneer"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold text-[#F1E2C6]">Classic Veneer SARL</span>
            </div>
            <p className="text-base leading-6 text-gray-300">
              Offering high-quality plywood that's built to last. Explore our premium products and join our sustainable journey.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#7B3F00] h-5 w-5 mr-3" />
                <span className="text-gray-300">Plot-C-15G B.P 1024 – Libreville, GSE 27  
Gabon Tel </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#7B3F00] h-5 w-5 mr-3" />
                <span className="text-gray-300">+241-066482507</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#7B3F00] h-5 w-5 mr-3" />
                <a href="mailto:sales@classicveneer.org" className="text-gray-300 hover:text-orange-500">
                  sales@classicveneer.org
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-lg leading-6 font-medium text-[#F1E2C6]">Company</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about-us" className="text-base text-gray-300 hover:text-orange-500">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-base text-gray-300 hover:text-orange-500">
                      Our Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg leading-6 font-medium text-[#F1E2C6]">Resources</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#blog" className="text-base text-gray-300 hover:text-orange-500">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-base text-gray-300 hover:text-orange-500">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-lg leading-6 font-medium text-[#F1E2C6]">Connect</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 flex items-center"
                    >
                      <FaLinkedin className="h-5 w-5 mr-2" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.instagram.com/classic_veneer_sarl/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 flex items-center"
                    >
                      <FaInstagram className="h-5 w-5 mr-2" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 flex items-center"
                    >
                      <FaTwitter className="h-5 w-5 mr-2" /> Twitter
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="mt-8 md:mt-0">
                <h4 className="text-lg leading-6 font-medium text-[#F1E2C6]">Newsletter</h4>
                <p className="mt-4 text-base text-gray-300">
                  Subscribe to stay updated with our latest products and offers.
                </p>
                <form className="mt-4">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 rounded-l-lg w-full bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    <button
                      type="submit"
                      className="bg-[#7B3F00] hover:bg-[#8B4F10] px-4 py-2 rounded-r-lg text-[#F1E2C6] transition duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a 
              href="https://www.instagram.com/classic_veneer_sarl/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-orange-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-orange-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-orange-500"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a 
              href="mailto:sales@classicveneer.org" 
              className="text-gray-400 hover:text-orange-500"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            © 2025 Classic Veneer SARL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;