import { Route, Routes, useLocation } from 'react-router-dom';
import Cartoes from './rotas/Cartoes/Cartoes';
import Investimentos from './rotas/Investimentos/Investimentos';
import App from './rotas/App';

export function Rotas() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cartoes" element={<Cartoes />} />
        <Route path="/investimentos" element={<Investimentos />} />
      </Routes>
    </div>
  );
}

// exemplo com useLocation
export const RotaAtual = () => {
  const location = useLocation();

  return <div data-testid="rota-atual">{location.pathname}</div>;
};
