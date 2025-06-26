import React from "react";
import OffBadge from "./OffBadge";
import TrendingSneaker from "../assets/trending-sneaker.png";

export default function TrendingCards() {
  return (
    <div className="flex flex-col">
      <div className="w-[292px] h-[321px] rounded-[4px] bg-white relative">
        <div className="pl-5 pt-5">
          <OffBadge />
        </div>
        <div className="flex justify-center items-center absolute top-0 left-0 right-4 bottom-0">
          <img src={TrendingSneaker} alt="trending sneaker" />
        </div>
      </div>
      <p className="pt-4 text-xs leading-6 tracking-[0.75px] font-bold text-[#8F8F8F]">
        Tênis
      </p>
      <p className="text-2xl leading-[38px] tracking-[0.75px] text-[#474747]">
        K-Swiss V8 - Masculino
      </p>
      <div className="flex gap-[11px] items-center">
        <p className="line-through text-2xl leading-[38px] tracking-[0.75px] text-[#8F8F8F]">
          $200
        </p>
        <p className="text-2xl leading-[38px] tracking-[0.75px] font-bold text-[#1F1F1F]">
            $100
        </p>
      </div>
    </div>
  );
}
