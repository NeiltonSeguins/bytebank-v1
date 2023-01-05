import estilos from './ModalCadastroUsuario.module.css';
import { useState } from 'react';
import api from 'services/api';
import ilustracaoCadastro from './assets/ilustracao-cadastro.svg';
import Botao from 'componentes/Botao';

export default function ModalCadastroUsuario({ aberta, aoFechar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const usuario = {
      nome,
      email,
      senha,
    };

    api
      .post('/public/cadastrar', usuario)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        aoFechar();
      })
      .catch((erro) => {
        console.log(erro);
        alert('Ops! Alguma coisa deu errado');
      });
  };

  if (!aberta) {
    return <></>;
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={estilos.background__modal}
        onClick={aoFechar}
        aria-hidden="true"
      />
      <div className={estilos.janela__modal}>
        <button className={estilos.fechar__modal} onClick={aoFechar}>
          X
        </button>
        <div className={estilos.modal__container}>
          <img
            src={ilustracaoCadastro}
            alt="pessoa ao lado de um notebook com cadeado"
          />
          <p className={estilos.modal__descricao}>
            Preencha os campos abaixo para criar sua conta corrente!
          </p>
          <form onSubmit={onSubmit} className={estilos.modal__form}>
            <label htmlFor="nome">
              Nome
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </label>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label htmlFor="senha">
              Senha
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
            </label>
            <div className={estilos.termo__container}>
              <input className={estilos.checkbox} type="checkbox" />
              <p>
                Li e estou ciente quanto às condições de tratamento dos meus
                dados conforme descrito na Política de Privacidade do banco.
              </p>
            </div>
            <Botao texto="Criar conta" />
          </form>
        </div>
      </div>
    </>
  );
}
