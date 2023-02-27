import { createContext, useState } from 'react';

export const CabecalhoContext = createContext();

export const CabecalhoProvider = ({ children }) => {
  const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
  const [modalLoginAberta, setModalLoginAberta] = useState(false);
  const [burguerOpen, setBurguerOpen] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <CabecalhoContext.Provider
      value={{
        modalCadastroAberta,
        modalLoginAberta,
        burguerOpen,
        nomeUsuario,
        setModalCadastroAberta,
        setModalLoginAberta,
        setBurguerOpen,
        setNomeUsuario,
      }}
    >
      {children}
    </CabecalhoContext.Provider>
  );
};
