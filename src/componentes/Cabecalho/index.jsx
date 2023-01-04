import estilos from './Cabecalho.module.css';
import { ReactComponent as Logo } from '../../assets/bytebank.svg';
import avatarUsuario from '../../assets/avatar.svg';
import { useState } from 'react';
import ModalCadastroUsuario from 'componentes/ModalCadastroUsuario';
import Botao from 'componentes/Botao';

export default function Cabecalho() {
  const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
  const [modalLoginAberta, setModalLoginAberta] = useState(false);

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(false);

  const aoEfetuarLogin = () => {
    setUsuarioEstaLogado(true);
  };

  const efetuarLogout = () => {
    setUsuarioEstaLogado(false);
  };

  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.container}>
        <Logo />
        {!usuarioEstaLogado && (
          <>
            <div className={estilos.botoes}>
              <Botao
                texto="Abrir minha conta"
                onClick={() => setModalCadastroAberta(true)}
              />
              <ModalCadastroUsuario
                aberta={modalCadastroAberta}
                aoFechar={() => setModalCadastroAberta(false)}
              />
              <Botao
                texto="Já tenho conta"
                tipo="secundario"
                onClick={() => setModalLoginAberta(true)}
              />
              {/* <ModalCadastroUsuario
                aberta={modalCadastroAberta}
                aoFechar={() => setModalLoginAberta(false)}
              /> */}
            </div>
          </>
        )}
        {usuarioEstaLogado && (
          <div className={estilos.usuario}>
            <p>Joana Fonseca Gomes</p>
            <img src={avatarUsuario} alt="Ícone de um avatar de usuário" />
          </div>
        )}
      </div>
    </header>
  );
}
