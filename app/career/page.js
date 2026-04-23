'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: '',
    experience: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.position || !formData.message) {
      setIsError(true);
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');
    setIsError(false);

    try {
      const response = await fetch('/api/career-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || 'Failed to submit application.');
      }

      setStatusMessage('Application submitted successfully. Our team will contact you soon.');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        position: '',
        experience: '',
        message: '',
      });
    } catch (error) {
      setIsError(true);
      setStatusMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C] py-10 px-4 sm:px-6 md:px-10 font-montserrat">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E2A47] mb-3">Careers at Classic Veneer</h1>
          <div className="w-24 h-1 bg-[#7B3F00] mx-auto mb-4"></div>
          <p className="text-[#7B3F00] text-base sm:text-lg max-w-2xl mx-auto">
            Join our team and help us build sustainable, premium veneer and plywood solutions.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#F1E2C6] rounded-xl shadow-lg p-5 sm:p-8 md:p-10 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-[#3E2A47] mb-1">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-[#D1B49D] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7B3F00]"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#3E2A47] mb-1">Phone Number</label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-[#D1B49D] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7B3F00]"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#3E2A47] mb-1">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#D1B49D] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7B3F00]"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-semibold text-[#3E2A47] mb-1">Position Applied For *</label>
              <input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full border border-[#D1B49D] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7B3F00]"
                placeholder="e.g., Production Supervisor"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-semibold text-[#3E2A47] mb-1">Years of Experience</label>
            <input
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border border-[#D1B49D] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7B3F00]"
              placeholder="e.g., 5 years"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#3E2A47] mb-1">Why should we hire you? *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-[#D1B49D] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7B3F00]"
              placeholder="Tell us about your skills and background"
              required
            />
          </div>

          {statusMessage ? (
            <p className={`text-sm ${isError ? 'text-red-600' : 'text-green-700'}`}>
              {statusMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-auto bg-[#7B3F00] text-[#F1E2C6] font-semibold py-3 px-8 rounded-md transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#8B4F10]'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default CareerPage;
