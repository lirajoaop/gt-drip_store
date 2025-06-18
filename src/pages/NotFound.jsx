import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="flex gap-x-2">
        <h1>404</h1>
        <h3 className="text-red-500">Página não encontrada</h3>
      </div>
      <div>
        <Link to={"/"}>Voltar</Link>
      </div>
    </>
  );
}
