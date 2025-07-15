"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap justify-between py-20 px-4 2xl:px-0">
      {/* left side */}
      <div className="md:w-[663px] flex  flex-col gap-4">
        <button className="md:w-[445px] h-[47px] rounded-[360px] bg-white border-[1px] border-[#A9A7A7] tracking-wider">
          Supply Freshers & Quality for 25 Years
        </button>
        <div className="leading-[55px] md:leading-[60px]">
          <h1 className="text-[40px] md:text-[45px] font-[700]">Premium</h1>
          <h1 className="text-[#3BAC43] text-[40px] md:text-[45px] font-[700]">
            Fruits Vegetables & Pulses
          </h1>
          <h1 className="text-[40px] md:text-[45px] font-[700]">
            Delivered with Reliability and Care.
          </h1>
        </div>
        <p className="text-[18px] md:text-[20px] font-[400] text-[#403F3F] text-justify">
          For over two decades, Four Seasons Enterprises has been a trusted name
          in the wholesale supply of fresh fruits, handpicked vegetables, and
          high-quality pulses. We cater to retailers, hotels, and businesses
          that value consistent quality and timely delivery.
        </p>
        <div className="flex items-center gap-2 pt-4">
          <button className="w-[150px] md:w-[190px] h-[50px] bg-[#3BAC43] text-white rounded-md">
            Enquire Now
          </button>
          <Link
            onClick={() => localStorage.setItem("Tab", "contact")}
            href={"/#contact"}
            className="w-[150px] md:w-[190px] h-[50px] border-[1px] border-[#9B9B9B] rounded-md flex justify-center items-center"
          >
            Contact
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="">
        <Image
          src={"/hero-flowers.svg"}
          width={733}
          height={571}
          className="w-[733px] h-[571px]"
          alt="hero-flowers"
        />
      </div>
    </div>
  );
};

export default Hero;
