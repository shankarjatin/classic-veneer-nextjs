'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import Modal from '../modals/modal';

// Use specific color codes instead of variables
const COLORS = {
  darkWalnut: '#3E2A47',
  chestnutBrown: '#7B3F00',
  lightOak: '#D1B49D',
  creamyBeige: '#F1E2C6',
  warmTaupe: '#C4A79C',
};

// Products data
const products = [
  // First category remains unchanged
  {
    category: "Veneer Sheets",
    description: "Veneer is a thin layer of wood sliced or peeled from logs, which is then applied to a substrate for a superior finish. We offer a wide range of veneer sheets, crafted from premium hardwoods. Our veneers are ideal for creating elegant and natural surfaces for furniture, cabinetry, flooring, and interior paneling.",
    types: [
      // Veneer types remain unchanged
      {
        name: 'Rotary Cut Face Veneer',
        imgSrc: '/assets/images/face-veneer.png',
        description: 'Rotary cut face veneers are made by peeling a log of wood in a continuous sheet using a rotary lathe, giving the veneer a unique and natural wood grain. This process is often used for creating a more uniform appearance for decorative surfaces.',
        details: [
          { thickness: '0.25mm to 0.6mm', description: 'Ultra-thin veneers for decorative applications.' },
          { thickness: '0.6mm to 1.0mm', description: 'Medium-thin veneer for residential and commercial uses.' },
          { thickness: '1.0mm to 1.5mm', description: 'Thicker veneer for high-durability applications.' }
        ],
        applications: [
          'Furniture and Cabinetry',
          'Interior Wall Cladding',
          'Decorative Panels and Doors',
          'Custom Joinery'
        ],
        sizes: [
          '8 Feet (2540mm x 1280mm)',
          '10 Feet (3170mm x 1580mm) (Big Format)'
        ]
      },
      {
        name: 'Core Veneer',
        imgSrc: '/assets/images/core-veneer.jpg',
        description: 'Core veneer is used as the internal layer of plywood, providing structural strength and stability. It is typically thicker than face veneer and plays a vital role in the overall strength of the plywood.',
        details: [
          { thickness: '1.0mm to 1.5mm', description: 'Thin core veneer for lighter construction.' },
          { thickness: '1.5mm to 2.0mm', description: 'Medium core veneer for balanced applications.' },
          { thickness: '2.0mm to 2.5mm', description: 'Strong core veneer for load-bearing plywood.' },
          { thickness: '2.5mm to 3.0mm', description: 'Thicker core veneer for heavy-duty applications.' },
          { thickness: '3.0mm to 3.2mm', description: 'Thickest core veneer for industrial-grade uses.' }
        ],
        applications: [
          'Plywood cores',
          'Furniture Frames',
          'Structural Applications'
        ],
        sizes: [
          '8 Feet (2540mm x 1280mm)',
          '10 Feet (3170mm x 1580mm) (Big Format)'
        ]
      }
    ]
  },
  {
    category: "Plywood",
    description: "Our plywood is made from high-quality hardwood and softwood veneers bonded together with durable adhesives, providing strength, stability, and versatility. Plywood is an essential material used in a variety of applications, from construction to furniture manufacturing.",
    types: [
      // Commercial and Construction plywood types remain unchanged
      {
        name: 'Commercial Plywood',
        imgSrc: '/assets/images/commercial.jpg',
        description: 'Standard plywood suitable for general-purpose use in construction and furniture-making.',
        details: [
          { thickness: '3mm to 6mm', description: 'Lightweight for decorative and low-stress applications.' },
          { thickness: '9mm to 18mm', description: 'Medium thickness for structural purposes.' },
          { thickness: '20mm to 30mm', description: 'Stronger plywood for heavier furniture needs.' },
          { thickness: '30mm to 40mm', description: 'Thick plywood for heavy-duty applications.' }
        ],
        applications: [
          'Furniture (Chairs, Tables, Shelving)',
          'Interior Paneling',
          'Cabinets',
          'Storage Solutions'
        ],
        sizes: [
          '8 Feet (2500mm x 1220mm/1250mm)',
          '10 Feet (3100mm x 1530mm) (Big Format)'
        ]
      },
      {
        name: 'Construction Plywood',
        imgSrc: '/assets/images/constructive.jpg',
        description: 'Durable and versatile for structural applications.',
        details: [
          { thickness: '3mm to 6mm', description: 'Thin plywood for non-structural applications.' },
          { thickness: '9mm to 18mm', description: 'Ideal for medium-duty structural work.' },
          { thickness: '20mm to 30mm', description: 'Thick plywood for heavy load-bearing.' },
          { thickness: '30mm to 40mm', description: 'Thickest construction plywood for demanding tasks.' }
        ],
        applications: [
          'Subflooring',
          'Wall Sheathing',
          'Roofing Panels',
          'Exterior Framing',
          'Formwork'
        ],
        sizes: [
          '8 Feet (2500mm x 1220mm/1250mm)',
          '10 Feet (3100mm x 1530mm) (Big Format)'
        ]
      },
      // Updated Marine plywood with additional size
      {
        name: 'Marine Plywood',
        imgSrc: '/assets/images/marine.jpg',
        description: 'Designed for water exposure, perfect for boat building.',
        details: [
          { thickness: '6mm to 12mm', description: 'Lighter marine plywood for boat interiors.' },
          { thickness: '12mm to 18mm', description: 'Standard thickness for marine applications.' },
          { thickness: '18mm to 25mm', description: 'Thicker marine plywood for structural components.' }
        ],
        applications: [
          'Boat Building',
          'Marine Furniture',
          'Dock Construction',
          'Outdoor Applications'
        ],
        sizes: [
          '8 Feet (2500mm x 1220mm)',
          '10 Feet (3100mm x 1530mm) (Big Format)',
          '3100/3050 x 1530/1525 mm' // Added new size
        ]
      },
      // Updated Laminated plywood with additional size
      {
        name: 'Laminated Plywood',
        imgSrc: '/assets/images/laminated.jpg',
        description: 'Cost-effective, used in various construction applications.',
        details: [
          { thickness: '3mm to 6mm', description: 'Thin laminated plywood with various finishes.' },
          { thickness: '9mm to 18mm', description: 'Good balance of strength and aesthetics.' },
          { thickness: '20mm to 30mm', description: 'Durable laminated plywood for medium-duty applications.' },
          { thickness: '30mm to 40mm', description: 'Thick laminated plywood for industrial furniture.' }
        ],
        applications: [
          'Decorative Furniture',
          'Wall Panels',
          'Cabinet Doors',
          'Large-scale Commercial Projects'
        ],
        sizes: [
          '8 Feet (2500mm x 1220mm/1250mm)',
          '10 Feet (3100mm x 1530mm) (Big Format)',
          '3100/3050 x 1530/1525 mm' // Added new size
        ]
      }
    ]
  }
];

const ProductsSection = () => {
   const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

  // Accordion toggle handler
  const toggleAccordion = (productIndex, section) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [`${productIndex}-${section}`]: !prev[`${productIndex}-${section}`]
    }));
  };

  // Modal handlers
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const BulletPoint = ({ text, isCompact = false }) => (
    <li className="flex items-start group transition-all duration-300">
      <div className="relative flex-shrink-0 mt-1.5">
        <div className="absolute w-3 h-3 rounded-full bg-[#7B3F00] group-hover:bg-[#8B4F10] transition-colors"></div>
        <div className="absolute w-3 h-3 rounded-full bg-[#7B3F00] opacity-25 group-hover:opacity-40 scale-150 transition-all"></div>
      </div>
      <span className={`text-[#7B3F00] ml-5 ${isCompact ? "text-sm md:text-base" : "text-base md:text-lg"} leading-tight group-hover:text-[#8B4F10] transition-colors`}>
        {text}
      </span>
    </li>
  );
  

  return (
    <section className="py-6 md:py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C]">
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
            Exquisite veneers and premium plywood crafted with precision and excellence
          </p>
        </motion.div>

        <Tab.Group>
          <Tab.List className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 bg-transparent mb-20 max-w-3xl mx-auto">
            {products.map((category) => (
              <Tab
                key={category.category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-4 text-lg font-medium leading-5 rounded-xl transition-all duration-300',
                    'focus:outline-none shadow-lg',
                    selected
                      ? 'bg-[#7B3F00] text-white border-2 border-white/20'
                      : 'bg-[#F1E2C6] text-[#3E2A47] hover:bg-[#C4A79C] hover:text-white'
                  )
                }
              >
                {category.category}
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels>
            {products.map((category, idx) => (
              <Tab.Panel
                key={idx}
                className="rounded-2xl p-6 md:p-10 lg:p-16"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-24"
                >
                  <div className="bg-[#F1E2C6]/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl">
                    <p className="text-xl md:text-2xl text-[#3E2A47] max-w-5xl mx-auto leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
                    {category.types.map((product, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#F1E2C6] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-[#7B3F00]/30 transform transition-all duration-500"
                        whileHover={{ scale: 1.02, y: -10 }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                      >
                        <div className="relative h-80 md:h-96">
                          <Image
                            src={product.imgSrc}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h3>
                            <div className="w-20 h-1 bg-[#C4A79C]"></div>
                          </div>
                        </div>
                        
                        <div className="p-8 md:p-10">
                          <p className="text-lg md:text-xl text-[#7B3F00] mb-10 leading-relaxed">
                            {product.description}
                          </p>
                          
                          {/* Thickness Options */}
                          <div className="mb-10">
                            <h4 className="text-xl md:text-2xl font-bold text-[#3E2A47] mb-4 flex items-center">
                              <span className="w-6 h-6 rounded-full bg-[#7B3F00] mr-3 flex items-center justify-center text-white text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </span>
                              Thickness Options
                            </h4>
                            <div className="bg-[#D1B49D]/30 rounded-xl p-6 space-y-4">
                              {product.details.map((detail, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-center">
                                  <span className="font-semibold text-[#3E2A47] md:min-w-[200px] md:mr-4 mb-1 md:mb-0">
                                    {detail.thickness}
                                  </span>
                                  <span className="text-[#7B3F00]">{detail.description}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Applications - Improved Bullet Points */}
                          <div className="mb-10">
                            <h4 className="text-xl md:text-2xl font-bold text-[#3E2A47] mb-4 flex items-center">
                              <span className="w-6 h-6 rounded-full bg-[#7B3F00] mr-3 flex items-center justify-center text-white text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                              </span>
                              Applications
                            </h4>
                            <div className="bg-[#D1B49D]/30 rounded-xl p-6">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-4">
                                {product.applications.map((app, i) => (
                                  <BulletPoint key={i} text={app} />
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {/* Available Sizes - Improved Bullet Points */}
                          <div>
                            <h4 className="text-xl md:text-2xl font-bold text-[#3E2A47] mb-4 flex items-center">
                              <span className="w-6 h-6 rounded-full bg-[#7B3F00] mr-3 flex items-center justify-center text-white text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                </svg>
                              </span>
                              Available Sizes
                            </h4>
                            <div className="bg-[#D1B49D]/30 rounded-xl p-6">
                              <ul className="space-y-4">
                                {product.sizes.map((size, i) => (
                                  <BulletPoint key={i} text={size} isCompact={true} />
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <motion.div 
          className="mt-24 text-center bg-[#3E2A47] p-10 md:p-16 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-nexaBold font-bold text-[#F1E2C6] mb-6">
            Premium Quality, Exceptional Results
          </h3>
          <p className="text-xl text-[#C4A79C] max-w-4xl mx-auto mb-10 leading-relaxed">
            At Classic Veneer, we pride ourselves on delivering premium quality products that meet international standards. 
            Our commitment to sustainability ensures that all our wood products are sourced from responsibly managed forests.
          </p>
          
          <motion.button 
            onClick={openModal}
            href="/contact"
            className="inline-block bg-[#7B3F00] text-[#F1E2C6] font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#7B3F00]/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>
            {showModal && <Modal onClose={closeModal} />}
    </section>
  );
};

export default ProductsSection;