import Image from "next/image";
import React from "react";

const Aboutus = () => {
  return (
    <div className="my-2 xl:h-[541px]  flex items-center flex-wrap  justify-between p-4">
      {/* Left Side */}
      <div className="w-[644px] p-6 rounded-md font-serif">
        <h2 className="text-[40px] font-[700] mb-4">About us</h2>

        {/* Company History */}
        <h3 className="text-[20px] font-[700] mb-2">Company History</h3>
        <p className="text-[#6C6C6C] text-[16px] font-[400] mb-4 leading-[30px]">
          For over 25 years, [Your Company Name] has built a reputation for
          trust, reliability, and consistent quality in fresh produce supply. We
          have become a preferred partner for institutions that value freshness
          and timely delivery.
        </p>

        {/* Mission & Values */}
        <h3 className="text-[20px] font-[700] mb-2">Mission & Values</h3>
        <ul className="list-disc list-inside text-[#6C6C6C] space-y-1b text-[16px] font-[400] leading-[30px]">
          <li>
            <span className="font-semibold">Mission:</span> To deliver fresh,
            high-quality produce with exceptional service.
          </li>
          <li>
            <span className="font-semibold">Values:</span> Quality | Consistency
            | Service | Integrity
          </li>
        </ul>
      </div>
      {/* right side */}
      <div>
        <Image
          src={"/about-flowers.svg"}
          alt="about-flowers"
          width={549}
          height={358.18}
          className="w-[549px] h-[358.18px]"
        />
      </div>
    </div>
  );
};

export default Aboutus;
