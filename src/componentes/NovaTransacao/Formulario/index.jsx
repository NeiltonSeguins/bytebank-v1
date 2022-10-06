import React, { useState } from "react";
import estilos from "./Formulario.module.css";

export default function Formulario({ realizarTransacao }) {
  const [valor, setValor] = useState({ transacao: "", valor: 0 });

  function handleChange(e) {
    const { name, value } = e.target;
    const valoresAtualizados = { ...valor, [name]: value };
    setValor(valoresAtualizados);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dataTransacao = new Date().toLocaleDateString("pt-br");
    realizarTransacao({ ...valor, data: dataTransacao });
  }

  return (
    <form className={estilos.formulario} onSubmit={handleSubmit}>
      <select
        className={estilos.grupo__opcoes}
        onChange={handleChange}
        name="transacao"
      >
        <option defaultValue="Selecione um tipo de transação">
          Selecione um tipo de transação
        </option>
        <option value="Depósito">Depósito</option>
        <option value="Transferência">Transferência</option>
      </select>
      <label htmlFor="valor" className={estilos.legenda}>
        Valor
      </label>
      <input
        onChange={handleChange}
        className={estilos.campo__valor}
        type="number"
        name="valor"
        id="valor"
        placeholder="Digite um valor"
      />
      <button className={estilos.botao} type="submit">
        Realizar transação
      </button>
    </form>
  );
}
