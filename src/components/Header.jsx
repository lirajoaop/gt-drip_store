import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Cart from "./Cart";
import SearchInput from "./SearchInput";
import MaterialSearch from "./MaterialSearch";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex items-center w-[1440px] h-48 pl-[104px] bg-white">
      <Logo />
      <MaterialSearch />
      <a href="" className="underline pl-12 pr-[30px] text-[#474747]">
        Cadastre-se
      </a>
      <Button text="Entrar" />
      <Cart />
    </div>
  );
}
