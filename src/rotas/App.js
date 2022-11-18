import { useState, useEffect } from 'react';
import estilos from '../App.module.css';
import { calculaNovoSaldo } from '../utils';
import { buscaTransacoes, salvaTransacao } from '../services/transacoes';
import { buscaSaldo, atualizaSaldo } from '../services/saldo';

import Cabecalho from '../componentes/Cabecalho';
import Extrato from '../componentes/Extrato';
import Menu from '../componentes/Menu';
import Principal from '../componentes/Principal';
import NovaTransacao from '../componentes/NovaTransacao';

export default function App() {
  const [saldo, setSaldo] = useState(0);
  const [transacoes, setTransacoes] = useState([]);

  async function listaTransacoes() {
    const transacoes = await buscaTransacoes();
    setTransacoes(transacoes);
  }

  async function obtemSaldo() {
    setSaldo(await buscaSaldo());
  }

  useEffect(() => {
    listaTransacoes();
    obtemSaldo();
  }, [saldo]);

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    setSaldo(novoSaldo);
    atualizaSaldo(novoSaldo);
    setTransacoes([...transacoes, valores]);
    salvaTransacao(valores);
  }

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
