import React from 'react';
import estilos from './FormConta.module.css';
import ilustracao from 'assets/ilustracao-minha-conta.svg';
import Botao from 'componentes/Botao';

export const FormConta = () => {
  return (
    <div className={estilos.container}>
      <div className={estilos.detalhe__superior}/>
      <h1>Minha conta</h1>
      <div className={estilos.envelope}>
        <img
          src={ilustracao}
          alt="Ilustração de personagem fazendo alterações em um quadro"
        />
        <form className={estilos.formulario}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Joana da Silva Oliveira"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="joanadasilva@email.com.br"
          />
          <label htmlFor="senha">Senha</label>
          <input type="text" name="senha" placeholder="joana123" />
          <Botao texto="Salvar alerações" dataTest="botao-salvar" />
        </form>
      </div>
      <div className={estilos.detalhe__inferior}/>
    </div>
  );
};
