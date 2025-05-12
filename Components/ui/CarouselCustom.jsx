'use client';

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./Carousel";
import Image from "next/image"; // Next.js Image component for optimized image loading

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

  return (
    <div className="bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] p-16">
      <h2 className="text-4xl lg:text-6xl font-extrabold text-[#3E2A47] text-center mb-10 lg:mb-20">
        Types of Glue Used
      </h2>
      <Carousel className="relative w-full rounded-3xl overflow-hidden">
        <CarouselContent
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            height: "50vh",
            minHeight: "300px",
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
                  priority={index === 0} // Prioritize the first image for faster loading
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2QxYjQ5ZCIvPjwvc3ZnPg=="
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallbackContainer = document.createElement('div');
                    fallbackContainer.className = 'w-full h-full bg-[#D1B49D] flex items-center justify-center';
                    const initials = document.createElement('span');
                    initials.className = 'text-3xl font-bold text-[#7B3F00]';
                    initials.textContent = 'Image Unavailable';
                    fallbackContainer.appendChild(initials);
                    e.currentTarget.parentNode.appendChild(fallbackContainer);
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/40 to-black/70 text-white text-center px-8 lg:p-4">
                <div className="max-w-xs md:max-w-lg">
                  <h2 className="text-3xl lg:text-5xl sm:text-3xl md:text-2xl font-archivo font-bold">
                    {image.title}
                  </h2>
                  <p className="mt-2 text-md lg:text-lg font-archivo-100 sm:text-base md:text-base px-4">
                    {image.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 sm:p-2 rounded-full text-lg sm:text-base"
        >
          <FaArrowLeft />
        </CarouselPrevious>
        <CarouselNext
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 sm:p-2 rounded-full text-lg sm:text-base"
        >
          <FaArrowRight />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;