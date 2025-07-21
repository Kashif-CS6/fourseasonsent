import Image from "next/image";
import React from "react";
import { teamMembers } from "../../../public/data/data";

const LeadershipTeam = () => {
  return (
    <div className="bg-white py-10 px-4 xl:px-0">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[40px] md:text-[50px]  font-[700] mb-4">
          Meet Our Leadership Team
        </h2>
        <p className="text-[#403F3F] xl:w-[1007px] text-justify md:text-center text-[20px] font-[400] mx-auto">
          Our leadership team is dedicated to providing hotels with top-quality
          fruits, vegetables, and pulses—always fresh and delivered on time.
          With experience in supply chain, logistics, and customer service, we
          focus on reliability and long-term partnerships.
        </p>
      </div>

      {/* Team Members */}
      <div className="flex justify-center gap-6 flex-wrap">
        {/* Team Member 1 (with blue border) */}
        {teamMembers.map((item, index) => (
          <div key={index} className="  overflow-hidden text-center  ">
            <div className="rounded-4xl w-[320px] md:w-[400px] h-[455px]">
              <Image
                src={item.image}
                alt="CEO"
                width={500}
                height={500}
                className={`w-full h-full object-cover rounded-4xl`}
              />
            </div>
            <div className="py-3">
              <h3 className="font-bold text-2xl">{item.name}</h3>
              <p className="text-lg">{item.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
