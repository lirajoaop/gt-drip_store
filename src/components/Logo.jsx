import React from "react";
import digitalLogo from "../assets/digital-logo.svg";
import digitalLogoWhite from "../assets/digital-logo-white.svg";

export default function Logo({ customTextColor = "text-primary", whiteLogo = false }) {
  return (
    <div className="flex items-center gap-x-2 pr-[27px]">
      <img src={whiteLogo ? digitalLogoWhite : digitalLogo} alt="Digital Logo" className="w-[33px] h-[33px]" />
      <p className={`font-semibold text-[36.4px] ${customTextColor} tracking-[-1%]`}>
        Digital Store
      </p>
    </div>
  );
}
