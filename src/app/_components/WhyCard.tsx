import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface WhyCardTypes {
  heading: String;
  description: String;
  key: Number;
}

const WhyCard: React.FC<WhyCardTypes> = ({ heading, description, key }) => {
  return (
    <div
      //@ts-ignore
      key={key}
      className="bg-white flex flex-col gap-4  rounded-md border border-gray-200 w-[300px] h-[300px] p-6"
    >
      {/* top section */}
      <div className="flex items-start gap-3 w-full ">
        <FaCheckCircle color="#016630" className="mt-1" size={30} />
        <h1 className="text-[24px] font-semibold text-green-800  w-[95%]">
          {" "}
          {heading}
        </h1>
      </div>
      <p className="text-[18px] font-sans font-[400]"> {description}</p>
    </div>
  );
};

export default WhyCard;
