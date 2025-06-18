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
  // Rest of product data unchanged
  {
    category: "Plywood",
    description: "Our plywood is made from high-quality hardwood and softwood veneers bonded together with durable adhesives, providing strength, stability, and versatility. Plywood is an essential material used in a variety of applications, from construction to furniture manufacturing.",
    types: [
      // Data unchanged - keeping all product types and details
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
      // Other product types unchanged
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
          '3100/3050 x 1530/1525 mm'
        ]
      },
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
          '3100/3050 x 1530/1525 mm'
        ]
      }
    ]
  }
];

const ProductsSection = () => {
  const [showModal, setShowModal] = useState(false);

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
      <div className="relative flex-shrink-0 mt-1">
        {/* Smaller bullet point */}
        <div className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#7B3F00] group-hover:bg-[#8B4F10] transition-colors"></div>
        <div className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#7B3F00] opacity-25 group-hover:opacity-40 scale-150 transition-all"></div>
      </div>
      {/* Smaller text */}
      <span className={`text-[#7B3F00] ml-3 sm:ml-5 ${isCompact ? "text-xs sm:text-sm md:text-base" : "text-xs sm:text-sm md:text-base"} leading-tight group-hover:text-[#8B4F10] transition-colors`}>
        {text}
      </span>
    </li>
  );
  
  // Reduced padding and spacing for mobile
  return (
    <section className="py-4 sm:py-6 md:py-12 px-3 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] font-montserrat">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-16 md:mb-24" // Reduced vertical spacing
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Smaller title on mobile */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2A47] mb-3 sm:mb-6">
            Our Products
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-0.5 sm:h-1 bg-[#7B3F00] mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          {/* Smaller description text */}
          <p className="text-base sm:text-lg md:text-xl text-[#7B3F00] max-w-3xl mx-auto px-2">
            Exquisite veneers and premium plywood crafted with precision and excellence
          </p>
        </motion.div>

        <Tab.Group>
          {/* Smaller tab buttons with reduced spacing */}
          <Tab.List className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-6 bg-transparent mb-8 sm:mb-12 md:mb-20 max-w-3xl mx-auto">
            {products.map((category) => (
              <Tab
                key={category.category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium leading-5 rounded-lg sm:rounded-xl transition-all duration-300',
                    'focus:outline-none shadow-md sm:shadow-lg',
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
                className="rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-10 lg:p-16"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-10 sm:space-y-16 md:space-y-24" // Reduced spacing between sections
                >
                  {/* More compact description panel */}
                  <div className="bg-[#F1E2C6]/40 backdrop-blur-sm p-4 sm:p-8 md:p-12 rounded-lg sm:rounded-2xl shadow-md sm:shadow-xl">
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#3E2A47] max-w-5xl mx-auto leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Smaller gaps between product cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {category.types.map((product, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#F1E2C6] rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg hover:shadow-[#7B3F00]/30 transform transition-all duration-500"
                        whileHover={{ scale: 1.01, y: -5 }} // Reduced hover effect for mobile
                        initial={{ opacity: 0, y: 20 }} // Reduced animation distance
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Faster animations for mobile
                      >
                        {/* Smaller image container */}
                        <div className="relative h-48 sm:h-64 md:h-80">
                          <Image
                            src={product.imgSrc}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                            {/* Smaller product title */}
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                              {product.name}
                            </h3>
                            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-[#C4A79C]"></div>
                          </div>
                        </div>
                        
                        {/* More compact content layout */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#7B3F00] mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                            {product.description}
                          </p>
                          
                          {/* Thickness Options - More compact */}
                          <div className="mb-6 sm:mb-8 md:mb-10">
                            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#3E2A47] mb-2 sm:mb-4 flex items-center">
                              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#7B3F00] mr-2 sm:mr-3 flex items-center justify-center text-white text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </span>
                              Thickness Options
                            </h4>
                            {/* Smaller padding and text */}
                            <div className="bg-[#D1B49D]/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-4">
                              {product.details.map((detail, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-center">
                                  <span className="font-semibold text-[#3E2A47] text-xs sm:text-sm md:text-base md:min-w-[200px] md:mr-4 mb-1 md:mb-0">
                                    {detail.thickness}
                                  </span>
                                  <span className="text-[#7B3F00] text-xs sm:text-sm md:text-base">{detail.description}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Applications - More compact */}
                          <div className="mb-6 sm:mb-8 md:mb-10">
                            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#3E2A47] mb-2 sm:mb-4 flex items-center">
                              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#7B3F00] mr-2 sm:mr-3 flex items-center justify-center text-white text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                              </span>
                              Applications
                            </h4>
                            {/* Smaller padding and grid gap */}
                            <div className="bg-[#D1B49D]/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 gap-y-2 sm:gap-y-4">
                                {product.applications.map((app, i) => (
                                  <BulletPoint key={i} text={app} />
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {/* Available Sizes - More compact */}
                          <div>
                            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#3E2A47] mb-2 sm:mb-4 flex items-center">
                              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#7B3F00] mr-2 sm:mr-3 flex items-center justify-center text-white text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                </svg>
                              </span>
                              Available Sizes
                            </h4>
                            {/* Smaller padding and spacing */}
                            <div className="bg-[#D1B49D]/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                              <ul className="space-y-2 sm:space-y-4">
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

        {/* CTA Section - More compact for mobile */}
        <motion.div 
          className="mt-10 sm:mt-16 md:mt-24 text-center bg-[#3E2A47] p-5 sm:p-8 md:p-12 lg:p-16 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Smaller headings and text */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F1E2C6] mb-3 sm:mb-4 md:mb-6">
            Premium Quality, Exceptional Results
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#C4A79C] max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-1 sm:px-0">
            At Classic Veneer, we pride ourselves on delivering premium quality products that meet international standards. 
            Our commitment to sustainability ensures that all our wood products are sourced from responsibly managed forests.
          </p>
          
          {/* Smaller button */}
          <motion.button 
            onClick={openModal}
            className="inline-block bg-[#7B3F00] text-[#F1E2C6] font-medium sm:font-bold text-sm sm:text-base md:text-lg py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-md sm:rounded-lg shadow-md sm:shadow-lg hover:shadow-lg hover:shadow-[#7B3F00]/40 transition-all duration-300"
            whileHover={{ scale: 1.03 }} // Reduced hover scale for mobile
            whileTap={{ scale: 0.97 }}
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