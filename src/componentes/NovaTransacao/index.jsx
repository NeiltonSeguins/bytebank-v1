import React from "react";
import estilos from "./Transacao.module.css";
import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import Formulario from "./Formulario";

export default function Transacao() {
  return (
    <section className={estilos.container}>
      <div className={estilos.detalhe__superior}></div>
      <div className={estilos.wrapper}>
        <h2 className={estilos.titulo}>Nova transação</h2>
        <Formulario />
      </div>
      <Ilustracao height="229" width="359" />
      <div className={estilos.detalhe__inferior}></div>
    </section>
  );
}
