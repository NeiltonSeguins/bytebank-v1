import React from "react";
import estilos from "./Extrato.module.css";
import extrato from "../../db.json";
import Transacoes from "./Transacoes";

export default function Extrato() {
  return (
    <section className={estilos.container}>
      <h2 className={estilos.titulo}>Extrato</h2>
      {extrato.map((item, indice) => {
        return <Transacoes key={indice} item={item} />;
      })}
    </section>
  );
}
