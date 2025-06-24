import React from "react";
import BlueCard from "./BlueCard";
import SupremeTshirt from "../assets/supreme-tshirt.png";
import AdidasShoes from "../assets/adidas-shoes.png";
import HeadPhones from "../assets/headphones.png";

export default function HomeCollections() {
  return (
    <>
      <div className="pt-[38px] pl-[100px]">
        <p className=" text-2xl leading-[38px] font-bold text-[#474747] pb-5">
          Coleções em destaque
        </p>
        <div className="flex gap-3">
          <div>
            <BlueCard
              productText="Novo drop Supreme"
              productImage={SupremeTshirt}
            />
          </div>
          <BlueCard
          productText="Coleção Adidas"
          productImage={AdidasShoes}
          />
          <BlueCard
          productText="Novo Beats Bass"
          customTextWidth="w-[184px]"
          productImage={HeadPhones}
          />
        </div>
      </div>
    </>
  );
}
