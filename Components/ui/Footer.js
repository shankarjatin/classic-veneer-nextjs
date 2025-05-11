'use client';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#190000] text-[#F1E2C6] mb-0">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <p className="text-base leading-6">
             <span className='text-2xl font-extrabold'> Classic Veneer SARL </span> <br></br> <br></br>Offering high-quality plywood that’s built to last. Explore our premium products and join our sustainable journey.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-lg leading-6 font-medium text-[#F1E2C6]">Company</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/about" className="text-base text-gray-300 hover:text-orange-500">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/products" className="text-base text-gray-300 hover:text-orange-500">
                      Our Products
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg leading-6 font-medium text-[#F1E2C6]">Resources</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/blog" className="text-base text-gray-300 hover:text-orange-500">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-base text-gray-300 hover:text-orange-500">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-lg leading-6 font-medium text-[#F1E2C6]">Connect</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="https://linkedin.com" className="text-gray-300 hover:text-orange-500">
                      <FaLinkedin className="inline-block h-5 w-5" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" className="text-gray-300 hover:text-orange-500">
                      <FaInstagram className="inline-block h-5 w-5" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" className="text-gray-300 hover:text-orange-500">
                      <FaTwitter className="inline-block h-5 w-5" /> Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* Additional Social Links Here if necessary */}
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
