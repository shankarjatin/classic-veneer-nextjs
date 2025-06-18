'use client';

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./Carousel";
import Image from "next/image";

const images = [
  {
    title: "Phenol Formaldehyde (E0)",
    description: "High water resistance, low formaldehyde emission, used in marine plywood for a strong bond.",
    url: "/assets/images/marine.jpg",
  },
  {
    title: "Melamine Urea Formaldehyde (E1)",
    description: "Used for commercial plywood, offering good resistance to moisture and heat.",
    url: "/assets/images/commercial.jpg",
  },
  {
    title: "Urea Formaldehyde (E2)",
    description: "Cost-effective, used in various construction applications.",
    url: "/assets/images/laminated.jpg",
  },
];

const CarouselDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Calculate progress percentage
  const progressPercentage = ((currentIndex + 1) / images.length) * 100;

  return (
    <div className="bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] p-2 sm:p-3 md:p-4">
      {/* Reduced heading size and spacing */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E2A47] text-center mb-4 sm:mb-6 md:mb-10">
        Types of Glue Used
      </h2>
      
      <Carousel className="relative w-full rounded-lg sm:rounded-xl md:rounded-3xl overflow-hidden">
        {/* Reduced height for mobile */}
        <CarouselContent
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            height: "30vh",
            minHeight: "200px", // Reduced from 300px
            maxHeight: "450px",
          }}
        >
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex-shrink-0 w-full h-full relative">
              <div className="relative w-full h-full">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2QxYjQ5ZCIvPjwvc3ZnPg=="
                  sizes="100vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallbackContainer = document.createElement('div');
                    fallbackContainer.className = 'w-full h-full bg-[#D1B49D] flex items-center justify-center';
                    const initials = document.createElement('span');
                    initials.className = 'text-xl font-bold text-[#7B3F00]';
                    initials.textContent = 'Image Unavailable';
                    fallbackContainer.appendChild(initials);
                    e.currentTarget.parentNode.appendChild(fallbackContainer);
                  }}
                />
              </div>
              
              {/* Improved mobile text overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/40 to-black/70 text-white text-center px-4 sm:px-6">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {image.title}
                  </h2>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base max-w-[90%] mx-auto">
                    {image.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Smaller navigation buttons for mobile */}
        <CarouselPrevious
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-3 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-1.5 sm:p-2 rounded-full"
        >
          <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        </CarouselPrevious>
        <CarouselNext
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-3 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-1.5 sm:p-2 rounded-full"
        >
          <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </CarouselNext>
        
        {/* Added slide indicator/progress bar */}
        <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center items-center px-4">
          <div className="w-full max-w-[100px] sm:max-w-[150px] bg-white/30 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-in-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;