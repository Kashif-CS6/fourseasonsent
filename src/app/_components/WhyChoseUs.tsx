import React from "react";

import { whychosedata } from "../../../public/data/data";
import WhyCard from "./WhyCard";

const WhyChooseUs = () => {
  return (
    <section className=" flex justify-start  px-4 2xl:px-0">
      <div className="flex flex-col w-full items-center gap-8">
        {/* Left Text Column */}

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-[45px] font-bold mb-6 text-gray-800 text-center md:w-[500px]">
            Why Choose{" "}
            <span className="text-[#3BAC43]">Four Seasons Enterprises</span>?
          </h2>
          <p className="text-[#403F3F] xl:w-[1007px] md:text-[24px] font-[400] mx-auto text-center font-sans">
            Trusted by leading hotels, embassies, and mess facilities for over
            <br />
            25 years here's what sets us apart.--
          </p>
        </div>

        <div className="flex flex-wrap gap-4 w-[90%] justify-center">
          {/* card 1 */}
          {whychosedata.map((item, index) => (
            <WhyCard
              heading={item.heading}
              description={item.description}
              key={index}
            />
          ))}
        </div>
        <h1 className="text-lg text-center md:text-2xl font-sans md:w-[500px] text-[#403F3F]">
          When quality, reliability, and professionalism matter — choose Four
          Seasons Enterprises.
        </h1>
      </div>
    </section>
  );
};

export default WhyChooseUs;
