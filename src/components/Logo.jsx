import React from "react";
import digitalLogo from "../assets/digital-logo.svg";

export default function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <img src={digitalLogo} alt="Digital Logo" className="w-[33px] h-[33px]" />
      <p className="font-semibold text-[36.4px] text-[#C92071] tracking-[-1%]">Digital Store</p>
    </div>
  );
}
