import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Componente <Formulario />', () => {
  test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
    render(<Formulario />);
    const select = screen.getByRole('combobox');
    userEvent.selectOptions(select, ['Depósito']);

    expect(
      screen.getByRole('option', { name: 'Selecione um tipo de transação' })
        .selected
    ).toBe(false);
    expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
      true
    );
  });
});

// test('Ao submeter o formulário ele chama uma função de onSubmit', () => {
//   const realizarTransacao = jest.fn();
//   render(<Formulario realizarTransacao={realizarTransacao} />);
//   const botao = screen.getByRole('button');
//   userEvent.click(botao);
//   expect(realizarTransacao).toHaveBeenCalledTimes(1);
// });
