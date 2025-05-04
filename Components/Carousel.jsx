'use client';
import * as React from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image"; // Import Next.js Image component
import phenol from '../assets/images/marine.jpg';
import commercial from '../assets/images/commercial.jpg';
import laminated from '../assets/images/laminated.jpg';

const images = [
  {
    title: "Phenol Formaldehyde (E0)",
    description: "High water resistance, low formaldehyde emission, used in marine plywood for a strong bond.",
    url: phenol,
  },
  {
    title: "Melamine Urea Formaldehyde (E1)",
    description: "Used for commercial plywood, offering good resistance to moisture and heat.",
    url: commercial,
  },
  {
    title: "Urea Formaldehyde (E2)",
    description: "Cost-effective, used in various construction applications.",
    url: laminated,
  },
];

const CarouselDemo = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-gradient-to-r from-light-oak via-creamy-beige to-warm-taupe p-32">
      <h2 className="text-4xl lg:text-6xl font-extrabold text-dark-walnut text-center mb-10 lg:mb-20">
        Types of Glue Used
      </h2>
      <Carousel className="relative w-full rounded-3xl overflow-hidden">
        <CarouselContent
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            height: '50vh',
            minHeight: '300px',
          }}
        >
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex-shrink-0 w-full h-full relative">
              <Image
                src={image.url}
                alt={image.title}
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Ensures the image maintains aspect ratio
                priority={index === 0} // Prioritize loading the first image
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-center px-8 lg:p-4">
                <div className="max-w-xs md:max-w-lg">
                  <h2 className="text-3xl lg:text-5xl sm:text-3xl md:text-2xl font-archivo font-bold">{image.title}</h2>
                  <p className="mt-2 text-md lg:text-lg font-archivo-100 sm:text-base md:text-base px-4">{image.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 sm:p-2 rounded-full text-lg sm:text-base">
          <FaArrowLeft />
        </CarouselPrevious>
        <CarouselNext onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 sm:p-2 rounded-full text-lg sm:text-base">
          <FaArrowRight />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;