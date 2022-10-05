import React from "react";
import Transacao from "./Transacao";
import estilos from "./Transacoes.module.css";

export default function Transacoes({ item }) {
  return (
    <div>
      <p className={estilos.mes}>{item.mes}</p>
      <ul>
        {item.transacoes.map((transacao, indice) => {
          return (
            <Transacao
              key={transacao.id}
              transacao={transacao}
              indice={indice}
              estilos={estilos}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
}
