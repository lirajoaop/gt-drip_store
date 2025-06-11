import React from "react";
import SearchIcon from "../assets/Search.svg";

export default function SearchInputFilter() {
  return (
    <div className="w-[559px] h-[60px] rounded-lg bg-[#4747470A] flex justify-between">
      <p className="text-base font-normal leading-7 text-[#666666]/60 pl-6 flex items-center ">
        Pesquisar produto...
      </p>
      <div className="flex items-center pr-4">
        <img src={SearchIcon} alt="" className="w-6 h-6" />
      </div>
    </div>
  );
}
