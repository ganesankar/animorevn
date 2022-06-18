import { createRoutes, Router } from './service';

// Layouts
import FormLayout from '~/layouts/FormLayout';

// Pages
import NotFound from '~/pages/404';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const routers: Router[] = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login />, layout: FormLayout },
  { path: '/register', element: <Register />, layout: FormLayout },
  { path: '*', element: <NotFound /> },
];

export default createRoutes(routers);
