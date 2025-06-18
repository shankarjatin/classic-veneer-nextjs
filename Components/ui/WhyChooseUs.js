'use client';

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCheckCircle,
  faStamp,
  faLeaf,
  faShieldAlt,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    name: "FSC Certification",
    description:
      "Classic Veneer is certified by the Forest Stewardship Council (FSC), ensuring that all our products come from responsibly managed forests that provide environmental, social, and economic benefits.",
    icon: faLeaf,
    color: "#3E2A47"
  },
  {
    name: "CARB EPA Certification",
    description:
      "Our products comply with the California Air Resources Board (CARB) regulations and U.S. Environmental Protection Agency (EPA) standards for formaldehyde emissions, ensuring they are safe for indoor use.",
    icon: faShieldAlt,
    color: "#3E2A47"
  },
  {
    name: "CE Mark",
    description:
      "Classic Veneer's products are CE certified, indicating they meet the European Union's health, safety, and environmental protection standards for products sold within the European Economic Area.",
    icon: faStamp,
    color: "#3E2A47"
  },
  {
    name: "Premium Quality",
    description:
      "We source only the best quality Okoumé wood for our veneers and plywood, ensuring consistency, durability, and superior aesthetic appeal in every product we create.",
    icon: faAward,
    color: "#3E2A47"
  },
  {
    name: "Expert Craftsmanship",
    description:
      "Our team of highly skilled craftspeople brings decades of experience to every veneer and plywood product, ensuring precision cutting, optimal thickness, and flawless finishing.",
    icon: faUsers,
    color: "#3E2A47"
  },
  {
    name: "Quality Assurance",
    description:
      "Our comprehensive quality control processes ensure that every product meets our stringent standards before reaching our customers, guaranteeing satisfaction and performance.",
    icon: faCheckCircle,
    color: "#3E2A47"
  }
];

const WhyChoose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 // Reduced from 0.2 for faster appearance on mobile
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced y offset from 20 to 15
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } // Reduced from 0.6 for snappier mobile animations
    }
  };

  return (
    <div
      className="bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] py-6 px-3 sm:py-8 sm:px-4 md:px-6 lg:px-8"
      id="why-choose-us"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-4 text-[#3E2A47]"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>
        
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 text-[#7B3F00] px-2 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At Classic Veneer, we maintain the highest standards of quality, sustainability, and craftsmanship in all our products.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#F1E2C6] rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 md:p-5 flex flex-col items-center text-center h-full transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="bg-[#C4A79C] p-3 rounded-full mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-xl sm:text-2xl text-[#3E2A47]"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-[#3E2A47]">{service.name}</h3>
              <p className="text-xs sm:text-sm md:text-base text-[#7B3F00] flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-6 sm:mt-8 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="/contact-us"
            className="inline-block bg-[#7B3F00] text-[#F1E2C6] font-medium text-sm sm:text-base py-2 px-5 sm:py-2.5 sm:px-6 md:py-3 md:px-7 rounded-md sm:rounded-lg hover:shadow-md transition-all duration-300 hover:bg-opacity-90"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;