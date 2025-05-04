'use client';
import { motion } from 'framer-motion';
import bgVideo from '../assets/videos/bgVideo.mp4';
import Modal from './modals/modal';
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // Set for 3 seconds (3000 milliseconds)

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);

  return (
    <div>
      {showModal && <Modal onClose={handleCloseModal} />}
      <section className="relative h-[100vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/90 z-1"></div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-8 z-10">
          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-creamy-beige drop-shadow-lg"
          >
            Discover Premium Plywood with <span className="text-orange-500">Classic Veneer</span>
          </motion.h1>

          {/* Hero Subtext */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Classic Veneer SARL, based in Gabon, offers high-quality plywood that combines strength, durability, and sustainability. Join us on a journey towards building a better tomorrow, one piece of plywood at a time.
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <Link href="/products">
              <a className="px-6 py-3 bg-chestnut-brown text-creamy-beige font-bold rounded-lg shadow-lg hover:shadow-lg hover:shadow-orange-500 transition">
                Our Products
              </a>
            </Link>
            <Link href="/about">
              <a className="px-6 py-3 bg-light-oak text-dark-walnut font-bold rounded-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500">
                Learn More
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;