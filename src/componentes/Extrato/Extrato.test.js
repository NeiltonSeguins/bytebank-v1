import { render, screen } from '@testing-library/react';
import Extrato from './index';
import Transacoes from './Transacoes/index';
import estilos from './Extrato.module.css';

describe('Componente <Extrato />', () => {
  describe('Deve renderizar', () => {
    test('uma lista de transações', () => {
      const transacoes = [
        {
          transacao: 'Depósito',
          valor: 100,
        },
      ];
      render(<Extrato transacoes={transacoes} />);
      const lista = screen.getByRole('listitem');
      expect(lista).toBeInTheDocument();
    });

    test('o mesmo componente com diferentes props', () => {
      const transacaoUm = {
        transacao: 'Depósito',
        valor: 100,
      };

      const { rerender } = render(
        <Transacoes transacao={transacaoUm} estilos={estilos} />
      );

      const tipoTransacao = screen.getByTestId('tipoTransacao');
      const valorTransacao = screen.getByTestId('valorTransacao');

      expect(valorTransacao).toHaveTextContent('R$ 100');
      expect(tipoTransacao).toHaveTextContent('Depósito');

      const transacaoDois = {
        transacao: 'Transferência',
        valor: 50,
      };

      rerender(<Transacoes transacao={transacaoDois} estilos={estilos} />);

      const novoIipoTransacao = screen.getByTestId('tipoTransacao');
      const novoValorTransacao = screen.getByTestId('valorTransacao');

      expect(novoValorTransacao).toHaveTextContent('- R$ 50');
      expect(novoIipoTransacao).toHaveTextContent('Transferência');
    });
  });
});
