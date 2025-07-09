import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap justify-between py-20 px-4 2xl:px-0">
      {/* left side */}
      <div className="md:w-[663px] flex  flex-col gap-4">
        <button className="md:w-[445px] h-[47px] rounded-[360px] bg-white border-[1px] border-[#A9A7A7] tracking-wider">
          Supply Freshers & Quality for 25 Years
        </button>
        <div className="leading-[55px]">
          <h1 className="text-[40px] font-[700]">Organic Foods</h1>
          <h1 className="text-[#3BAC43] text-[40px] font-[700]">
            Your Doorsteps
          </h1>
          <h1 className="text-[40px] font-[700]">Freshness Delivered.</h1>
        </div>
        <p className="text-[18px] font-[400] text-[#403F3F] text-justify">
          Experience the true taste of nature with fresh, organic foods
          delivered straight to your doorstep, making healthy living simple and
          convenient
        </p>
        <div className="flex items-center gap-2 pt-4">
          <button className="w-[150px] md:w-[190px] h-[50px] bg-[#3BAC43] text-white rounded-md">
            Enquire Now
          </button>
          <button className="w-[150px] md:w-[190px] h-[50px] border-[1px] border-[#9B9B9B] rounded-md">
            Contact
          </button>
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
