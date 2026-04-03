import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Promotions } from './pages/Promotions';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/servicios',
    Component: Services,
  },
  // {
  //   path: '/galeria',
  //   Component: Gallery,
  // },
  {
    path: '/promociones',
    Component: Promotions,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);