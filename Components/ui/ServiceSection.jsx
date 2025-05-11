import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import commercial from '@/assets/images/commercial.jpg';
import constructive from '@/assets/images/constructive.jpg';
import laminated from '@/assets/images/laminated.jpg';
import marine from '@/assets/images/marine.jpg';
import face from '@/assets/images/face-veneer.png';
import core from '@/assets/images/core-veneer.jpg';

const services = [
  { name: 'Commercial Plywood', imgSrc: commercial, description: 'Ideal for furniture and cabinetry.' },
  { name: 'Construction Plywood', imgSrc: constructive, description: 'Durable and versatile for structural applications.' },
  { name: 'Laminated Plywood', imgSrc: laminated, description: 'Designed for water exposure, perfect for boat building.' },
  { name: 'Marine Plywood', imgSrc: marine, description: 'Suitable for various applications, including furniture, flooring, and structural elements.' },
  { name: 'Face Veneer', imgSrc: face, description: 'High-quality veneer for a smooth finish.' },
  { name: 'Core Veneer', imgSrc: core, description: 'Used as a base for laminated plywood.' },
];

const ServicesSection = () => {
  return (
    <div className="py-10 px-4 bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] ">
      <h2 className="text-4xl lg:text-6xl font-extrabold text-[#3E2A47] text-center mb-10 lg:mb-20">
        Our <br className="lg:hidden" /> Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 px-10 lg:px-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#F1E2C6] p-6 rounded-xl shadow-2xl shadow-orange-500 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-800"
          >
            <Image
              src={service.imgSrc}
              alt={service.name}
              width={400} // Set width for the image
              height={240} // Set height for the image
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-[#3E2A47] mb-2">{service.name}</h3>
            <p className="text-lg text-[#7B3F00]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;