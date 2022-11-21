import api from './services/api';
import { buscaTransacoes } from './services/transacoes';

jest.mock('./services/api');

// Mock de retorno de dado da api
const mockTransacao = [
  {
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '18/11/2022',
    mes: 'Novembro',
  },
];

// Função que simula uma chamada e retorno a api
const mockRequisicao = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno,
      });
    }, 200);
  });
};

// Função que simula o retorno de uma chamada que deu erro em uma api
const mockRequisicaoErro = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

describe('Realizando requisições para API', () => {
  test('Deve exibir uma lista de transações', async () => {
    api.get.mockImplementation(() => mockRequisicao(mockTransacao));
    const transacoes = await buscaTransacoes();

    expect(transacoes).toEqual(mockTransacao);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
    expect(api.get).toHaveBeenCalledTimes(1);
  });

  test('Deve retornar uma lista vazia quando a requisição falhar', async () => {
    api.get.mockImplementation(() => mockRequisicaoErro());
    const transacoes = await buscaTransacoes();

    expect(transacoes).toEqual([]);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
    expect(api.get).toHaveBeenCalledTimes(1);
  });
});
