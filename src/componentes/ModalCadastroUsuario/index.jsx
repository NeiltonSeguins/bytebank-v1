import React from 'react';
import estilos from './ModalCadastroUsuario.module.css';
import { useState } from 'react';
import api from 'services/api';
import ilustracaoCadastro from './assets/ilustracao-cadastro.svg';

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
      .post('public/cadastrar', usuario)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        aoFechar();
      })
      .catch(() => {
        alert('Ops! Alguma coisa deu errado');
      });
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={estilos.background__modal}
        onClick={aoFechar}
        aria-hidden="true"
      />
      ;
      <div className={estilos.janela__modal}>
        <div className={estilos.modal__container}>
          <img
            src={ilustracaoCadastro}
            alt="pessoa ao lado de um notebook com cadeado"
          />
          <p>Preencha os campos abaixo para criar sua conta corrente!</p>
          <form>
            <label htmlFor="nome">
              Nome
              <input type="text" placeholder="Digite seu nome completo" />
            </label>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
            </label>
            <label htmlFor="senha">
              Senha
              <input type="password" placeholder="Digite sua senha" />
            </label>
          </form>
          <div>
            <input type="checkbox" />
            <p>
              Li e estou ciente quanto às condições de tratamento dos meus dados
              conforme descrito na Política de Privacidade do banco.
            </p>
          </div>
          <button>Criar conta</button>
        </div>
      </div>
    </>
  );
}
