'use client';

import React, { useState } from 'react';
import Modal from '@/Components/modals/modal';

const ContactButton = ({ children, className, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    if (onClick) onClick(); // Execute any additional onClick handlers
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        onClick={openModal}
        className={className}
      >
        {children}
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default ContactButton;