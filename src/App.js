import React, { useEffect, useState } from "react";
import estilos from "./App.module.css";
import api from "./api";
import { calculaNovoSaldo } from "./utils";

import Cabecalho from "./componentes/Cabecalho";
import Extrato from "./componentes/Extrato";
import Menu from "./componentes/Menu";
import Principal from "./componentes/Principal";
import NovaTransacao from "./componentes/NovaTransacao";

function App() {
  const [saldo, setSaldo] = useState(1000);
  const [transacoes, setTransacoes] = useState([]);

  async function carregaTransacoes() {
    const transacoes = await api.listaTransacoes();
    setTransacoes(transacoes);
  }

  async function obterSaldo() {
    setSaldo(await api.buscaSaldo());
  }

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    api.atualizaSaldo(novoSaldo).catch((error) => console.log(error));
    api.atualizaTransacoes(valores).catch((error) => console.error(error));

    setSaldo(novoSaldo);
    setTransacoes([valores]);
  }

  useEffect(() => {
    obterSaldo();
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
