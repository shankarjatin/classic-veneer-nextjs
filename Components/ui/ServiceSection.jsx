'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Modal from '../modals/modal';

// Smaller, more compact bullet point for mobile
const BulletPoint = ({ text, isCompact = false }) => (
  <li className="flex items-start group transition-all duration-300">
    <div className="relative flex-shrink-0 mt-1">
      <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#7B3F00] group-hover:bg-[#8B4F10] transition-colors"></div>
      <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#7B3F00] opacity-25 group-hover:opacity-40 scale-150 transition-all"></div>
    </div>
    <span className={`text-[#7B3F00] ml-3 sm:ml-4 ${isCompact ? "text-xs sm:text-sm" : "text-sm sm:text-base"} leading-tight group-hover:text-[#8B4F10] transition-colors`}>
      {text}
    </span>
  </li>
);

// Services data remains the same
const services = [
  { 
    name: 'Commercial Plywood', 
    imgSrc: '/assets/images/commercial.jpg', 
    description: 'Our commercial plywood is perfect for furniture, cabinetry, and interior design. Crafted with premium woods, it offers exceptional stability and an elegant finish.',
    features: ['Furniture grade', 'Interior use', 'Smooth finish', 'High stability']
  },
  { 
    name: 'Construction Plywood', 
    imgSrc: '/assets/images/constructive.jpg', 
    description: 'Engineered for structural applications, our construction plywood delivers superior strength, durability, and dimensional stability for demanding building projects.',
    features: ['High strength', 'Weather resistant', 'Structural grade', 'Easy to work with']
  },
  { 
    name: 'Marine Plywood', 
    imgSrc: '/assets/images/marine.jpg', 
    description: 'Specially designed for water exposure, our marine plywood is ideal for boat building, outdoor furniture, and any application requiring moisture resistance.',
    features: ['Water resistant', 'Boating applications', 'Outdoor furniture', 'Dock construction'] 
  },
  { 
    name: 'Laminated Plywood', 
    imgSrc: '/assets/images/laminated.jpg', 
    description: 'Our laminated plywood combines beauty with performance, featuring decorative surface finishes perfect for visible applications in premium interiors.',
    features: ['Decorative finish', 'Scratch resistant', 'Premium appearance', 'Multiple finishes available']
  },
  { 
    name: 'Face Veneer', 
    imgSrc: '/assets/images/face-veneer.png', 
    description: 'Our face veneers represent the finest quality in decorative wood surfaces, showcasing the natural beauty of premium wood grain for luxury applications.',
    features: ['Premium appearance', 'Fine wood grain', 'Consistent quality', 'Designer options']
  },
  { 
    name: 'Core Veneer', 
    imgSrc: '/assets/images/core-veneer.jpg', 
    description: 'The foundation of quality plywood, our core veneers provide exceptional strength and stability, ensuring long-lasting performance in all applications.',
    features: ['Structural strength', 'Dimensional stability', 'Multiple thickness options', 'Sustainable sourcing']
  },
];

const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-6 sm:py-8 md:py-16 px-3 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] ">
      <div className="max-w-7xl mx-auto">
        {/* Header - Reduced margins and font sizes */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2A47] mb-2 sm:mb-4">
            Our Products
          </h2>
          <div className="w-20 sm:w-32 h-0.5 sm:h-1 bg-[#7B3F00] mx-auto mb-3 sm:mb-5"></div>
          <p className="text-sm sm:text-base md:text-lg text-[#7B3F00] max-w-3xl mx-auto px-2">
            Discover our premium range of wood products crafted with exceptional quality and attention to detail
          </p>
        </motion.div>

        {/* Product cards grid - Reduced gap and card size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#F1E2C6] rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(123, 63, 0, 0.25)"
              }}
            >
              {/* Image section - Reduced height */}
              <div className="relative h-40 sm:h-48 md:h-56">
                <Image
                  src={service.imgSrc}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-5">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{service.name}</h3>
                  <div className="w-12 h-0.5 bg-[#F1E2C6]"></div>
                </div>
              </div>
              
              {/* Content section - Reduced padding and font sizes */}
              <div className="p-3 sm:p-4 md:p-6">
                <p className="text-xs sm:text-sm md:text-base text-[#7B3F00] mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features section - More compact */}
                <div className="bg-[#D1B49D]/30 rounded-lg p-2.5 sm:p-4">
                  <h4 className="text-sm sm:text-base font-semibold text-[#3E2A47] mb-2 sm:mb-3 flex items-center">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#7B3F00] mr-2 flex items-center justify-center text-white text-[10px] sm:text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Key Features
                  </h4>
                  {/* More compact bullet points grid */}
                  <ul className="grid grid-cols-2 gap-y-1.5 gap-x-1 sm:gap-y-2 sm:gap-x-2">
                    {service.features.map((feature, i) => (
                      <BulletPoint key={i} text={feature} isCompact={true} />
                    ))}
                  </ul>
                </div>
                
                {/* Learn more link - Smaller text and spacing */}
                <motion.a 
                  href={`/products#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-3 sm:mt-4 inline-flex items-center text-[#7B3F00] text-xs sm:text-sm font-medium hover:text-[#3E2A47] transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - More compact for mobile */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-[#3E2A47] to-[#7B3F00] p-0.5 sm:p-1 rounded-lg sm:rounded-xl shadow-lg">
            <div className="bg-[#F1E2C6] rounded-md sm:rounded-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3E2A47] mb-2 sm:mb-3">
                Customized Solutions Available
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#7B3F00] max-w-3xl mx-auto mb-3 sm:mb-4 px-1">
                Don't see exactly what you need? Contact us for customized wood products tailored to your specific requirements.
              </p>
              <motion.button
                onClick={openModal}
                className="inline-block bg-[#7B3F00] text-[#F1E2C6] font-medium text-xs sm:text-sm py-2 px-4 sm:py-2.5 sm:px-6 rounded-md sm:rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {showModal && <Modal onClose={closeModal} />}
    </section>
  );
};

export default ServicesSection;