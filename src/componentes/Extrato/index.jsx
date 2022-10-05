import React from "react";
import estilos from "./Extrato.module.css";
import extrato from "../../db.json";

export default function Extrato() {
  return (
    <div className={estilos.container}>
      <h2 className={estilos.titulo}>Extrato</h2>
      {extrato.map((item, indice) => {
        return (
          <div key={indice}>
            <p className={estilos.mes}>{item.mes}</p>
            <ul>
              {item.transacoes.map((transacao, indice) => {
                return (
                  <li key={transacao.id}>
                    <div className={estilos.item}>
                      <p>{transacao.tipoTransacao}</p>
                      <span>{transacao.dataPagamento}</span>
                    </div>
                    {transacao.tipoTransacao === "Transferência" ? (
                      <h3
                        className={estilos.valor}
                      >{`- ${transacao.valorPagamento}`}</h3>
                    ) : (
                      <h3 className={estilos.valor}>
                        {transacao.valorPagamento}
                      </h3>
                    )}
                    {indice !== item.transacoes.length - 1 && (
                      <div className={estilos.divisor}></div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
