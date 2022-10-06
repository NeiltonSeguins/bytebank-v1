const url = "http://localhost:8080";
const transacoes = `${url}/transacoes`;
const conta = `${url}/conta`;

const conectaApi = async (url, opcoes = {}) => {
  const res = await fetch(url, opcoes);
  if (res.ok) {
    const dados = res.json();
    return dados;
  }
  throw new Error(res);
};

const listaTransacoes = async () => await conectaApi(transacoes);
const buscaSaldo = () => conectaApi(conta).then((dados) => dados.saldo);

const atualizaTransacoes = (dados) =>
  conectaApi(transacoes, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

const atualizaSaldo = (saldo) =>
  conectaApi(conta, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ saldo }),
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  listaTransacoes,
  atualizaTransacoes,
  atualizaSaldo,
  buscaSaldo,
};
