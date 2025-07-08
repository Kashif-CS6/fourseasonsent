import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="h-[752px] flex justify-start font-serif px-4 2xl:px-0">
      <div className="flex justify-start items-center gap-8">
        {/* Left Text Column */}
        <div className="md:w-[599px] ">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Choose Us
          </h2>
          <ul className="space-y-4 text-gray-700 text-[16px] font-[400] leading-[30px]">
            <li className="flex items-start">
              <span className="mr-2 text-green-600 text-xl">✅</span>
              25+ Years of Experience – Deep domain knowledge and a reliable
              network.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 text-xl">✅</span>
              Reliable Supply Chain – Timely deliveries without disruption.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 text-xl">✅</span>
              Quality Assurance – Multi-stage checks for freshness and hygiene.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 text-xl">✅</span>
              Customized Deliveries – Flexible quantities and timing per your
              kitchen needs.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 text-xl">✅</span>
              Trusted by Top Institutions – A proven partner for premium
              clients.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
