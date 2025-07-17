import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-10 md:pt-0 flex flex-col justify-end gap-20 font-sans ">
      {/* top section */}
      <div className="flex justify-between gap-2 px-4 2xl:px-0 py-6">
        <div className="flex flex-col gap-2">
          {/* level 1 */}
          <div className="w-[277.83px] flex flex-col gap-6">
            <Image
              src={"/logo.png"}
              width={130}
              height={40}
              alt="logo"
              className="w-[180px] h-[40px] xl:w-[200px] xl:h-[50px] object-cover"
            />
          </div>
          {/* links */}
          <div className=" text-[16px] hidden lg:flex gap-4 leading-[100%]">
            <Link className={`${"text-black"} rounded-[106.18px] `} href={"/"}>
              Home
            </Link>
            <Link
              href={"/#about"}
              className={`${"text-black"} rounded-[106.18px] `}
            >
              About us
            </Link>

            <Link
              href={"/#product"}
              className={`${"text-black"} rounded-[106.18px] `}
            >
              Products
            </Link>
            <Link href={"/#contact"} className={` rounded-[106.18px] `}>
              Contact us
            </Link>
          </div>
        </div>
        <div className="text-white flex  justify-center gap-6">
          <button className="relative">
            <Image
              src={"/instagram.svg"}
              alt="Instagram"
              width={36}
              height={36}
            />
          </button>
          <button className="relative">
            <Image
              src={"/facebook.svg"}
              alt="Facebook"
              width={36}
              height={36}
            />
          </button>
          <button className="relative">
            <Image
              src={"/pintrest.svg"}
              alt="Pintrest"
              width={36}
              height={36}
            />
          </button>
          <button className="relative">
            <Image src={"/twitter.svg"} alt="twitter" width={36} height={36} />
          </button>
          <button className="relative"></button>
        </div>
      </div>
      <div className="">
        <hr className="w-full bg-[#E2E8F0] text-[#E2E8F0]" />
        <p className="text-center py-6 text-[13px] font-[400]">
          © Copyright 2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
