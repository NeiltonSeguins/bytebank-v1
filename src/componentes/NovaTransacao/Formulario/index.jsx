import React from "react";
import estilos from './Formulario.module.css'

export default function Formulario() {
  return (
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
  );
}
