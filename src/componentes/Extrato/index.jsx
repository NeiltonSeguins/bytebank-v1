import React from "react";
import estilos from "./Extrato.module.css";

export default function Extrato({ transacoes }) {
  return (
    <section className={estilos.container}>
      <h2 className={estilos.titulo}>Extrato</h2>
      <ul>
        {transacoes.map((item, indice) => {
          return (
            <li key={indice}>
              <p className={estilos.mes}>{item.mes}</p>
              <div className={estilos.item}>
                <p>{item.transacao}</p>
                <span>{item.data}</span>
              </div>
              {item.transacao === "Transferência" ? (
                <h3 className={estilos.valor}>{`- R$ ${item.valor}`}</h3>
              ) : (
                <h3 className={estilos.valor}>{` R$ ${item.valor}`}</h3>
              )}
              <div className={estilos.divisor}></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
