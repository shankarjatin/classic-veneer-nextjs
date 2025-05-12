'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Modal from '../modals/modal';

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
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-nexaBold font-extrabold text-[#3E2A47] mb-6">
            Our Products
          </h2>
          <div className="w-40 h-1 bg-[#7B3F00] mx-auto mb-8"></div>
          <p className="text-xl text-[#7B3F00] max-w-3xl mx-auto">
            Discover our premium range of wood products crafted with exceptional quality and attention to detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#F1E2C6] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(123, 63, 0, 0.25)"
              }}
            >
              <div className="relative h-72">
                <Image
                  src={service.imgSrc}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2A47] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="w-16 h-0.5 bg-[#F1E2C6]"></div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <p className="text-lg text-[#7B3F00] mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="bg-[#D1B49D]/30 rounded-xl p-5">
                  <h4 className="text-lg font-semibold text-[#3E2A47] mb-3 flex items-center">
                    <span className="w-5 h-5 rounded-full bg-[#7B3F00] mr-3 flex items-center justify-center text-white text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[#7B3F00]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B3F00] mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.a 
                  href={`/products#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-6 inline-flex items-center text-[#7B3F00] font-medium hover:text-[#3E2A47] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-[#3E2A47] to-[#7B3F00] p-1 rounded-xl shadow-2xl">
            <div className="bg-[#F1E2C6] rounded-lg px-8 py-6 md:px-12 md:py-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#3E2A47] mb-4">
                Customized Solutions Available
              </h3>
              <p className="text-lg text-[#7B3F00] max-w-3xl mx-auto mb-6">
                Don't see exactly what you need? Contact us for customized wood products tailored to your specific requirements.
              </p>
              <motion.button
                onClick={openModal}
                className="inline-block bg-[#7B3F00] text-[#F1E2C6] font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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