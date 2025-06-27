import { ArrowRightIcon } from "@phosphor-icons/react";
import React from "react";
import TrendingCards from "./TrendingCards";

export default function TrendingProducts() {
  return (
    <div className="flex flex-col px-[100px] pt-[123px] bg-[#F9F8FE]">
      <div className="flex justify-between pb-5">
        <p className="text-2xl font-bold text-[#474747]">Produtos em alta</p>
        <div className="text-primary cursor-pointer flex items-center gap-2">
          <p className="text-lg leading-[34px] tracking-[0.75px]">Ver todos</p>
          <ArrowRightIcon size={24} />
        </div>
      </div>
      <div className="grid 2xl:grid-cols-4 grid-cols-3 2xl:gap-6 gap-4">
      <TrendingCards />
      <TrendingCards />
      <TrendingCards />
      <TrendingCards />
      <TrendingCards />
      <TrendingCards />
      <TrendingCards />
      <TrendingCards />
      </div>
    </div>
  );
}
