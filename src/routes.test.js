import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';
import '@testing-library/jest-dom';
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
});
