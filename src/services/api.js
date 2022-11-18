import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const buscaSaldo = async (setSaldo) => {
  try {
    const resp = await api.get('/saldo');
    return setSaldo(resp.data.valor);
  } catch (err) {
    return console.log(err);
  }
};

const buscaTransacoes = async (setTransacoes) => {
  try {
    const resp = await api.get('/transacoes');
    return setTransacoes(resp.data);
  } catch (err) {
    return console.log(err);
  }
};

const atualizaSaldo = (novoSaldo) => {
  api
    .put('/saldo', { valor: novoSaldo })
    .then((resp) => console.log(resp.status))
    .catch((err) => console.log(err));
};

const salvaTransacao = (novaTransacao) => {
  api
    .post('/transacoes', novaTransacao)
    .then((resp) => console.log(resp.status))
    .catch((err) => console.log(err));
};

export default {
  buscaSaldo,
  atualizaSaldo,
  buscaTransacoes,
  salvaTransacao,
};
