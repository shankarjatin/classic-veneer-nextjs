'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] py-16 px-4 md:px-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-nexaBold font-extrabold text-center mb-8 text-[#3E2A47]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Company Overview */}
          <motion.div
            className="bg-[#C4A79C] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold mb-4 text-[#3E2A47]">Company Overview</h3>
            <p className="text-lg text-[#3E2A47] mb-4">
              Classic Veneer Sarl was established in 2021, and has quickly positioned itself as a leading producer of
              premium Okoumé veneer and plywood products. Specializing in high-quality Okoumé face and core veneer, as
              well as 100% Okoumé plywood, Classic Veneer is dedicated to providing sustainable, durable, and aesthetically pleasing wood products.
            </p>
            <p className="text-lg text-[#3E2A47]">
              Based in Gabon, one of the richest timber-producing regions in the world, Classic Veneer ensures that all its products are sourced from responsibly managed forests.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            className="bg-[#C4A79C] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold mb-4 text-[#3E2A47]">Our Mission</h3>
            <p className="text-lg text-[#3E2A47] mb-4">
              Our mission is to produce and deliver the highest quality Okoumé veneer and plywood products that are sustainably sourced and crafted.
            </p>
            <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold mb-4 text-[#3E2A47]">Our Vision</h3>
            <p className="text-lg text-[#3E2A47]">
              To be the global leader in the production of high-quality, sustainable Okoumé veneer and plywood, setting industry benchmarks for craftsmanship.
            </p>
          </motion.div>
        </div>

        {/* Leadership Team Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold mb-8 text-[#3E2A47] text-center">Our Leadership Team</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Executive 1 - Deepak Chaudhary */}
            <motion.div
              className="bg-[#F1E2C6] rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="relative h-80 md:h-96">
                <Image
                  src="/assets/images/deepak-chaudhary.jpg" 
                  alt="Deepak Chaudhary - Director General"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h4 className="text-2xl font-bold mb-1">Deepak Chaudhary</h4>
                  <p className="text-xl text-[#F1E2C6]">Director General</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h5 className="text-lg font-bold text-[#3E2A47] mb-2">Education</h5>
                  <ul className="list-disc list-inside text-[#7B3F00]">
                    <li>B.Tech in Mechanical Engineering</li>
                    <li>MBA in Global Business</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-lg font-bold text-[#3E2A47] mb-2">Experience</h5>
                  <p className="text-[#7B3F00]">
                    With over 5 years of experience, I bring a strong blend of technical expertise and strategic management skills. 
                    My background in Mechanical Engineering (B.Tech) provides a solid foundation in technical problem-solving, 
                    while my MBA in Global Business equips me with the leadership and management capabilities necessary to drive 
                    organizational growth and efficiency. Together, these qualifications empower me to lead and manage businesses 
                    successfully, ensuring smooth operations and sustainable development.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-lg font-bold text-[#3E2A47] mb-2">Contact</h5>
                  <div className="flex items-center space-x-2 mb-2">
                    <FaPhoneAlt className="text-[#7B3F00]" />
                    <span className="text-[#7B3F00]">+91 9897144240, +241 77872328</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-[#7B3F00]" />
                    <a href="mailto:Deepak10chaudhary@gmail.com" className="text-[#7B3F00] hover:underline">
                      Deepak10chaudhary@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Executive 2 - Ajay Kumar */}
            <motion.div
              className="bg-[#F1E2C6] rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="relative h-80 md:h-96">
                <Image
                  src="/assets/images/ajay-kumar.jpg" 
                  alt="Ajay Kumar - Admin and Sales Director"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h4 className="text-2xl font-bold mb-1">Ajay Kumar</h4>
                  <p className="text-xl text-[#F1E2C6]">Admin and Sales Director</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h5 className="text-lg font-bold text-[#3E2A47] mb-2">Experience</h5>
                  <p className="text-[#7B3F00]">
                    With over 25 years of extensive corporate experience, Ajay Kumar has established himself as a seasoned 
                    leader in both administration and sales. Throughout his career, he has demonstrated a remarkable ability 
                    to drive business growth, streamline operations, and build strong customer relationships.
                  </p>
                  <p className="text-[#7B3F00] mt-2">
                    Ajay's vast experience spans multiple industries, equipping him with a deep understanding of market dynamics 
                    and organizational needs. His strategic vision and leadership have played a pivotal role in shaping the company's 
                    growth trajectory. By leveraging his expertise in sales management and administrative processes, he has consistently 
                    contributed to optimizing workflows, improving customer satisfaction, and increasing revenue generation.
                  </p>
                  <p className="text-[#7B3F00] mt-2">
                    Ajay's commitment to excellence and innovation continues to have a lasting impact on the company's overall success. 
                    His ability to align business objectives with operational efficiency has made him a cornerstone of the leadership team, 
                    ensuring sustained growth and long-term prosperity.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-lg font-bold text-[#3E2A47] mb-2">Contact</h5>
                  <div className="flex items-center space-x-2 mb-2">
                    <FaPhoneAlt className="text-[#7B3F00]" />
                    <span className="text-[#7B3F00]">+241 06482507</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-[#7B3F00]" />
                    <a href="mailto:ajay72kumar@gmail.com" className="text-[#7B3F00] hover:underline">
                      ajay72kumar@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Images Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold mb-6 text-[#3E2A47] text-center">Our Work in Pictures</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 */}
            <motion.div
              className="w-full h-80 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                src="/assets/images/img3.jpg"
                alt="Wood veneer production"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            
            {/* Image 2 */}
            <motion.div
              className="w-full h-80 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Image
                src="/assets/images/img4.jpg"
                alt="Production facility"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            
            {/* Image 3 */}
            <motion.div
              className="w-full h-80 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Image
                src="/assets/images/img5.jpg"
                alt="Wood samples"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            
            {/* Image 4 */}
            <motion.div
              className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Image
                src="/assets/images/img6.jpg"
                alt="Finished products"
                width={700}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            
            {/* Image 5 */}
            <motion.div
              className="w-full h-96 rounded-lg shadow-lg overflow-hidden sm:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Image
                src="/assets/images/img7.jpg"
                alt="Factory overview"
                width={1000}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold mb-6 text-[#3E2A47] text-center">Our Work in Motion</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Video 1 */}
            <motion.div
              className="w-full h-80 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <video className="w-full h-full object-cover rounded-lg" controls>
                <source src="/assets/videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 2 */}
            <motion.div
              className="w-full h-80 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <video className="w-full h-full object-cover rounded-lg" controls>
                <source src="/assets/videos/vid2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 3 */}
            <motion.div
              className="w-full h-80 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <video className="w-full h-full object-cover rounded-lg" controls>
                <source src="/assets/videos/vid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 4 */}
            <motion.div
              className="w-full h-80 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            >
              <video className="w-full h-full object-cover rounded-lg" controls>
                <source src="/assets/videos/vid4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="bg-[#C4A79C] p-6 rounded-lg shadow-lg mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold mb-4 text-[#3E2A47]">Certifications</h3>
          <ul className="list-disc list-inside text-lg text-[#3E2A47] space-y-4">
            <li>
              <strong>FSC Certification:</strong> Classic Veneer is certified by the Forest Stewardship Council (FSC), ensuring that all our products come from responsibly managed forests that provide environmental, social, and economic benefits.
            </li>
            <li>
              <strong>CARB EPA Certification:</strong> Our products comply with the California Air Resources Board (CARB) regulations and U.S. Environmental Protection Agency (EPA) standards for formaldehyde emissions, ensuring they are safe for indoor use.
            </li>
            <li>
              <strong>CE Mark:</strong> Classic Veneer's products are CE certified, indicating they meet the European Union's health, safety, and environmental protection standards.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;