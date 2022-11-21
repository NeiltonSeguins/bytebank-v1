import api from './services/api';
import { buscaTransacoes, salvaTransacao } from './services/transacoes';

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
const mockRequisicaoGet = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno,
      });
    }, 200);
  });
};

// Função que simula o retorno de uma chamada que deu erro em uma api
const mockRequisicaoErroGet = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

const mockRequisicaoPost = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 201,
      });
    }, 200);
  });
};

describe('Requisições para API', () => {
  test('Deve exibir uma lista de transações', async () => {
    api.get.mockImplementation(() => mockRequisicaoGet(mockTransacao));
    const transacoes = await buscaTransacoes();

    expect(transacoes).toEqual(mockTransacao);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
    expect(api.get).toHaveBeenCalledTimes(1);
  });

  test('Deve retornar uma lista vazia quando a requisição falhar', async () => {
    api.get.mockImplementation(() => mockRequisicaoErroGet());
    const transacoes = await buscaTransacoes();

    expect(transacoes).toEqual([]);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
    expect(api.get).toHaveBeenCalledTimes(1);
  });

  test('Deve retornar um status 201 - (Created) após uma requisição POST', async () => {
    api.post.mockImplementation(() => mockRequisicaoPost());
    const status = await salvaTransacao(mockTransacao[0]);

    console.log(status);
    expect(status).toBe(201);
    expect(api.post).toHaveBeenCalledWith('/transacoes', mockTransacao[0]);
    expect(api.post).toHaveBeenCalledTimes(1);
  });
});
