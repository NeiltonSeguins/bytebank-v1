import { useRouteError } from 'react-router-dom';
import './index.css';

export default function PaginaErro() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado aconteceu aqui</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
