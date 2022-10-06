const url = "http://localhost:3004";

const buscarDados = async (url, options = {}) => {
  const resposta = await fetch(url, options);
  if (resposta.ok) {
    const dados = resposta.json();
    return dados;
  }
  throw new Error(resposta);
};

const listaTransacoes = async () => await buscarDados(`${url}/transacoes/`);
const buscaSaldo = () =>
  buscarDados(`${url}/conta/`).then((dados) => dados.saldo);

const atualizaTransacoes = (dados) =>
  buscarDados(`${url}/transacoes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

const atualizaSaldo = (saldo) =>
  buscarDados(`${url}/conta/`, {
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
