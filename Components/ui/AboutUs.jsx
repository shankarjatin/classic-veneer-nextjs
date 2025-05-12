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
const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Elegant Header Section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-nexaBold font-extrabold text-[#3E2A47] mb-6">
            About Us
          </h2>
          <div className="w-40 h-1 bg-[#7B3F00] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-[#7B3F00] max-w-3xl mx-auto">
            Crafting premium wood products with sustainability and elegance since 2021
          </p>
        </motion.div>

        {/* Company & Mission Section with Increased Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-32">
          {/* Company Overview */}
          <motion.div
            className="bg-[#F1E2C6] p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-2 h-12 bg-[#7B3F00] mr-4"></div>
              <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold text-[#3E2A47]">Company Overview</h3>
            </div>
            <p className="text-lg md:text-xl text-[#3E2A47] mb-6 leading-relaxed">
              Classic Veneer Sarl was established in 2021, and has quickly positioned itself as a leading producer of
              premium Okoumé veneer and plywood products. Specializing in high-quality Okoumé face and core veneer, as
              well as 100% Okoumé plywood, Classic Veneer is dedicated to providing sustainable, durable, and aesthetically pleasing wood products.
            </p>
            <p className="text-lg md:text-xl text-[#3E2A47] leading-relaxed">
              Based in Gabon, one of the richest timber-producing regions in the world, Classic Veneer ensures that all its products are sourced from responsibly managed forests.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            className="bg-[#F1E2C6] p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-2 h-12 bg-[#7B3F00] mr-4"></div>
              <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold text-[#3E2A47]">Our Philosophy</h3>
            </div>
            <div className="mb-8">
              <h4 className="text-2xl md:text-3xl font-nexaBold font-bold mb-4 text-[#7B3F00]">Mission</h4>
              <p className="text-lg md:text-xl text-[#3E2A47] leading-relaxed">
                Our mission is to produce and deliver the highest quality Okoumé veneer and plywood products that are sustainably sourced and crafted with precision and care.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-nexaBold font-bold mb-4 text-[#7B3F00]">Vision</h4>
              <p className="text-lg md:text-xl text-[#3E2A47] leading-relaxed">
                To be the global leader in the production of high-quality, sustainable Okoumé veneer and plywood, setting industry benchmarks for craftsmanship and environmental responsibility.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team Section with Premium Styling */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-nexaBold font-extrabold text-[#3E2A47] mb-6">Our Leadership Team</h2>
            <div className="w-32 h-1 bg-[#7B3F00] mx-auto mb-6"></div>
            <p className="text-xl text-[#7B3F00] max-w-3xl mx-auto">
              Meet the visionaries behind Classic Veneer's excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Executive 1 - Deepak Chaudhary */}
            <motion.div
              className="bg-gradient-to-br from-[#F1E2C6] to-[#D1B49D] rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 md:h-[28rem]">
                <Image
                  src="/assets/images/deepak-chaudhary.jpg" 
                  alt="Deepak Chaudhary - Director General"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-3xl font-bold mb-2 text-white">Deepak Chaudhary</h4>
                  <div className="flex items-center">
                    <div className="w-12 h-0.5 bg-[#F1E2C6] mr-4"></div>
                    <p className="text-xl text-[#F1E2C6] font-light">Director General</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h5 className="text-xl font-bold text-[#3E2A47] mb-4 flex items-center">
                    <FaAward className="mr-3 text-[#7B3F00]" />
                    Education
                  </h5>
                  <ul className="list-none space-y-2 ml-8 text-lg">
                    <li className="flex items-center text-[#7B3F00]">
                      <div className="w-2 h-2 rounded-full bg-[#7B3F00] mr-3"></div>
                      B.Tech in Mechanical Engineering
                    </li>
                    <li className="flex items-center text-[#7B3F00]">
                      <div className="w-2 h-2 rounded-full bg-[#7B3F00] mr-3"></div>
                      MBA in Global Business
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h5 className="text-xl font-bold text-[#3E2A47] mb-4 flex items-center">
                    <FaCheck className="mr-3 text-[#7B3F00]" />
                    Experience
                  </h5>
                  <p className="text-[#7B3F00] text-lg leading-relaxed">
                    With over 5 years of experience, I bring a strong blend of technical expertise and strategic management skills. 
                    My background in Mechanical Engineering (B.Tech) provides a solid foundation in technical problem-solving, 
                    while my MBA in Global Business equips me with the leadership and management capabilities necessary to drive 
                    organizational growth and efficiency.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-xl font-bold text-[#3E2A47] mb-4 flex items-center">
                    <FaEnvelope className="mr-3 text-[#7B3F00]" />
                    Contact
                  </h5>
                  <div className="space-y-3 ml-8">
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-[#7B3F00] mr-3 text-lg" />
                      <span className="text-[#7B3F00] text-lg">+91 9897144240, +241 77872328</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-[#7B3F00] mr-3 text-lg" />
                      <a href="mailto:Deepak10chaudhary@gmail.com" className="text-[#7B3F00] text-lg hover:underline">
                        Deepak10chaudhary@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Executive 2 - Ajay Kumar */}
            <motion.div
              className="bg-gradient-to-br from-[#F1E2C6] to-[#D1B49D] rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 md:h-[28rem]">
                <Image
                  src="/assets/images/ajay-kumar.jpg" 
                  alt="Ajay Kumar - Admin and Sales Director"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-3xl font-bold mb-2 text-white">Ajay Kumar</h4>
                  <div className="flex items-center">
                    <div className="w-12 h-0.5 bg-[#F1E2C6] mr-4"></div>
                    <p className="text-xl text-[#F1E2C6] font-light">Admin and Sales Director</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h5 className="text-xl font-bold text-[#3E2A47] mb-4 flex items-center">
                    <FaCheck className="mr-3 text-[#7B3F00]" />
                    Experience
                  </h5>
                  <p className="text-[#7B3F00] text-lg leading-relaxed mb-4">
                    With over 25 years of extensive corporate experience, Ajay Kumar has established himself as a seasoned 
                    leader in both administration and sales. Throughout his career, he has demonstrated a remarkable ability 
                    to drive business growth, streamline operations, and build strong customer relationships.
                  </p>
                  <p className="text-[#7B3F00] text-lg leading-relaxed mb-4">
                    Ajay's vast experience spans multiple industries, equipping him with a deep understanding of market dynamics 
                    and organizational needs. His strategic vision and leadership have played a pivotal role in shaping the company's 
                    growth trajectory.
                  </p>
                  <p className="text-[#7B3F00] text-lg leading-relaxed">
                    Ajay's commitment to excellence and innovation continues to have a lasting impact on the company's overall success, 
                    ensuring sustained growth and long-term prosperity.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-xl font-bold text-[#3E2A47] mb-4 flex items-center">
                    <FaEnvelope className="mr-3 text-[#7B3F00]" />
                    Contact
                  </h5>
                  <div className="space-y-3 ml-8">
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-[#7B3F00] mr-3 text-lg" />
                      <span className="text-[#7B3F00] text-lg">+241 06482507</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-[#7B3F00] mr-3 text-lg" />
                      <a href="mailto:ajay72kumar@gmail.com" className="text-[#7B3F00] text-lg hover:underline">
                        ajay72kumar@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Section with Premium Styling */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-nexaBold font-extrabold text-[#3E2A47] mb-6">Our Craftsmanship</h2>
            <div className="w-32 h-1 bg-[#7B3F00] mx-auto mb-6"></div>
            <p className="text-xl text-[#7B3F00] max-w-3xl mx-auto">
              Experience the beauty and quality of our premium wood products
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Image 1 */}
            <motion.div
              className="group h-96 rounded-xl shadow-xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Image
                src="/assets/images/img3.jpg"
                alt="Wood veneer production"
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">Veneer Production</h4>
                <p className="text-[#F1E2C6]">State-of-the-art manufacturing process</p>
              </div>
            </motion.div>
            
            {/* Image 2 */}
            <motion.div
              className="group h-96 rounded-xl shadow-xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Image
                src="/assets/images/img4.jpg"
                alt="Production facility"
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">Production Facility</h4>
                <p className="text-[#F1E2C6]">Modern equipment for premium results</p>
              </div>
            </motion.div>
            
            {/* Image 3 */}
            <motion.div
              className="group h-96 rounded-xl shadow-xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Image
                src="/assets/images/img5.jpg"
                alt="Wood samples"
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">Premium Wood Samples</h4>
                <p className="text-[#F1E2C6]">Quality you can see and feel</p>
              </div>
            </motion.div>
            
            {/* Image 4 */}
            <motion.div
              className="group h-96 rounded-xl shadow-xl overflow-hidden relative sm:col-span-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Image
                src="/assets/images/img6.jpg"
                alt="Finished products"
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">Finished Products</h4>
                <p className="text-[#F1E2C6]">Superior craftsmanship in every detail</p>
              </div>
            </motion.div>
            
            {/* Image 5 */}
            <motion.div
              className="group h-96 rounded-xl shadow-xl overflow-hidden relative lg:col-span-3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Image
                src="/assets/images/img7.jpg"
                alt="Factory overview"
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">Our Manufacturing Facility</h4>
                <p className="text-[#F1E2C6]">Where innovation meets tradition</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Videos Section with Premium Styling */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-nexaBold font-extrabold text-[#3E2A47] mb-6">Our Process in Motion</h2>
            <div className="w-32 h-1 bg-[#7B3F00] mx-auto mb-6"></div>
            <p className="text-xl text-[#7B3F00] max-w-3xl mx-auto">
              Witness the precision and care that goes into every product
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Video 1 */}
            <motion.div
              className="rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#C4A79C] p-4 rounded-t-xl">
                <h4 className="text-xl font-bold text-[#3E2A47]">Veneer Processing</h4>
              </div>
              <video className="w-full aspect-video object-cover" controls poster="/assets/images/video-poster1.jpg">
                <source src="/assets/videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 2 */}
            <motion.div
              className="rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#C4A79C] p-4 rounded-t-xl">
                <h4 className="text-xl font-bold text-[#3E2A47]">Quality Control</h4>
              </div>
              <video className="w-full aspect-video object-cover" controls poster="/assets/images/video-poster2.jpg">
                <source src="/assets/videos/vid2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 3 */}
            <motion.div
              className="rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#C4A79C] p-4 rounded-t-xl">
                <h4 className="text-xl font-bold text-[#3E2A47]">Manufacturing Process</h4>
              </div>
              <video className="w-full aspect-video object-cover" controls poster="/assets/images/video-poster3.jpg">
                <source src="/assets/videos/vid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Video 4 */}
            <motion.div
              className="rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#C4A79C] p-4 rounded-t-xl">
                <h4 className="text-xl font-bold text-[#3E2A47]">Final Product Showcase</h4>
              </div>
              <video className="w-full aspect-video object-cover" controls poster="/assets/images/video-poster4.jpg">
                <source src="/assets/videos/vid4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications with Luxury Design */}
        <motion.div
          className="bg-gradient-to-r from-[#F1E2C6] to-[#D1B49D] p-12 rounded-xl shadow-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-10">
            <FaCertificate className="text-4xl text-[#7B3F00] mr-4" />
            <h3 className="text-3xl md:text-4xl font-nexaBold font-extrabold text-[#3E2A47]">Our Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-[#C4A79C]/30 p-6 rounded-lg border-l-4 border-[#7B3F00]"
              whileHover={{ x: 5 }}
            >
              <h4 className="text-xl font-bold text-[#3E2A47] mb-3 flex items-center">
                <div className="w-8 h-8 bg-[#7B3F00] rounded-full flex items-center justify-center mr-3 text-white">
                  <FaLeaf />
                </div>
                FSC Certification
              </h4>
              <p className="text-[#7B3F00] leading-relaxed">
                Classic Veneer is certified by the Forest Stewardship Council (FSC), ensuring that all our products come from responsibly managed forests that provide environmental, social, and economic benefits.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#C4A79C]/30 p-6 rounded-lg border-l-4 border-[#7B3F00]"
              whileHover={{ x: 5 }}
            >
              <h4 className="text-xl font-bold text-[#3E2A47] mb-3 flex items-center">
                <div className="w-8 h-8 bg-[#7B3F00] rounded-full flex items-center justify-center mr-3 text-white">
                  <FaShieldAlt />
                </div>
                CARB EPA Certification
              </h4>
              <p className="text-[#7B3F00] leading-relaxed">
                Our products comply with the California Air Resources Board (CARB) regulations and U.S. Environmental Protection Agency (EPA) standards for formaldehyde emissions, ensuring they are safe for indoor use.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#C4A79C]/30 p-6 rounded-lg border-l-4 border-[#7B3F00]"
              whileHover={{ x: 5 }}
            >
              <h4 className="text-xl font-bold text-[#3E2A47] mb-3 flex items-center">
                <div className="w-8 h-8 bg-[#7B3F00] rounded-full flex items-center justify-center mr-3 text-white">
                  <FaCertificate />
                </div>
                CE Mark
              </h4>
              <p className="text-[#7B3F00] leading-relaxed">
                Classic Veneer's products are CE certified, indicating they meet the European Union's health, safety, and environmental protection standards for products sold within the European Economic Area.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Elegant CTA */}
        <motion.div
          className="text-center bg-[#3E2A47] p-16 rounded-xl shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-nexaBold font-extrabold text-[#F1E2C6] mb-6">
            Experience the Classic Veneer Difference
          </h2>
          <p className="text-xl text-[#C4A79C] max-w-3xl mx-auto mb-10">
            Let us help you transform your space with our premium wood products
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#7B3F00] text-[#F1E2C6] font-bold text-lg py-4 px-10 rounded-lg hover:bg-[#8B4F10] transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;