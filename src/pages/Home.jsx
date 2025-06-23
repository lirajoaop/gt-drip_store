import React from "react";
import Button from "../components/Button";
import WhiteSneakers from "../assets/white-sneakers.png";
import Ornament from "../assets/ornament.png";
import Group from "../assets/group.png";

export default function Home() {
  return (
    <div className="flex flex-col min-w-[1440px] w-full min-h-[681px] h-full bg-[#F5F5F5] pt-[124px] pl-[100px] relative">
      <div className="">
        <p className="font-bold text-base tracking-[0.75px] text-[#F6AA1C]">
          Melhores ofertas personalizadas
        </p>
        <p className="pt-5 text-[#1F1F1F] font-extrabold text-[64px] leading-[66px] tracking-[1px]">
          Queima de <br /> stoque Nike🔥
        </p>
        <p className="font-normal text-lg leading-[34px] tracking-[0.75px] text-[#474747] pt-5 pb-10">
          Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor
          laboris eiusmod irure consectetur.
        </p>
        <Button text="Ver Ofertas" customWidth="w-[220px]" />
        <div className="w-[733.51px] h-[431.61px] absolute top-[46.91px] left-[513.25px]">
          <img src={WhiteSneakers} alt="white sneakers" />
        </div>
        <div className="absolute w-[140px] h-[140px] top-[72px] left-[1263px]">
          <img src={Ornament} alt="ornament" />
        </div>
      </div>
      <div className="flex justify-center absolute bottom-[53px] left-0 right-0">
        <div className="cursor-pointer">
          <img src={Group} alt="group" />
        </div>
      </div>
    </div>
  );
}
