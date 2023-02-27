import { Route, Routes } from 'react-router-dom';

import PaginaPadrao from 'paginas/PaginaPadrao';
import Home from 'paginas/Home';
import Cartoes from './paginas/Home/Cartoes';
import Investimentos from './paginas/Home/Investimentos';
import Servicos from './paginas/Home/Servicos';
import Inicio from 'paginas/Inicio';
import Pagina404 from 'paginas/Pagina404';
import { HomeProvider } from 'common/context/HomeContext';
import { CabecalhoProvider } from 'common/context/CabecalhoContext';

export default function AppRoutes() {
  return (
    <HomeProvider>
      <CabecalhoProvider>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/home" element={<Home />}>
              <Route path="cartoes" element={<Cartoes />} />
              <Route path="investimentos" element={<Investimentos />} />
              <Route path="servicos" element={<Servicos />} />
            </Route>
          </Route>

          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </CabecalhoProvider>
    </HomeProvider>
  );
}
