import React from 'react';
import commercial from '../assets/images/commercial.jpg';
import constructive from '../assets/images/constructive.jpg';
import laminated from '../assets/images/laminated.jpg';
import marine from '../assets/images/marine.jpg';
import face from '../assets/images/face-veneer.png';
import core from '../assets/images/core-veneer.jpg'
const services = [
  { name: 'Commercial Plywood', imgSrc: commercial , description: ' Ideal for furniture and cabinetry. ' },
    { name: 'Construction Plywood', imgSrc: constructive , description: ' Durable and versatile for structural applications. '},
    { name: 'Laminated Plywood', imgSrc: laminated , description: ' Designed for water exposure, perfect for boat building.  ' },
    { name: 'Marine Plywood', imgSrc: marine , description: ' Suitable for various applications, including furniture, flooring, and structural elements. ' },
    { name: "Face Veneer" , imgSrc: face, description: ' High-quality veneer for a smooth finish. ' },
    { name: "Core Veneer" , imgSrc: core, description: ' Used as a base for laminated plywood. ' }
];

const ServicesSection = () => {
  return (
    <div className="py-10 px-4 bg-gradient-to-r from-light-oak via-creamy-beige to-warm-taupe">
     <h2 className="text-4xl lg:text-6xl font-extrabold text-dark-walnut text-center mb-10 lg:mb-20">
  Our <br className="lg:hidden" /> Products
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 px-10 lg:px-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-creamy-beige p-6 rounded-xl shadow-2xl shadow-orange-500 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-800"
          >
            <img
              src={service.imgSrc}
              alt={service.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-dark-walnut mb-2">{service.name}</h3>
            <p className="text-lg text-chestnut-brown">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
