import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';
import '@testing-library/jest-dom';
import { RotaAtual } from './Rotas';
import Cartoes from './rotas/Cartoes/Cartoes';

test('rendering a component that uses useLocation', () => {
  const rota = '/cartoes';

  render(
    <MemoryRouter initialEntries={[rota]}>
      <Cartoes />
    </MemoryRouter>
  );
  expect(screen.getByText('Cartoes')).toHaveTextContent('Cartoes');
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
