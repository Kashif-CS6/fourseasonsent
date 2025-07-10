import Image from "next/image";
import React from "react";

const LeadershipTeam = () => {
  return (
    <div className="bg-white py-10 px-4 xl:px-0">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[40px] md:text-[50px]  font-[700] mb-4">Leadership Team</h2>
        <p className="text-[#403F3F] xl:w-[1007px] text-[20px] font-[400] mx-auto">
          Start your journey with fresh ideas. Explore vibrant options, make
          bold choices, and craft experiences that matter.
          <br />
          From clean designs to smart solutions—everything begins with a single
          click.
        </p>
      </div>

      {/* Team Members */}
      <div className="flex justify-center gap-6 flex-wrap">
        {/* Team Member 1 (with blue border) */}
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="  overflow-hidden text-center ">
            <Image
              src="/leader.svg"
              alt="CEO"
              width={72}
              height={72}
              className="w-[400px] h-[455px] object-cover"
            />
            <div className="py-3">
              <h3 className="font-bold text-xl">CEO {index}</h3>
              <p className="text-lg">Name here</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
