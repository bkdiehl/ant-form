import React from 'react';
import { Outlet, useRoutes } from 'react-router';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { useProgramStore } from 'src/stores';

import { FeatureRoutes } from './featureRoutes';

const Home = React.lazy(() => import('../pages/Home'));
const Form = React.lazy(() => import('../pages/Form'));
const TablePage = React.lazy(() => import('../pages/TablePage'));
const List = React.lazy(() => import('../pages/List'));
const ListItem = React.lazy(() => import('../pages/ListItem'));
const TestModal = React.lazy(() => import('../pages/Modals/TestModal'));

const AppLayout = () => {
  return <Outlet />;
};

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home />, title: 'Home Page' },
        { path: '/form', element: <Form /> },
        { path: '/table', element: <TablePage /> },
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

  return (
    <>
      {element}
      <FeatureRoutes />
    </>
  );
};
