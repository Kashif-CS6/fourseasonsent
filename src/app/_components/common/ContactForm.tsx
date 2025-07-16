import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap font-sans pt-20 pb-30 px-4 2xl:px-0">
      {/* Left Side (Form) */}
      <div className="w-[480px] h-[576px]  flex flex-col  justify-between">
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
            placeholder="you@company.com"
            className="w-full border border-gray-300 rounded-md px-3 h-[48px] focus:outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone number
          </label>
          <div className="flex">
            <select className="border border-gray-300 rounded-l-md px-3 h-[48px] focus:outline-none focus:ring-1 focus:ring-green-400 bg-green-50">
              <option value="US">US</option>
              <option value="PK">PK</option>
            </select>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
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
            rows={4}
            placeholder=""
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
          ></textarea>
        </div>

        {/* Agree to privacy policy */}
        <div className="flex items-center mb-4">
          <input
            id="agree"
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-400 border-gray-300 rounded"
          />
          <label htmlFor="agree" className="ml-2 text-[16px] font-[500]">
            You agree to our friendly{" "}
            <a href="#" className="underline text-green-600 font-[400]">
              privacy policy
            </a>
            .
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-sans font-medium h-[48px]  rounded-md transition"
        >
          Send message
        </button>
      </div>

      {/* right side image */}
      <div className="hidden md:flex ">
        <Image src={"/flowers.svg"} width={600} height={405} alt="Flowers" />
      </div>
    </div>
  );
};

export default ContactForm;
