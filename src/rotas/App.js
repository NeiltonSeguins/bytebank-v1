import { useState, useEffect } from 'react';
import estilos from '../App.module.css';
import { calculaNovoSaldo } from '../utils';
import api from '../services/api';

import Cabecalho from '../componentes/Cabecalho';
import Extrato from '../componentes/Extrato';
import Menu from '../componentes/Menu';
import Principal from '../componentes/Principal';
import NovaTransacao from '../componentes/NovaTransacao';

export default function App() {
  const [saldo, setSaldo] = useState(0);
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    api.buscaSaldo(setSaldo);
    api.buscaTransacoes(setTransacoes);
  }, []);

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    setSaldo(novoSaldo);
    api.atualizaSaldo(novoSaldo);
    setTransacoes([...transacoes, valores]);
    api.salvaTransacao(valores);
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
