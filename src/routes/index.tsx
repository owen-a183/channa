import { useRoutes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { Home } = lazyImport(() => import('@/features/home'), 'Home');
const { Articles } = lazyImport(() => import('@/features/articles'), 'Articles');

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/artikel',
      element: <Articles />,
    },
  ]);

  return <>{routes}</>;
};
