test('Deve retornar o valor do saldo atualizado com o rendimento da conta', () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);
  const saldo = 100;

  const novoSaldo = calculaRendimento(saldo);

  expect(calculaRendimento).toBeCalled();
  expect(calculaRendimento).toBeCalledWith(saldo);
  expect(novoSaldo).toBe(100.5);
});
