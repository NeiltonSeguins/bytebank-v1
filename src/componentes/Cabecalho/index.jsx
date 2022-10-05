import React from "react";
import estilos from "./Cabecalho.module.css";
import { ReactComponent as Logo } from "./bytebank.svg";
import avatarUsuario from "./avatar.svg";

export default function Cabecalho() {
  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.cabecalho__container}>
        <Logo />
        <div className={estilos.cabecalho__usuario}>
          <p>Joana Fonseca Gomes</p>
          <img src={avatarUsuario} alt="Ícone de um avatar de usuário" />
        </div>
      </div>
    </header>
  );
}
