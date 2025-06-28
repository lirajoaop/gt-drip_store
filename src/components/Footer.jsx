import React from "react";
import Logo from "./Logo";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="bg-[#1F1F1F] flex pl-[104px] pt-[72px] w-full pr-[94px]">
      <div className="flex flex-col pr-[205px]">
        <Logo customTextColor="text-[#FFFFFF]" whiteLogo="true" />
        <div className="text-white pt-[35px] font-normal text-base leading-[26px] trackin-[0%] pb-10">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore.
        </div>
        <div className="flex items-center gap-[35px] text-white">
          <FacebookLogoIcon
            size={32}
            weight="light"
            className="cursor-pointer"
          />
          <InstagramLogoIcon
            size={32}
            weight="light"
            className="cursor-pointer"
          />
          <TwitterLogoIcon
            size={32}
            weight="light"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col text-white pb-[34px]">
        <p className="font-semibold text-lg leading-[100%] tracking-[0%] pb-8">
          Informação
        </p>
        <div className="flex flex-col text-base font-normal leading-[38px] tracking-[0%]">
          <p>Sobre Drip Store</p>
          <p>Segurança</p>
          <p>Wishlist</p>
          <p>Blog</p>
          <p>Trabalhe conosco</p>
          <p>Meus Pedidos</p>
        </div>
      </div>
      <div className="flex flex-col text-white pl-[102px] pr-[168px]">
        <p className="font-semibold text-lg leading-[100%] tracking-[0%] pb-8">
          Categorias
        </p>
        <div className="flex flex-col text-base font-normal leading-[38px] tracking-[0%]">
          <p>Camisetas</p>
          <p>Calças</p>
          <p>Bonés</p>
          <p>Headphones</p>
          <p>Tênis</p>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <p className="font-semibold text-lg leading-[100%] tracking-[0%] pb-7">
          Contato
        </p>
        <div className="font-normal text-base leading-[26px] tracking-[0%]">
          <p className="pb-[14px]">
            Av. Santos Dumont, 1510 - 1° <br /> andar - Aldeota, Fortaleza -{" "}
            <br /> CE, 60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>
      </div>
    </div>
  );
}
