import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[100px] font-sans    flex items-center justify-between px-2 2xl:px-0">
      {/* left */}
      <div>
        <Image src={"/logo.svg"} width={130} height={40} alt="logo" />
      </div>

      {/* middle */}
      <div className="font-[500] text-[15.93px] hidden lg:flex gap-1 leading-[100%]">
        <Link
          className="text-white bg-[#3BAC43] rounded-[106.18px] px-9 py-[11px]"
          href={"/"}
        >
          Home
        </Link>
        <Link href={"/#about"} className=" rounded-[106.18px] px-9 py-[11px]">
          About us
        </Link>
        <Link href={"/#contact"} className="rounded-[106.18px] px-9 py-[11px]">
          Contact us
        </Link>
        <Link href={"/"} className=" rounded-[106.18px] px-9 py-[11px]">
          Products
        </Link>
      </div>
      {/* right */}
      <button className="w-[160px] h-[45px] rounded-[6px]  font-[400] font-serif text-center flex items-center justify-center text-[18px] text-white bg-[#3BAC43]">
        Enquire Now
      </button>
    </nav>
  );
};

export default Navbar;
