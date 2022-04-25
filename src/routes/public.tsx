import { Navigate, Outlet } from 'react-router';

import { MainLayout } from '@/components/Layout';
import { lazyImport } from '@/utils/lazyImport';
const { Home } = lazyImport(() => import('@/features/home'), 'Home');
const { Articles } = lazyImport(() => import('@/features/articles'), 'Articles');

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const publicRoutes = [
  {
    path: '/',
    element: <App></App>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/artikel', element: <Articles /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
