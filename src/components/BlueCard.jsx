import React from "react";
import OffBadge from "./OffBadge";
import Button from "./Button";

export default function ({
  productText,
  productImage,
  customTextWidth = "w-[172px]",
}) {
  return (
    <div className="w-[405px] h-[251px] rounded-lg bg-[#D8E3F2] relative">
      <div className="pl-[30px] pt-[34px] flex flex-col gap-[10px]">
        <OffBadge />
        <p
          className={`font-bold text-[32px] leading-[36px] ${customTextWidth} h-[72px] tracking-[1px] mb-5`}
        >
          {productText}
        </p>
        <div className="relative z-10">
          <Button
            customBg="bg-[#F5F5F5]"
            text="Comprar"
            customTextColor="text-primary"
            customWidth="w-[153px]"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 z-0">
        <img src={productImage} />
      </div>
    </div>
  );
}
