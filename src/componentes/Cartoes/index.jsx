import React from 'react';
import estilos from './Cartoes.module.css';

export default function Cartoes() {
  return (
    <section className={estilos.container}>
      <div className={estilos.detalhe__superior} />
      <h2>Meus cartões</h2>
      <div className={estilos.detalhe__inferior} />
    </section>
  );
}
