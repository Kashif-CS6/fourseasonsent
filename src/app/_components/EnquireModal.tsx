"use client";

import React, { useRef, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useForm, ValidationError } from "@formspree/react";

interface ModalProps {
  open: any;
  onClose: () => void;
}

const EnquireModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [state, handleSubmit] = useForm("xzzvzkyl"); // <-- your Formspree form ID

  // lock scroll behind modal
  useEffect(() => {
    if (open) {
      const scrollY = `-${window.scrollY}px`;
      document.body.style.setProperty("--scroll-y", scrollY);
      document.body.classList.add("modal-open");
    } else {
      const scrollY = document.body.style.getPropertyValue("--scroll-y");
      document.body.classList.remove("modal-open");
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-50"
      onMouseDown={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <IoCloseSharp size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>

        {state.succeeded ? (
          <div className="py-10 text-center space-y-3">
            <p className="text-2xl font-semibold text-green-600">Thank you!</p>
            <p className="text-gray-600">
              We’ve received your enquiry. We’ll get back to you soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name & Business */}
            <div className="flex justify-between items-end md:items-center flex-wrap gap-3">
              <div className="flex-1 min-w-[200px]">
                <label htmlFor="fullName" className="block font-medium mb-1">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                <ValidationError
                  prefix="Full Name"
                  field="fullName"
                  errors={state.errors}
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="businessName"
                  className="block font-medium mb-1"
                >
                  Hotel/Business Name *
                </label>
                <input
                  id="businessName"
                  type="text"
                  name="businessName"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                <ValidationError
                  prefix="Business Name"
                  field="businessName"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Contact number & Email */}
            <div className="flex items-end md:items-center justify-between gap-3 flex-wrap">
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="contactNumber"
                  className="block font-medium mb-1"
                >
                  Contact Number *
                </label>
                <input
                  id="contactNumber"
                  type="tel"
                  name="contactNumber"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                <ValidationError
                  prefix="Contact Number"
                  field="contactNumber"
                  errors={state.errors}
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full border px-3 py-2 rounded"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Requirement type & Qty */}
            <div className="flex items-end md:items-center justify-between gap-3 flex-wrap">
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="requirementType"
                  className="block font-medium mb-1"
                >
                  Type of Requirement *
                </label>
                <select
                  id="requirementType"
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
                <ValidationError
                  prefix="Requirement Type"
                  field="requirementType"
                  errors={state.errors}
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="quantityFrequency"
                  className="block font-medium mb-1"
                >
                  Estimated Quantity / Frequency *
                </label>
                <select
                  id="quantityFrequency"
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
                <ValidationError
                  prefix="Quantity / Frequency"
                  field="quantityFrequency"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Start date */}
            <div>
              <label htmlFor="startDate" className="block font-medium mb-1">
                Preferred Start/Delivery Date
              </label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                className="w-full border px-3 py-2 rounded"
              />
              <ValidationError
                prefix="Start Date"
                field="startDate"
                errors={state.errors}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Additional Message / Specific Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border px-3 py-2 rounded"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Hidden field: source (optional) */}
            <input type="hidden" name="form_source" value="enquire-modal" />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-green-600 text-white py-2 md:py-3 rounded hover:bg-green-700 transition"
            >
              {state.submitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquireModal;
