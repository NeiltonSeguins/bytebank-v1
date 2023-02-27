import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar um campo de input', () => {
  test('na tela', () => {
    render(<Formulario />);
    const campoValor = screen.getByPlaceholderText('Digite um valor');
    expect(campoValor).toBeInTheDocument();
  });

  test('com tipo number', () => {
    render(<Formulario />);
    const campoValor = screen.getByPlaceholderText('Digite um valor');
    expect(campoValor).toHaveAttribute('type', 'number');
  });

  test('que pode ser preenchido', () => {
    render(<Formulario />);
    const campoValor = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoValor, '50');
    expect(campoValor).toHaveValue(50);
  });
});

test('Ao submeter o formulário ele chama uma função de onSubmit', () => {
  const realizarTransacao = jest.fn();
  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');
  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
