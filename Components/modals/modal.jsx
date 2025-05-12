'use client';

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.query) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message has been sent successfully!');
        setTimeout(() => {
          onClose(); // Close the modal after showing success message
        }, 1500);
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to submit query');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to submit query. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black/50 z-40" onClick={onClose} />
      <div className="fixed top-[300px] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] p-3 sm:p-5
                     rounded-lg shadow-xl z-50 w-[95%] sm:w-full max-w-lg max-h-[85vh] 
                     overflow-y-auto">
        <div className="flex justify-between items-center mb-3 sticky top-0 bg-[#F1E2C6] py-2 px-1 rounded-t-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-[#3E2A47]">Contact Us</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p className="text-[#7B3F00] mb-3 sm:mb-4 px-1">Fill out the form below and we'll get back to you as soon as possible.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="mb-2 sm:mb-3">
              <label htmlFor="name" className="block text-sm font-medium text-[#3E2A47] mb-1">Full Name *</label>
              <input
                id="name"
                className="w-full p-2 border border-[#D1B49D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F00] text-base"
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-2 sm:mb-3">
              <label htmlFor="number" className="block text-sm font-medium text-[#3E2A47] mb-1">Mobile Number</label>
              <input
                id="number"
                className="w-full p-2 border border-[#D1B49D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F00] text-base"
                placeholder="Enter your phone number"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="mb-2 sm:mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-[#3E2A47] mb-1">Email Address *</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-[#D1B49D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F00] text-base"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3 sm:mb-4">
            <label htmlFor="query" className="block text-sm font-medium text-[#3E2A47] mb-1">Your Message *</label>
            <textarea
              id="query"
              className="w-full p-2 border border-[#D1B49D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F00] min-h-[70px] sm:min-h-[80px] text-base"
              placeholder="How can we help you?"
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex space-x-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 bg-[#7B3F00] text-[#F1E2C6] font-bold rounded-lg py-2 px-3
                        shadow-lg hover:shadow-lg hover:shadow-[#7B3F00]/30 transition text-sm sm:text-base
                        ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Submit'}
            </button>
            
            <button
              type="button"
              className="bg-gray-200 text-[#3E2A47] font-bold py-2 px-3 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}

export default Modal;