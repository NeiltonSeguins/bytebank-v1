import React from "react";
import estilos from "./Principal.module.css";
import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import Saldo from "../Saldo";

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export default function Principal() {
  return (
    <section className={estilos.container}>
      <div className={estilos.detalhe__superior}></div>
      <h1 className={estilos.titulo}>Olá, Joana :)!</h1>
      <p className={estilos.data}>{`${
        diasDaSemana[hoje.getDay()]
      }, ${hoje.toLocaleDateString()}`}</p>
      <div className={estilos.wrapper}>
        <Ilustracao className={estilos.ilustracao} width="230" height="185" />
        <Saldo />
      </div>
      <div className={estilos.detalhe__inferior}></div>
    </section>
  );
}
