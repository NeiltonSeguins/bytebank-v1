import React from "react";
import estilos from "./Transacao.module.css";
import { ReactComponent as Ilustracao } from "./ilustracao.svg";

export default function Transacao() {
  return (
    <section className={estilos.container}>
      <div className={estilos.detalhe__superior}></div>
      <div className={estilos.wrapper}>
        <h2 className={estilos.titulo}>Nova transação</h2>
        <form className={estilos.formulario}>
          <select className={estilos.grupo__opcoes}>
            <option defaultValue="Selecione o tipo de transação">
              Selecione o tipo de transação
            </option>
            <option value="Depósito">Depósito</option>
            <option value="Transferência">Transferência</option>
          </select>
          <label htmlFor="valorTransacao" className={estilos.legenda}>
            Valor
          </label>
          <input
            className={estilos.campo__valor}
            type="number"
            name="valor"
            id="valorTransacao"
            placeholder="00,00"
          />
          <button className={estilos.botao} type="submit">
            Realizar transação
          </button>
        </form>
      </div>
      <Ilustracao height="229" width="359" />
      <div className={estilos.detalhe__inferior}></div>
    </section>
  );
}
