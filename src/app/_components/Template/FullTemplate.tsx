import React, { ReactNode } from "react";

interface FullTemplateProps {
  children: ReactNode;
  color: string; // or a union of allowed colors
  id: string;
}

const FullTemplate: React.FC<FullTemplateProps> = ({
  children,
  color,
  id = "normal",
}) => {
  return (
    <div id={id} className={`w-full`} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default FullTemplate;
