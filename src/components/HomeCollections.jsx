import React from "react";
import BlueCard from "./BlueCard";
import SupremeTshirt from "../assets/supreme-tshirt.png";
import AdidasShoes from "../assets/adidas-shoes.png";
import HeadPhones from "../assets/headphones.png";
import CollectionsItem from "./CollectionsItem";
import { BaseballCapIcon, HeadphonesIcon, PantsIcon, SneakerIcon, TShirtIcon } from "@phosphor-icons/react";

export default function HomeCollections() {
  return (
    <div className="pt-[38px] pl-[100px] flex flex-col w-full bg-[#F9F8FE]">
      <p className="text-2xl leading-[38px] font-bold text-[#474747] pb-5">
        Coleções em destaque
      </p>
      <div className="flex gap-3">
        <div className="flex w-full">
          <BlueCard
            productText="Novo drop Supreme"
            productImage={SupremeTshirt}
          />
        </div>
        <div className="flex w-full">
          <BlueCard productText="Coleção Adidas" productImage={AdidasShoes} />
        </div>
        <div className="flex w-full">
          <BlueCard
            productText="Novo Beats Bass"
            customTextWidth="w-[184px]"
            productImage={HeadPhones}
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-[100px]">
        <p className="text-2xl leading-[38px] font-bold text-[#474747]">
          Coleções em destaque
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 pt-[50px]">
        <CollectionsItem
          collectionIcon={<TShirtIcon size={64} className="text-[#C92071]" />}
          collectionTitle="Camisetas"
        />
        <CollectionsItem
          collectionIcon={<PantsIcon size={64} className="text-[#474747]" />}
          collectionTitle="Calças"
        />
        <CollectionsItem
          collectionIcon={<BaseballCapIcon size={64} className="text-[#474747]" />}
          collectionTitle="Bonés"
        />
        <CollectionsItem
          collectionIcon={<HeadphonesIcon size={64} className="text-[#474747]" />}
          collectionTitle="Headphones"
        />
        <CollectionsItem
          collectionIcon={<SneakerIcon size={64} className="text-[#474747]" />}
          collectionTitle="Tênis"
        />
      </div>
    </div>
  );
}
