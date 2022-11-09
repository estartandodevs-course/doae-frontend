import { createBrowserRouter, Outlet } from 'react-router-dom';

// =====================================================
// * Faça a importação da página que você criou
// =====================================================
import { Navbar } from '../components/Navbar';
import HomePage from '../pages/index';
import Login from '../pages/login';
import Donation from '../pages/donation';
import Local from '../pages/local';

// ========================================================================
// * Adicione essa página no array de rotas para que ela seja renderizada
// ========================================================================
const AppLayout = () => (
  <>
    <Outlet />
    <Navbar />
  </>
);

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/entrar',
        element: <Login />,
      },
      {
        path: '/doacoes',
        element: <Donation />,
      },
      {
        path: '/localizar',
        element: <Local />,
      },
    ],
  },
]);

export default routes;
