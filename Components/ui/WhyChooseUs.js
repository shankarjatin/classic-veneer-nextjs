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
        staggerChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div
      className="bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] py-16 lg:py-24 px-4 md:px-8"
      id="why-choose-us"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl lg:text-5xl font-nexaBold font-extrabold text-center mb-4 text-[#3E2A47]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center max-w-3xl mx-auto mb-16 text-[#7B3F00]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          At Classic Veneer, we maintain the highest standards of quality, sustainability, and craftsmanship in all our products.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#F1E2C6] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="bg-[#C4A79C] p-4 rounded-full mb-6 w-20 h-20 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-3xl text-[#3E2A47]"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3E2A47]">{service.name}</h3>
              <p className="text-[#7B3F00] flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a
            href="/contact-us"
            className="inline-block bg-[#7B3F00] text-[#F1E2C6] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-opacity-90 text-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;