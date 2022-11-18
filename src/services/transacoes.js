import api from './api';

export async function buscaTransacoes() {
  try {
    const resp = await api.get('/transacoes');
    return resp.data;
  } catch (err) {
    return [];
  }
}

export async function salvaTransacao(novaTransacao) {
  api
    .post('/transacoes', novaTransacao)
    .then((resp) => console.log(resp.status))
    .catch((err) => console.log(err));
}
