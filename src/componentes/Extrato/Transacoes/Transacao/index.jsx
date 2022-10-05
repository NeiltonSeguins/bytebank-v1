import React from "react";

export default function Transacao({ transacao, indice, estilos, item }) {
  return (
    <li>
      <div className={estilos.item}>
        <p>{transacao.tipoTransacao}</p>
        <span>{transacao.dataPagamento}</span>
      </div>
      {transacao.tipoTransacao === "Transferência" ? (
        <h3 className={estilos.valor}>{`- ${transacao.valorPagamento}`}</h3>
      ) : (
        <h3 className={estilos.valor}>{transacao.valorPagamento}</h3>
      )}
      {indice !== item.transacoes.length - 1 && (
        <div className={estilos.divisor}></div>
      )}
    </li>
  );
}
