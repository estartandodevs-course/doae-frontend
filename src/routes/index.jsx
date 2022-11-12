import { createBrowserRouter, Outlet } from 'react-router-dom';

// =====================================================
// * Faça a importação da página que você criou
// =====================================================
import HomePage from '../pages/index';
import Login from '../pages/login';
import Donation from '../pages/donation';
import Local from '../pages/local';
import ProfileInstitution from '../pages/profile';
import TargetsAndProducts from '../pages/target';
import ItemsInstitution from '../pages/items';
import Auth from '../templates/Login/Auth';

// ========================================================================
// * Adicione essa página no array de rotas para que ela seja renderizada
// ========================================================================
const AppLayout = () => (
  <>
    <Outlet />
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
      {
        path: '/perfil',
        element: <ProfileInstitution />,
      },
      {
        path: '/metas',
        element: <TargetsAndProducts />,
      },
      {
        path: '/items',
        element: <ItemsInstitution />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },
]);

export default routes;
