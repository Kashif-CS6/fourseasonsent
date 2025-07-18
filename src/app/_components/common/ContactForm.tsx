"use client";
import Image from "next/image";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzzvzkyl"); // Replace with your Form ID

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Thank you!
        </h2>
        <p className="text-gray-600">
          Your message has been sent successfully.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4 py-10 px-4 xl:px-0 font-sans">
        <h1 className="text-[36px] md:text-[45px] font-[600] text-center leading-[44px] tracking-[-2%]">
          Get In touch
        </h1>
        <p
          id="contact"
          className="text-center text-[20px] font-[400] text-[#667085]"
        >
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>

      <div className="flex justify-between flex-wrap md:flex-nowrap font-sans pt-20 pb-30 px-4 2xl:px-0">
        {/* Left Side (Form) */}
        <form
          onSubmit={handleSubmit}
          className="w-[480px] h-[576px] flex flex-col justify-between"
        >
          {/* First Name, Last Name */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                id="firstName"
                type="text"
                required
                name="firstName"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-md px-3 h-[48px] focus:outline-none focus:ring-1 focus:ring-green-400"
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md px-3 h-[48px] focus:outline-none focus:ring-1 focus:ring-green-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full border border-gray-300 rounded-md px-3 h-[48px] focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone number
            </label>
            <div className="flex">
              <div className="border flex justify-center items-center border-gray-300 rounded-l-md px-3 h-[48px] bg-green-50">
                <p className="text-gray-400">PK</p>
              </div>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="+923000000000"
                className="w-full border-t border-b border-r border-gray-300 rounded-r-md px-3 h-[48px] focus:outline-none focus:ring-1 focus:ring-green-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Your message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-sans font-medium h-[48px] rounded-md transition"
          >
            {state.submitting ? "Sending..." : "Send message"}
          </button>
        </form>

        {/* Right side image */}
        <div className="hidden md:flex">
          <Image src={"/flowers.svg"} width={600} height={405} alt="Flowers" />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
