"use client";

import React, { useRef, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const EnquireModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const scrollY = `-${window.scrollY}px`;
      document.body.style.setProperty("--scroll-y", scrollY);
      document.body.classList.add("modal-open");
    } else {
      const scrollY = document.body.style.getPropertyValue("--scroll-y");
      document.body.classList.remove("modal-open");
      window.scrollTo(0, parseInt(scrollY) * -1);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="
        fixed inset-0 flex items-center justify-center bg-[#d2f4da] bg-opacity-50 backdrop-blur-sm z-50
      "
      onMouseDown={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoCloseSharp size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>

        {/* @ts‑ignore */}
        <form action="/api/enquiry" method="post" className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Hotel/Business Name *
            </label>
            <input
              type="text"
              name="businessName"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Contact Number *</label>
            <input
              type="tel"
              name="contactNumber"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Type of Requirement *
            </label>
            <select
              name="requirementType"
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select an option</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="pulses">Pulses</option>
              <option value="all">All of the above</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">
              Estimated Quantity / Frequency *
            </label>
            <select
              name="quantityFrequency"
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="bulk">Bulk</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">
              Preferred Start/Delivery Date
            </label>
            <input
              type="date"
              name="startDate"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Additional Message / Specific Requirements
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireModal;
