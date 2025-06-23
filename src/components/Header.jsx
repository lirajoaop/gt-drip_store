import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Cart from "./Cart";
import MaterialSearch from "./MaterialSearch";
import NavBar from "./NavBar";

export default function Header() {

  return (
    <>
    <div className="flex items-center min-w-[1440px] w-full min-h-48 h-full pl-[104px] bg-white">
      <Logo />
      <MaterialSearch />
      <a href="" className="underline pl-12 pr-[30px] text-[#474747]">
        Cadastre-se
      </a>
      <Button text="Entrar" />
      <Cart />
    </div>
      <NavBar />
      </>
  );
}
