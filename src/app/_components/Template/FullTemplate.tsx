import React, { ReactNode } from "react";

interface FullTemplateProps {
  children: ReactNode;
  color: string; // or a union of allowed colors
}

const FullTemplate: React.FC<FullTemplateProps> = ({ children, color }) => {
  return (
    <div className={`w-full`} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default FullTemplate;
