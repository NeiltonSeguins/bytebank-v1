import estilos from './App.module.css';
import { calculaNovoSaldo } from './utils';
import { salvaTransacao } from './services/transacoes';
import { atualizaSaldo } from './services/saldo';

import Cabecalho from './componentes/Cabecalho';
import Extrato from './componentes/Extrato';
import Menu from './componentes/Menu';
import Principal from './componentes/Principal';
import NovaTransacao from './componentes/NovaTransacao';
import useListaTransacoes from './hooks/useListaTransacoes';
import useSaldo from './hooks/useSaldo';
import { Outlet, useLocation } from 'react-router-dom';

export default function App() {
  const [saldo, setSaldo] = useSaldo();
  const [transacoes, setTransacoes] = useListaTransacoes();
  const location = useLocation();

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
          {location.pathname === '/' && (
            <NovaTransacao realizarTransacao={realizarTransacao} />
          )}
          <Outlet />
        </div>
        <Extrato transacoes={transacoes} />
      </main>
    </>
  );
}
