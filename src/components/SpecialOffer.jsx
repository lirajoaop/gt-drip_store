import React from "react";
import elipse11 from "../assets/elipse11.png";
import yellowSneaker from "../assets/yellow-sneaker.png";
import Button from "./Button";

export default function SpecialOffer() {
  return (
    <div className="bg-[#FFFFFF] w-full h-full pt-[87px] pl-[129px] flex relative">
      <div className="w-[466px] h-[466px]">
        <img
          src={elipse11}
          alt="Special Offer"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[110px] left-12 w-[573px] h-[330px]">
          <img src={yellowSneaker} alt="yellow sneaker" />
        </div>
      </div>

      <div className="2xl:pl-[67px] pl-[110px]">
        <p className="text-primary font-bold text-sm leading-[22px] tracking-[0.75px] pb-[17px]">
          Oferta especial
        </p>
        <p className="font-bold text-5xl leading-[50px] text-[#474747] pb-5">
          Air Jordan edição de <br/> colecionador
        </p>
        <p className="w-full max-w-[589px] text-[#474747] pb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>
          aliquip
        </p>
        <Button text="Ver Oferta" customWidth="w-[200px]" />
      </div>
    </div>
  );
}
