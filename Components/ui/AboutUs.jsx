'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaLinkedin,
  FaEnvelope, 
  FaPhoneAlt, 
  FaCertificate, 
  FaAward, 
  FaCheck,
  FaLeaf,
  FaShieldAlt 
} from 'react-icons/fa';
import ContactButton from './ContactButton';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] py-8 sm:py-12 md:py-20 px-3 sm:px-4 md:px-8 font-montserrat">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - More compact for mobile */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:font-extrabold text-[#3E2A47] mb-2 sm:mb-4">
            About Us
          </h2>
          <div className="w-20 sm:w-32 h-0.5 sm:h-1 bg-[#7B3F00] mx-auto mb-3 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-[#7B3F00] max-w-3xl mx-auto px-2">
            Crafting premium wood products with sustainability and elegance since 2021
          </p>
        </motion.div>

        {/* Company & Mission Section - More compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-16 md:mb-24">
          {/* Company Overview */}
          <motion.div
            className="bg-[#F1E2C6] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-1 sm:w-2 h-8 sm:h-10 bg-[#7B3F00] mr-3 sm:mr-4"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3E2A47]">Company Overview</h3>
            </div>
            <p className="text-sm sm:text-base text-[#3E2A47] mb-3 sm:mb-4 leading-relaxed">
              Classic Veneer Sarl was established in 2021, and has quickly positioned itself as a leading producer of
              premium Okoumé veneer and plywood products. Specializing in high-quality Okoumé face and core veneer, as
              well as 100% Okoumé plywood, Classic Veneer is dedicated to providing sustainable, durable, and aesthetically pleasing wood products.
            </p>
            <p className="text-sm sm:text-base text-[#3E2A47] leading-relaxed">
              Based in Gabon, one of the richest timber-producing regions in the world, Classic Veneer ensures that all its products are sourced from responsibly managed forests.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            className="bg-[#F1E2C6] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-1 sm:w-2 h-8 sm:h-10 bg-[#7B3F00] mr-3 sm:mr-4"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3E2A47]">Our Philosophy</h3>
            </div>
            <div className="mb-4 sm:mb-6">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-[#7B3F00]">Mission</h4>
              <p className="text-sm sm:text-base text-[#3E2A47] leading-relaxed">
                Our mission is to produce and deliver the highest quality Okoumé veneer and plywood products that are sustainably sourced and crafted with precision and care.
              </p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-[#7B3F00]">Vision</h4>
              <p className="text-sm sm:text-base text-[#3E2A47] leading-relaxed">
                To be the global leader in the production of high-quality, sustainable Okoumé veneer and plywood, setting industry benchmarks for craftsmanship and environmental responsibility.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team Section - More compact */}
        <motion.div
          className="mb-8 sm:mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3E2A47] mb-2 sm:mb-4">Our Leadership Team</h2>
            <div className="w-20 sm:w-28 h-0.5 sm:h-1 bg-[#7B3F00] mx-auto mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#7B3F00] max-w-3xl mx-auto px-2">
              Meet the visionaries behind Classic Veneer's excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Executive 1 - Deepak Chaudhary - Mobile optimized */}
            <motion.div
              className="bg-gradient-to-br from-[#F1E2C6] to-[#D1B49D] rounded-lg sm:rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 sm:h-72 md:h-80">
                <Image
                  src="/assets/images/ajay-kumar.jpg" 
                  alt="Deepak Chaudhary - Director General"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2QxYjQ5ZCIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNzAiIGZpbGw9IiNmMWUyYzYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMDAiIHI9IjQwIiBmaWxsPSIjZjFlMmM2Ii8+PHJlY3QgeD0iMTIwIiB5PSIyMzAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjZjFlMmM2Ii8+PC9zdmc+"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h4 className="text-xl sm:text-2xl font-bold mb-1 text-white">Deepak Chaudhary</h4>
                  <div className="flex items-center">
                    <div className="w-8 sm:w-10 h-0.5 bg-[#F1E2C6] mr-3"></div>
                    <p className="text-sm sm:text-base text-[#F1E2C6] font-light">Director General</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <h5 className="text-base sm:text-lg font-bold text-[#3E2A47] mb-2 flex items-center">
                    <FaAward className="mr-2 text-[#7B3F00] text-sm sm:text-base" />
                    Education
                  </h5>
                  <ul className="list-none space-y-1 ml-6 text-sm sm:text-base">
                    <li className="flex items-center text-[#7B3F00]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7B3F00] mr-2"></div>
                      B.Tech in Mechanical Engineering
                    </li>
                    <li className="flex items-center text-[#7B3F00]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7B3F00] mr-2"></div>
                      MBA in Global Business
                    </li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-base sm:text-lg font-bold text-[#3E2A47] mb-2 flex items-center">
                    <FaCheck className="mr-2 text-[#7B3F00] text-sm sm:text-base" />
                    Experience
                  </h5>
                  <p className="text-[#7B3F00] text-xs sm:text-sm leading-relaxed">
                    With over 5 years of experience, I bring a strong blend of technical expertise and strategic management skills. 
                    My background in Mechanical Engineering provides a solid foundation in technical problem-solving, 
                    while my MBA equips me with the leadership capabilities necessary to drive organizational growth and efficiency.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-base sm:text-lg font-bold text-[#3E2A47] mb-2 flex items-center">
                    <FaEnvelope className="mr-2 text-[#7B3F00] text-sm sm:text-base" />
                    Contact
                  </h5>
                  <div className="space-y-2 ml-6">
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-[#7B3F00] mr-2 text-xs sm:text-sm flex-shrink-0" />
                      <span className="text-[#7B3F00] text-xs sm:text-sm">+91 9897144240, +241 77872328</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-[#7B3F00] mr-2 text-xs sm:text-sm flex-shrink-0" />
                      <a href="mailto:Deepak10chaudhary@gmail.com" className="text-[#7B3F00] text-xs sm:text-sm hover:underline truncate">
                        Deepak10chaudhary@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Executive 2 - Ajay Kumar - Mobile optimized */}
            <motion.div
              className="bg-gradient-to-br from-[#F1E2C6] to-[#D1B49D] rounded-lg sm:rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 sm:h-72 md:h-80">
                <Image
                  src="/assets/images/ajay-kumar.jpg" 
                  alt="Ajay Kumar - Admin and Sales Director"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2QxYjQ5ZCIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNzAiIGZpbGw9IiNmMWUyYzYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMDAiIHI9IjQwIiBmaWxsPSIjZjFlMmM2Ii8+PHJlY3QgeD0iMTIwIiB5PSIyMzAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjZjFlMmM2Ii8+PC9zdmc+"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h4 className="text-xl sm:text-2xl font-bold mb-1 text-white">Ajay Kumar</h4>
                  <div className="flex items-center">
                    <div className="w-8 sm:w-10 h-0.5 bg-[#F1E2C6] mr-3"></div>
                    <p className="text-sm sm:text-base text-[#F1E2C6] font-light">Admin and Sales Director</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <h5 className="text-base sm:text-lg font-bold text-[#3E2A47] mb-2 flex items-center">
                    <FaCheck className="mr-2 text-[#7B3F00] text-sm sm:text-base" />
                    Experience
                  </h5>
                  <p className="text-[#7B3F00] text-xs sm:text-sm leading-relaxed mb-2">
                    With over 25 years of extensive corporate experience, Ajay Kumar has established himself as a seasoned 
                    leader in both administration and sales. Throughout his career, he has demonstrated a remarkable ability 
                    to drive business growth and build strong customer relationships.
                  </p>
                  <p className="text-[#7B3F00] text-xs sm:text-sm leading-relaxed">
                    Ajay's vast experience spans multiple industries, equipping him with a deep understanding of market dynamics. 
                    His commitment to excellence and innovation continues to have a lasting impact on the company's overall success.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-base sm:text-lg font-bold text-[#3E2A47] mb-2 flex items-center">
                    <FaEnvelope className="mr-2 text-[#7B3F00] text-sm sm:text-base" />
                    Contact
                  </h5>
                  <div className="space-y-2 ml-6">
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-[#7B3F00] mr-2 text-xs sm:text-sm flex-shrink-0" />
                      <span className="text-[#7B3F00] text-xs sm:text-sm">+241 06482507</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-[#7B3F00] mr-2 text-xs sm:text-sm flex-shrink-0" />
                      <a href="mailto:ajay72kumar@gmail.com" className="text-[#7B3F00] text-xs sm:text-sm hover:underline">
                        ajay72kumar@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Section - More compact */}
        <motion.div
          className="mb-8 sm:mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3E2A47] mb-2 sm:mb-4">Our Craftsmanship</h2>
            <div className="w-20 sm:w-28 h-0.5 sm:h-1 bg-[#7B3F00] mx-auto mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#7B3F00] max-w-3xl mx-auto px-2">
              Experience the beauty and quality of our premium wood products
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {/* Image 1 - Mobile-friendly height */}
            <motion.div
              className="group h-44 sm:h-56 md:h-72 rounded-md sm:rounded-lg shadow-sm overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Image
                src="/assets/images/img3.jpg"
                alt="Wood veneer production"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-2 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1">Veneer Production</h4>
                <p className="text-xs sm:text-sm text-[#F1E2C6] line-clamp-2">State-of-the-art manufacturing process</p>
              </div>
            </motion.div>
            
            {/* Image 2 - Mobile-friendly height */}
            <motion.div
              className="group h-44 sm:h-56 md:h-72 rounded-md sm:rounded-lg shadow-sm overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Image
                src="/assets/images/img4.jpg"
                alt="Production facility"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-2 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1">Production Facility</h4>
                <p className="text-xs sm:text-sm text-[#F1E2C6] line-clamp-2">Modern equipment for premium results</p>
              </div>
            </motion.div>
            
            {/* Image 3 - Mobile-friendly height */}
            <motion.div
              className="group h-44 sm:h-56 md:h-72 rounded-md sm:rounded-lg shadow-sm overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Image
                src="/assets/images/img5.jpg"
                alt="Wood samples"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-2 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1">Premium Wood</h4>
                <p className="text-xs sm:text-sm text-[#F1E2C6] line-clamp-2">Quality you can see and feel</p>
              </div>
            </motion.div>
            
            {/* Image 4 - Mobile-friendly height */}
            <motion.div
              className="group h-44 sm:h-56 md:h-72 rounded-md sm:rounded-lg shadow-sm overflow-hidden relative col-span-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Image
                src="/assets/images/img6.jpg"
                alt="Finished products"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-2 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1">Finished Products</h4>
                <p className="text-xs sm:text-sm text-[#F1E2C6] line-clamp-2">Superior craftsmanship in every detail</p>
              </div>
            </motion.div>
            
            {/* Image 5 - Mobile-friendly height */}
            <motion.div
              className="group h-44 sm:h-56 md:h-72 rounded-md sm:rounded-lg shadow-sm overflow-hidden relative lg:col-span-3 col-span-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Image
                src="/assets/images/img7.jpg"
                alt="Factory overview"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-2 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1">Manufacturing Facility</h4>
                <p className="text-xs sm:text-sm text-[#F1E2C6] line-clamp-2">Where innovation meets tradition</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Videos Section - More compact */}
        <motion.div
          className="mb-8 sm:mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3E2A47] mb-2 sm:mb-4">Our Process in Motion</h2>
            <div className="w-20 sm:w-28 h-0.5 sm:h-1 bg-[#7B3F00] mx-auto mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#7B3F00] max-w-3xl mx-auto px-2">
              Witness the precision and care that goes into every product
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Video 1 - More compact */}
            <motion.div
              className="rounded-md sm:rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#C4A79C] p-2 sm:p-3 rounded-t-md sm:rounded-t-lg">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#3E2A47]">Veneer Processing</h4>
              </div>
              <video className="w-full aspect-video object-cover" controls poster="/assets/images/video-poster1.jpg">
                <source src="/assets/videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 2 - More compact */}
            <motion.div
              className="rounded-md sm:rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#C4A79C] p-2 sm:p-3 rounded-t-md sm:rounded-t-lg">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#3E2A47]">Quality Control</h4>
              </div>
              <video className="w-full aspect-video object-cover" controls poster="/assets/images/video-poster2.jpg">
                <source src="/assets/videos/vid2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 3 - More compact */}
            <motion.div
              className="rounded-md sm:rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#C4A79C] p-2 sm:p-3 rounded-t-md sm:rounded-t-lg">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#3E2A47]">Manufacturing Process</h4>
              </div>
              <video className="w-full aspect-video object-cover" controls poster="/assets/images/video-poster3.jpg">
                <source src="/assets/videos/vid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 4 - More compact */}
            <motion.div
              className="rounded-md sm:rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#C4A79C] p-2 sm:p-3 rounded-t-md sm:rounded-t-lg">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#3E2A47]">Final Product Showcase</h4>
              </div>
              <video className="w-full aspect-video object-cover" controls poster="/assets/images/video-poster4.jpg">
                <source src="/assets/videos/vid4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications - More compact */}
        <motion.div
          className="bg-gradient-to-r from-[#F1E2C6] to-[#D1B49D] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <FaCertificate className="text-xl sm:text-2xl md:text-3xl text-[#7B3F00] mr-3" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3E2A47]">Our Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <motion.div 
              className="bg-[#C4A79C]/30 p-3 sm:p-4 rounded-md border-l-2 sm:border-l-4 border-[#7B3F00]"
              whileHover={{ x: 3 }}
            >
              <h4 className="text-base sm:text-lg font-bold text-[#3E2A47] mb-2 flex items-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#7B3F00] rounded-full flex items-center justify-center mr-2 text-white text-xs sm:text-sm">
                  <FaLeaf />
                </div>
                FSC Certification
              </h4>
              <p className="text-xs sm:text-sm text-[#7B3F00] leading-relaxed">
                Classic Veneer is certified by the Forest Stewardship Council (FSC), ensuring all our products come from responsibly managed forests.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#C4A79C]/30 p-3 sm:p-4 rounded-md border-l-2 sm:border-l-4 border-[#7B3F00]"
              whileHover={{ x: 3 }}
            >
              <h4 className="text-base sm:text-lg font-bold text-[#3E2A47] mb-2 flex items-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#7B3F00] rounded-full flex items-center justify-center mr-2 text-white text-xs sm:text-sm">
                  <FaShieldAlt />
                </div>
                CARB EPA Certification
              </h4>
              <p className="text-xs sm:text-sm text-[#7B3F00] leading-relaxed">
                Our products comply with CARB regulations and EPA standards for formaldehyde emissions, ensuring they are safe for indoor use.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#C4A79C]/30 p-3 sm:p-4 rounded-md border-l-2 sm:border-l-4 border-[#7B3F00]"
              whileHover={{ x: 3 }}
            >
              <h4 className="text-base sm:text-lg font-bold text-[#3E2A47] mb-2 flex items-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#7B3F00] rounded-full flex items-center justify-center mr-2 text-white text-xs sm:text-sm">
                  <FaCertificate />
                </div>
                CE Mark
              </h4>
              <p className="text-xs sm:text-sm text-[#7B3F00] leading-relaxed">
                Classic Veneer's products are CE certified, meeting the European Union's health, safety, and environmental protection standards.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Elegant CTA - Mobile friendly */}
        <motion.div
          className="text-center bg-[#3E2A47] p-4 sm:p-6 md:p-10 rounded-lg sm:rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F1E2C6] mb-2 sm:mb-4">
            Experience the Classic Veneer Difference
          </h2>
          <p className="text-sm sm:text-base text-[#C4A79C] max-w-3xl mx-auto mb-4 sm:mb-6 px-1">
            Let us help you transform your space with our premium wood products
          </p>
          <ContactButton 
            className="inline-block bg-[#7B3F00] text-[#F1E2C6] font-medium text-sm sm:text-base py-2.5 px-5 sm:py-3 sm:px-8 rounded-md sm:rounded-lg transition-colors duration-300 hover:bg-[#8B4F10]"
          >
            Contact Us Today
          </ContactButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;