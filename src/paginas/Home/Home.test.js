import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '.';
import AppRoutes from './routes';

describe('Componente <App />', () => {
  test('Deve permitir adicionar uma nova transação em Extrato', () => {
    render(<App />, { wrapper: BrowserRouter });

    const campoValor = screen.getByPlaceholderText('Digite um valor');
    const botao = screen.getByRole('button');
    const select = screen.getByRole('combobox');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(campoValor, '50');
    userEvent.click(botao);

    const novaTransacao = screen.getByTestId('lista-transacoes');
    const itemDeExtrato = screen.getAllByRole('listitem');
    expect(itemDeExtrato).toHaveLength(1);
    expect(novaTransacao).toContainElement(itemDeExtrato[0]);
  });

  test('Deve navegar até a página correspondente ao link clicado', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkPaginaCartoes = screen.getByText('Cartões');
    expect(linkPaginaCartoes).toBeInTheDocument();

    userEvent.click(linkPaginaCartoes);

    const tituloPaginaCartoes = await screen.findByText('Meus cartões');
    expect(tituloPaginaCartoes).toBeInTheDocument();
  });
});
