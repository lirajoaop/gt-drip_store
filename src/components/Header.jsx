import React from "react";
import Logo from "./Logo";
import SearchInputFilter from "./SearchInputFilter";
import Button from "./Button";
import Cart from "./Cart";

export default function Header() {
  return (
    <div className="flex items-center w-[1440px] h-48 pl-[104px] bg-white">
      <Logo />
      <SearchInputFilter />
      <a href="" className="underline pl-12 pr-[30px] text-[#474747]">Cadastre-se</a>
      <Button text="Entrar"/>
      <Cart/>
    </div>
  );
}
