import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex min-w-[423px] w-fit h-[29px] rounded-sm pl-[100px] text-sm">
      <ul className="flex space-x-8 tracking-[0.75px]">
        <li className="text-primary font-bold leading-6">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-[#474747] leading-7">
          <Link to={"/produtos"}>Produtos</Link>
        </li>
        <li className="text-[#474747] leading-7">
          <Link to={"/categorias"}>Categorias</Link>
        </li>
        <li className="text-[#474747] leading-7">
          <Link to={"/pedidos"}>Meus Pedidos</Link>
        </li>
      </ul>
    </nav>
  );
}
