import React from "react";
import Logo from "./Logo";
import SearchInputFilter from "./SearchInputFilter";
import Button from "./Button";

export default function Header() {
  return (
    <div className="flex items-center gap-x-[27px] w-[1440px] h-48 pl-[104px] bg-white">
      <Logo />
      <SearchInputFilter />
      <a href="" className="underline">Cadastre-se</a>
      <Button text="Entrar"/>
    </div>
  );
}
