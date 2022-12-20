import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import SignIn from './pages/login' 
import SignUp from './pages/signup'
import DashboardAppPage from './pages/DashboardAppPage';
import ActivityPage from './pages/DashboardActivityPage';

import Page404 from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'activity', element: <ActivityPage /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: '/',
    //   element: <LoginPage />,
      element: <SignIn />
    },
    {
        path: 'sign-up',
      //   element: <LoginPage />,
        element: <SignUp />
      },
    // {
    //     element: <SimpleLayout />,
    //     children: [
    //       { element: <Navigate to="/dashboard/app" />, index: true },
    //       { path: '404', element: <Page404 /> },
    //       { path: '*', element: <Navigate to="/404" /> },
    //     ],
    // },
    // {
    //     path: '*',
    //     element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
