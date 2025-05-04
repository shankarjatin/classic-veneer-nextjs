import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component
import './animate.css';

const companies = [
  { name: 'img1', imgSrc: 'https://i.ibb.co/Rvc8sg2/tim-meyer-NDQIHPA9-Iv0-unsplash.jpg' },
  { name: 'img2', imgSrc: 'https://i.ibb.co/VWFLV9c/alexander-isak-dk6e-Wb-Ck3c-unsplash.jpg' },
  { name: 'img3', imgSrc: 'https://i.ibb.co/0nvRHD6/simon-kadula-2ov-Brbf-Qr0-Y-unsplash.jpg' },
  { name: 'img4', imgSrc: 'https://i.ibb.co/bBfDqJ5/erik-house-bd2xd-LLm-Rs-unsplash.jpg' },
  { name: 'img5', imgSrc: 'https://i.ibb.co/TL1PQKp/greg-rosenke-y-Q9sl-R8-E5j-M-unsplash.jpg' },
  { name: 'img6', imgSrc: 'https://i.ibb.co/W0JHcW9/philcreates-x-Pti-N7-Oma-Xg-unsplash.jpg' },
  { name: 'img7', imgSrc: 'https://i.ibb.co/rw092P2/chris-briggs-ILBr-Hd6-PFJA-unsplash.jpg' },
  { name: 'img8', imgSrc: 'https://i.ibb.co/zSnv0LN/roger-goh-06-Lm2a-DAzq-Q-unsplash.jpg' },
  { name: 'img9', imgSrc: 'https://i.ibb.co/nMrw2ND/kriti-tara-Xy2-EGb-SEzt-A-unsplash-1.jpg' },
  { name: 'img10', imgSrc: 'https://i.ibb.co/vdMGhhR/ted-balmer-rq-z-HQt-Sv0-unsplash.jpg' },
  { name: 'img11', imgSrc: 'https://i.ibb.co/SKqjYzt/commercial-ply-board.jpg' },
  { name: 'img12', imgSrc: 'https://i.ibb.co/vwcZbQv/blogs-imgs-12.webp' },
  { name: 'img13', imgSrc: 'https://i.ibb.co/sbVDhcg/laminated.jpg' },
  { name: 'img14', imgSrc: 'https://i.ibb.co/nMrw2ND/kriti-tara-Xy2-EGb-SEzt-A-unsplash-1.jpg' },
  { name: 'img15', imgSrc: 'https://i.ibb.co/jRFd9hn/constructive.jpg' },
  { name: 'img16', imgSrc: 'https://i.ibb.co/CK1b8kJ/commercial.jpg' },
  { name: 'img17', imgSrc: 'https://i.ibb.co/ZgHBzhv/Whats-App-Image-2025-01-08-at-19-48-38-4b46e273.jpg' }
];

const PlacesScroll = () => {
  return (
    <div className="relative text-center py-8 lg:py-20 px-4 ">
      {/* Plywood Texture Background */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 15,
          ease: "easeInOut"
        }}
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')", // Plywood texture image
          backgroundSize: "cover",
          filter: "blur(100px)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-light-oak via-creamy-beige to-warm-taupe pointer-events-none"></div>

      <div className="relative overflow-hidden">
        {/* Scrolling Animation */}
        <motion.div
          className="flex animate-marquee whitespace-nowrap mt-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 flex justify-center items-center p-4"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={company.imgSrc}
                alt={company.name}
                width={176} // Set width for the image (44 * 4)
                height={176} // Set height for the image (44 * 4)
                className="object-cover rounded-lg mx-4"
              />
            </motion.div>
          ))}
          {companies.map((company, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className="flex-shrink-0 flex justify-center items-center p-4"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={company.imgSrc}
                alt={company.name}
                width={176} // Set width for the image (44 * 4)
                height={176} // Set height for the image (44 * 4)
                className="object-cover rounded-lg mx-4"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PlacesScroll;