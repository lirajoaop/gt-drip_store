import React from "react";
import Logo from "./Logo";
import SearchInputFilter from "./SearchInputFilter";

export default function Header() {
  return (
    <div className="flex items-center gap-x-[27px] w-[1440px] h-48 bg-white">
      <Logo />
      <SearchInputFilter />
    </div>
  );
}
