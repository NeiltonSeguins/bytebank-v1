import React from "react";
import estilos from "./App.module.css";

import Cabecalho from "./componentes/Cabecalho";
import Extrato from "./componentes/Extrato";
import Menu from "./componentes/Menu";
import Principal from "./componentes/Principal";
import NovaTransacao from "./componentes/NovaTransacao";

function App() {
  return (
    <>
      <Cabecalho />
      <main className={estilos.container}>
        <Menu />
        <div className={estilos.wrapper}>
          <Principal />
          <NovaTransacao />
        </div>
        <Extrato />
      </main>
    </>
  );
}

export default App;
