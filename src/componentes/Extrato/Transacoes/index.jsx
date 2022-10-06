import React from "react";

export default function Transacoes({ transacao, estilos }) {
  return (
    <li>
      <p className={estilos.mes}>{transacao.mes}</p>
      <div className={estilos.transacao}>
        <p>{transacao.transacao}</p>
        <span>{transacao.data}</span>
      </div>
      {transacao.transacao === "Transferência" ? (
        <h3 className={estilos.valor}>{`- R$ ${transacao.valor}`}</h3>
      ) : (
        <h3 className={estilos.valor}>{` R$ ${transacao.valor}`}</h3>
      )}
      <div className={estilos.divisor}></div>
    </li>
  );
}
