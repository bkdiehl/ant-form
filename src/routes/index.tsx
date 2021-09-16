import React from 'react';
import { Outlet, useRoutes } from 'react-router';

const Home = React.lazy(() => import('../pages/Home'));
const Form = React.lazy(() => import('../pages/Form'));
const List = React.lazy(() => import('../pages/List'));
const ListItem = React.lazy(() => import('../pages/ListItem'));
const TestModal = React.lazy(() => import('../pages/Modals/TestModal'));

const MainLayout = ({ children }) => {
  return <div style={{ margin: '0 auto', width: '100%', maxWidth: '800px' }}>{children}</div>;
};

const AppLayout = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home />, title: 'Home Page' },
        { path: '/form', element: <Form /> },
        {
          path: '/list',
          element: <List />,
          children: [
            { path: '/:id', element: <ListItem /> },
            { path: '/:id/edit', element: <TestModal /> },
          ],
        },
      ],
    },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
