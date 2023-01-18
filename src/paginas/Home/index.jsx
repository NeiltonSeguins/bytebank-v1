import { Outlet, useLocation } from 'react-router-dom';
import { calculaNovoSaldo } from 'utils';
import { salvaTransacao } from 'services/transacoes';
import { atualizaSaldo } from 'services/saldo';
import useListaTransacoes from 'hooks/useListaTransacoes';
import useSaldo from 'hooks/useSaldo';
import estilos from './App.module.css';

import Extrato from 'componentes/Extrato';
import Menu from 'componentes/Menu';
import Principal from 'componentes/Principal';
import NovaTransacao from 'componentes/NovaTransacao';

export default function Home() {
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
      <main data-test="app-home" className={estilos.caixa}>
        <Menu path={location.pathname} />
        <div className={estilos.envelope}>
          <Principal saldo={saldo} />
          {location.pathname === '/home' && (
            <NovaTransacao realizarTransacao={realizarTransacao} />
          )}
          <Outlet />
          <noscript data-testid="location-pathname">
            {location.pathname}
          </noscript>
        </div>
        <Extrato transacoes={transacoes} />
      </main>
    </>
  );
}
