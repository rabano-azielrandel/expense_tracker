import React from "react";

type props = {
  className?: string;
};

const Separator: React.FC<props> = ({ className }) => {
  return <div className={`${className} w-full h-[1px] bg-black`}></div>;
};

export default Separator;
