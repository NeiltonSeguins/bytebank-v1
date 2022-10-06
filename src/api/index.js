const url = "http://localhost:3001";
const transacoes = `${url}/transacoes`;

const conectaApi = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    const dados = res.json();
    return dados;
  }
  throw new Error(res);
};

const listaTransacoes = async () => await conectaApi(transacoes);

const atualizaTransacoes = (dados) =>
  conectaApi(transacoes, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  listaTransacoes,
  atualizaTransacoes,
};
