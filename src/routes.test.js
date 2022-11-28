import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './paginas/Principal/App';
import Cartoes from './componentes/Cartoes';

describe('Rotas', () => {
  test('Deve renderizar a página principal', () => {
    render(<App />, { wrapper: BrowserRouter });
    const usuario = screen.getByText('Olá, Joana :)!');
    expect(usuario).toBeInTheDocument();
  });

  test('Deve renderizar a página de cartões', () => {
    const rota = '/cartoes';

    render(
      <MemoryRouter initialEntries={[rota]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="cartoes" element={<Cartoes />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const meusCartoes = screen.getByText('Meus cartões');
    expect(meusCartoes).toHaveTextContent('Meus cartões');
  });

  test('Deve renderizar a localização atual com o useLocation()', () => {
    const rota = '/cartoes';

    render(
      <MemoryRouter initialEntries={[rota]}>
        <App />
      </MemoryRouter>
    );
    const localizacaoAtual = screen.getByTestId('location-pathname');
    expect(localizacaoAtual).toHaveTextContent(rota);
  });
});
