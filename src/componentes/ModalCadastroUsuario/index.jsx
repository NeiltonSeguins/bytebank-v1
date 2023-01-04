import React from 'react';
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
          <p className={estilos.modal__descricao}>
            Preencha os campos abaixo para criar sua conta corrente!
          </p>
          <form onSubmit={onSubmit} className={estilos.modal__form}>
            <label className={estilos.form__nome} htmlFor="nome">
              Nome
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome completo"
              />
            </label>
            <label className={estilos.form__email} htmlFor="email">
              E-mail
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
            </label>
            <label className={estilos.form__senha} htmlFor="senha">
              Senha
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
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
