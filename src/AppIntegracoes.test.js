import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './rotas/App';
import { buscaTransacoes } from './services/transacoes';

// jest.mock('./services/api');

describe('Realizando requisições para API', () => {
  test('Deve exibir uma lista de transações puxadas da API', async () => {
    const transacoes = await buscaTransacoes();

    render(<App />, { wrapper: BrowserRouter });
    const transacao = await screen.findAllByText('Novembro');
    transacao.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
    const listaTransacoes =
      screen.getByTestId('lista-transacoes').children.length;
    expect(listaTransacoes).toBe(3);
    expect(transacoes).toHaveLength(3);
  });
});
