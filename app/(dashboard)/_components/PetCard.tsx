import React, { useState } from "react";

type PetCardProps = {
  avatar: string;
};

export default function PetCard({ avatar }: PetCardProps) {
  const [isHovered, SetIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => SetIsHover(!isHovered)}
      onMouseLeave={() => SetIsHover(!isHovered)}
      style={{ backgroundImage: `url(${avatar})` }}
      className={`flex flex-col aspect-square rounded-xl bg-cover bg-center relative overflow-hidden group`}
    >
      <img
        src="/images/lower_bg.jpg"
        alt="{upper_bg}"
        className="h-[110%] w-[100%] scale-[120%] absolute bottom-0 -translate-x-100 translate-y-100 
            group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-500 ease-in-out"
      />

      <img
        src="/images/upper_bg.jpg"
        alt="upper_bg"
        className="h-[60%] w-[100%] scale-[110%] absolute bottom-0 -rotate-5 -translate-x-100 translate-y-100 
            group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-500 ease-in-out
           drop-shadow-gray-800 drop-shadow-xl hue-rotate-180 saturate-200 brightness-80 contrast-125"
      />
      <p
        className={`${
          isHovered
            ? "group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:delay-150 delay-0"
            : ""
        } absolute bottom-[3%] left-[2%] text-[12px] text-white opacity-0`}
      >
        Read More
      </p>
    </div>
  );
}
