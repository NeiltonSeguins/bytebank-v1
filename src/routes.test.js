import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';
import '@testing-library/jest-dom';
import { RotaAtual } from './rotas.js';
import Cartoes from './componentes/Cartoes';

describe('Rotas da aplicação', () => {
  test('Deve renderizar a página de rotas', () => {
    const rota = '/cartoes';

    render(
      <MemoryRouter initialEntries={[rota]}>
        <Cartoes />
      </MemoryRouter>
    );
    expect(screen.getByText('Meus cartões')).toHaveTextContent('Meus cartões');
  });

  test('renderiza um componente que usa o useLocation', () => {
    const rota = '/investimentos';

    render(
      <MemoryRouter initialEntries={[rota]}>
        <RotaAtual />
      </MemoryRouter>
    );

    expect(screen.getByTestId('rota-atual')).toHaveTextContent(rota);
  });
});
