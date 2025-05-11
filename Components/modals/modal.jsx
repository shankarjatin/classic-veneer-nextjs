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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Query submitted successfully!');
        onClose(); // Close the modal on success
      } else {
        throw new Error('Failed to submit query');
      }
    } catch (error) {
      toast.error('Failed to submit query. Please try again.');
    }
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm  z-40" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D1B49D] via-[#F1E2C6] to-[#C4A79C]  p-6 rounded-lg shadow-lg z-50 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Request a Callback</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Mobile Number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter Your Query"
            name="query"
            value={formData.query}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#7B3F00] text-[#F1E2C6] font-bold rounded-lg shadow-lg hover:shadow-lg hover:shadow-orange-500 transition py-2 px-4 mr-2"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Modal;