import { CabecalhoContext } from 'common/context/CabecalhoContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

export const useCabecalhoContext = () => {
  const {
    modalCadastroAberta,
    modalLoginAberta,
    burguerOpen,
    nomeUsuario,
    setModalCadastroAberta,
    setModalLoginAberta,
    setBurguerOpen,
    setNomeUsuario,
  } = useContext(CabecalhoContext);

  let navigate = useNavigate();

  const token = sessionStorage.getItem('token');

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(token != null);

  const toggleHamburguer = () => {
    setBurguerOpen(!burguerOpen);
  };

  const aoEfetuarLogin = () => {
    setModalLoginAberta(false);
    setUsuarioEstaLogado(true);
    navigate('/home');
  };

  const aoEfetuarLogout = () => {
    setUsuarioEstaLogado(false);
    sessionStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const salvaNomeUsuario = (nomeUsuario) => {
    setNomeUsuario(nomeUsuario);
  };

  return {
    usuarioEstaLogado,
    setModalCadastroAberta,
    setModalLoginAberta,
    burguerOpen,
    modalCadastroAberta,
    modalLoginAberta,
    nomeUsuario,
    toggleHamburguer,
    aoEfetuarLogin,
    aoEfetuarLogout,
    salvaNomeUsuario,
  };
};
