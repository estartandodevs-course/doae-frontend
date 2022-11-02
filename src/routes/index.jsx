import { createBrowserRouter } from 'react-router-dom';

// =====================================================
// * Faça a importação da página que você criou
// =====================================================
import HomePage from '../pages/index';
import Login from '../pages/login';

// ========================================================================
// * Adicione essa página no array de rotas para que ela seja renderizada
// ========================================================================
const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/entrar',
    element: <Login />,
  },
]);

export default routes;
