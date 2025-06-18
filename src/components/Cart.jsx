import React from "react";
import cartBuy from "../assets/cart-buy.svg";

export default function Cart() {
  return (
    <div className="pl-[72.75px] pr-[100px]">
      <div className="relative cursor-pointer">
      <img src={cartBuy} alt="Cart Icon" className="w-6 h-6" />
      <span className="absolute -top-1 -right-2 bg-[#c92071] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
        2
      </span>
      </div>
    </div>
  );
}
