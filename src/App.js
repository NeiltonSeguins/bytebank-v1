import React from "react";
import estilos from "./App.module.css";
import Cabecalho from "./componentes/Cabecalho";
import Extrato from "./componentes/Extrato";
import Menu from "./componentes/Menu";

function App() {
  return (
    <>
      <Cabecalho />
      <div className={estilos.container}>
        <Menu />
        <div></div>
        <Extrato />
      </div>
    </>
  );
}

export default App;
