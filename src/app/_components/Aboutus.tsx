import Image from "next/image";
import React from "react";

const Aboutus = () => {
  return (
    <div className="my-2 xl:h-[700px]  flex items-center flex-wrap  justify-between p-4">
      {/* Left Side */}
      <div className="w-[644px] p-6 rounded-md ">
        <h2 className="text-[40px] md:text-[50px] font-[700] mb-4">
          About <span className="text-[#3BAC43]">Four Seasons Enterprises</span>
        </h2>

        {/* Company History */}
        {/* <h3 className="text-[20px] font-[700] mb-2">Company History</h3> */}
        <p className="text-[#6C6C6C] text-[16px] md:text-[20px] font-[400] mb-4 leading-[30px]">
          <span className="font-bold">Four Seasons Enterprises </span>is a
          trusted name in the supply of premium fruits, vegetables, pulses, and
          essential food items.{" "}
          <span className="font-bold">Established over 25 years ago,</span> we
          have proudly built a reputation for consistency, quality, and
          reliability — serving a wide range of elite clients across Pakistan.
        </p>
        <p className="text-[#6C6C6C] text-[16px] md:text-[20px] font-[400] mb-4 leading-[30px]">
          From five-star hotels and international embassies to military messes
          and institutional kitchens, our commitment has remained the same:
          <span className="font-bold">
            {" "}
            delivering fresh, high-quality goods with professionalism and
            precision.
          </span>{" "}
        </p>
        <p className="text-[#6C6C6C] text-[16px] md:text-[20px] font-[400] mb-4 leading-[30px]">
          With decades of industry expertise, a strong logistics network, and a
          customer-first approach,{" "}
          <span className="font-bold">Four Seasons Enterprises </span> continues
          to be the preferred supplier for those who demand excellence in every
          delivery.
        </p>

        {/* Mission & Values */}
        {/* <h3 className="text-[20px] font-[700] mb-2">Mission & Values</h3>
        <ul className="list-disc list-inside text-[#6C6C6C] space-y-1b text-[16px] font-[400] leading-[30px]">
          <li>
            <span className="font-semibold">Mission:</span> To deliver fresh,
            high-quality produce with exceptional service.
          </li>
          <li>
            <span className="font-semibold">Values:</span> Quality | Consistency
            | Service | Integrity
          </li>
        </ul> */}
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
