import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="md:h-[474px] flex flex-col justify-end gap-20 ">
      {/* top section */}
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-4 md:gap-0 px-4 2xl:px-0">
        {/* level 1 */}
        <div className="w-[277.83px] flex flex-col gap-6">
          <Image
            src={"/circle-logo.svg"}
            width={126}
            height={34.97}
            alt="circle-logo"
          />
          <p className="text-[#71717A]">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>
        {/* level 2 */}
        <div className="w-[106px] flex flex-col gap-6 text-[13px] font-[600] leading-[17.1px] tracking-[0.95px]">
          <h1 className="text-[#94A3B8]">COMPANY</h1>
          <Link href={"/"} className="leading-[22.68px] text-[15.12px]">
            About
          </Link>
          <Link href={"/"} className="leading-[22.68px] text-[15.12px]">
            Features
          </Link>
          <Link href={"/"} className="leading-[22.68px] text-[15.12px]">
            Works
          </Link>
          <Link href={"/"} className="leading-[22.68px] text-[15.12px]">
            Careers
          </Link>
        </div>
        {/* level 3 */}
        <div className=" flex flex-col gap-6 text-[13px] font-[600] leading-[17.1px] tracking-[0.95px]">
          <h1 className="text-[#94A3B8]">HELP</h1>
          <Link href={"/"} className="leading-[22.68px] text-[15.12px]">
            Customer Support
          </Link>
          <Link href={"/"} className="leading-[22.68px] text-[15.12px]">
            Delivery Details
          </Link>
          <Link href={"/"} className="leading-[22.68px] text-[15.12px]">
            Terms & Conditions
          </Link>
          <Link href={"/"} className="leading-[22.68px] text-[15.12px]">
            Privacy Policy
          </Link>
        </div>

        {/* level 4 */}
        <div className="flex flex-col gap-6 text-[13px] font-[600] leading-[17.1px] tracking-[0.95px]">
          <h1 className="text-[#94A3B8]">NEWSLETTER</h1>
          <div className="border w-[290px] h-[51.97px] rounded-[9.45px] border-[#E4E4E7] flex items-center px-4">
            <input
              type="email"
              name=""
              className="border-none outline-none w-full text-[15px] font-[400]"
              placeholder="Enter your email address"
              id=""
            />
          </div>
          <button className="bg-[#3BAC43] text-white rounded-[9.45px]  h-[51.97px] text-[15px] font-[400]">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="">
        <hr className="w-full bg-[#E2E8F0] text-[#E2E8F0]" />
        <p className="text-center py-8 text-[13px] font-[400]">
          © Copyright 2022, All Rights Reserved by asad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
