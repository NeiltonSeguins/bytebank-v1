import React from 'react';
import estilos from './Servicos.module.css';
import icones from './icones.json';

export default function Servicos() {
  return (
    <section className={estilos.container}>
      <div className={estilos.detalhe__superior} />
      <div className={estilos.wrapper}>
        {icones.map((icone) => {
          return (
            <div key={icone.servico} className={estilos.servicos}>
              <img src={icone.imagem} alt={icone.servico} />
              <h5>{icone.servico}</h5>
            </div>
          );
        })}
      </div>
      <div className={estilos.detalhe__inferior} />
    </section>
  );
}
