import { createRoutes, Router } from './service';

// Pages
import NotFound from '~/pages/404';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const routers: Router[] = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '*', element: <NotFound /> },
];

export default createRoutes(routers);
