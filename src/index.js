import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';

import PaginaErro from './PaginaErro';
import Cartoes from './rotas/Cartoes/Cartoes';
import Investimentos from './rotas/Investimentos/Investimentos';
import App from './rotas/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PaginaErro />,
  },
  {
    path: '/cartoes',
    element: <Cartoes />,
  },
  {
    path: '/investimentos',
    element: <Investimentos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
