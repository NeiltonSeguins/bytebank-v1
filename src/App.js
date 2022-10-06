import React, { useEffect, useState } from "react";
import estilos from "./App.module.css";

import Cabecalho from "./componentes/Cabecalho";
import Extrato from "./componentes/Extrato";
import Menu from "./componentes/Menu";
import Principal from "./componentes/Principal";
import NovaTransacao from "./componentes/NovaTransacao";

import api from "./api";

export const calculaNovoSaldo = (valores, saldo) => {
  if (valores.transacao === "Depósito") {
    return saldo + parseInt(valores.valor);
  } else {
    return saldo - parseInt(valores.valor);
  }
};

function App() {
  const [saldo, setSaldo] = useState(1000);
  const [transacoes, setTransacoes] = useState([]);

  async function carregaTransacoes() {
    const transacoes = await api.listaTransacoes();
    setTransacoes(transacoes);
  }

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    api.atualizaTransacoes(valores).catch((error) => console.error(error));
    
    setSaldo(novoSaldo);
    setTransacoes([valores]);
  }

  useEffect(() => {
    carregaTransacoes();
  }, [saldo]);

  return (
    <>
      <Cabecalho />
      <main className={estilos.container}>
        <Menu />
        <div className={estilos.wrapper}>
          <Principal saldo={saldo} />
          <NovaTransacao realizarTransacao={realizarTransacao} />
        </div>
        <Extrato transacoes={transacoes} />
      </main>
    </>
  );
}

export default App;
