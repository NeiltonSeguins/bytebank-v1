import React from 'react';
import estilos from './Menu.module.css';

const listaMenu = [
  { link: 'Inicial', href: '/' },
  { link: 'Cartões', href: '/cartoes' },
  { link: 'Transferências', href: '/transferencias' },
  { link: 'Investimentos', href: '/investimentos' },
  { link: 'Outros serviços', href: '/outros-servicos' },
];

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      {listaMenu.map((item, indice) => {
        return (
          <div key={item.href} className={estilos.item}>
            <a href={item.href} className={estilos.link}>
              {item.link}
            </a>
            {indice !== listaMenu.length - 1 && (
              <div className={estilos.divisor} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
