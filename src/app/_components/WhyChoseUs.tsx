import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="h-[1000px] md:h-[800px] flex justify-start  px-4 2xl:px-0">
      <div className="flex justify-start items-center gap-8">
        {/* Left Text Column */}
        <div className="md:w-[700px] ">
          <h2 className="text-3xl md:text-[45px] font-bold mb-6 text-gray-800">
            Why Choose{" "}
            <span className="text-[#3BAC43]">Four Seasons Enterprises?</span>
          </h2>
          <ul className="space-y-4 text-gray-700 text-[16px] md:text-[18px] font-[400] leading-[30px]">
            <li className="items-start">
              <div>
                <span className="mr-2 text-green-600 text-xl">✅</span>
                <span className="font-bold">
                  25+ Years of Proven Excellence{" "}
                </span>
              </div>
              We’ve built long-term relationships through consistent service,
              reliable delivery, and premium quality since 1999.
            </li>
            <li className="items-start">
              <div>
                <span className="mr-2 text-green-600 text-xl">✅</span>
                <span className="font-bold"> Trusted by Top-Tier Clients</span>
              </div>
              From five-star hotels and embassies to government messes and
              corporate canteens — we’re the trusted choice for those who demand
              the best.
            </li>
            <li className="items-start">
              <div>
                <span className="mr-2 text-green-600 text-xl">✅</span>
                <span className="font-bold">Fresh, High-Quality Products</span>
              </div>
              We source fresh fruits, vegetables, and pulses daily, ensuring
              every delivery meets the highest standards of quality and hygiene.
            </li>
            <li className=" items-start">
              <div>
                <span className="mr-2 text-green-600 text-xl">✅</span>
                <span className="font-bold">Timely & Reliable Deliveries</span>
              </div>
              Timely & Reliable Deliveries Punctuality is our promise. Our
              efficient logistics ensure your kitchens are always stocked and
              your schedules never interrupted.
            </li>
            <li className=" items-start">
              <div>
                <span className="mr-2 text-green-600 text-xl">✅</span>
                <span className="font-bold">
                  Professional & Discreet Service{" "}
                </span>
              </div>
              We understand the importance of trust and privacy, especially when
              serving diplomatic and institutional clients.
            </li>

            <li className=" items-start font-bold">
              When quality, reliability, and professionalism matter — choose
              Four Seasons Enterprises.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
