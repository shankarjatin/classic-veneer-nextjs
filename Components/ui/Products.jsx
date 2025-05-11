'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';

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
  {
    category: "Veneer Sheets",
    description: "Veneer is a thin layer of wood sliced or peeled from logs, which is then applied to a substrate for a superior finish. We offer a wide range of veneer sheets, crafted from premium hardwoods. Our veneers are ideal for creating elegant and natural surfaces for furniture, cabinetry, flooring, and interior paneling.",
    types: [
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
          '10 Feet (3100mm x 1530mm) (Big Format)'
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
          '10 Feet (3100mm x 1530mm) (Big Format)'
        ]
      }
    ]
  }
];

const ProductsSection = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C]">
      <motion.h2 
        className="text-4xl lg:text-6xl font-extrabold text-[#3E2A47] text-center mb-10 lg:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Products
      </motion.h2>

      <Tab.Group>
        <Tab.List className="flex space-x-4 bg-[#F1E2C6] p-1 rounded-xl mb-16 max-w-3xl mx-auto">
          {products.map((category) => (
            <Tab
              key={category.category}
              className={({ selected }) =>
                classNames(
                  'w-full py-3 text-lg font-medium leading-5 rounded-lg',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B3F00]',
                  selected
                    ? 'bg-[#7B3F00] text-white shadow'
                    : 'text-[#3E2A47] hover:bg-[#C4A79C]/60'
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
              className="bg-[#F1E2C6]/30 rounded-xl p-6 lg:p-10"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-[#3E2A47] mb-12 max-w-5xl mx-auto">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {category.types.map((product, index) => (
                    <motion.div
                      key={index}
                      className="bg-[#F1E2C6] p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-[#7B3F00]/30 transform transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={product.imgSrc}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <h3 className="text-3xl font-bold text-[#3E2A47] mb-4">{product.name}</h3>
                      
                      <p className="text-lg text-[#7B3F00] mb-6">
                        {product.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-[#3E2A47] mb-3">Thickness Options:</h4>
                        <div className="bg-[#D1B49D]/50 rounded-lg p-4">
                          {product.details.map((detail, i) => (
                            <div key={i} className="mb-2 last:mb-0 flex">
                              <span className="font-semibold text-[#3E2A47] min-w-[180px]">{detail.thickness}:</span>
                              <span className="text-[#7B3F00]">{detail.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-[#3E2A47] mb-3">Applications:</h4>
                        <ul className="list-disc list-inside bg-[#D1B49D]/50 rounded-lg p-4">
                          {product.applications.map((app, i) => (
                            <li key={i} className="text-[#7B3F00] mb-1 last:mb-0">{app}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-[#3E2A47] mb-3">Available Sizes:</h4>
                        <ul className="list-disc list-inside bg-[#D1B49D]/50 rounded-lg p-4">
                          {product.sizes.map((size, i) => (
                            <li key={i} className="text-[#7B3F00] mb-1 last:mb-0">{size}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      <div className="mt-16 text-center">
        <p className="text-xl text-[#3E2A47] mb-8 max-w-4xl mx-auto">
          At Classic Veneer, we pride ourselves on delivering premium quality products that meet international standards. 
          Our commitment to sustainability ensures that all our wood products are sourced from responsibly managed forests.
        </p>
        
        <motion.button 
          className="bg-[#7B3F00] text-[#F1E2C6] font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#7B3F00]/40 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Quote
        </motion.button>
      </div>
    </div>
  );
};

export default ProductsSection;