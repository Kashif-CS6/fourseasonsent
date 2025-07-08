import React, { ReactNode } from "react";

interface HalfTemplateProps {
  children: ReactNode;
}

const HalfTemplate: React.FC<HalfTemplateProps> = ({ children }) => {
  return <div className="xl:w-[1280px] mx-auto">{children}</div>;
};

export default HalfTemplate;
