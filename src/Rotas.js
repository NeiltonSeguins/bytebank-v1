import { Route, Routes, useLocation } from 'react-router-dom';
import Cartoes from './componentes/Cartoes';
import Investimentos from './componentes/Investimentos';
import Servicos from './componentes/Servicos';
import Pagina404 from './paginas/Pagina404';
import App from './paginas/Principal/App';

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cartoes" element={<Cartoes />} />
        <Route path="investimentos" element={<Investimentos />} />
        <Route path="servicos" element={<Servicos />} />
      </Route>

      <Route path="*" element={<Pagina404 />} />
    </Routes>
  );
}

// exemplo com useLocation - Talvez não entre na ementa
export const RotaAtual = () => {
  const location = useLocation();

  return <div data-testid="rota-atual">{location.pathname}</div>;
};
