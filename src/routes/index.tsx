import React from 'react';

import { RoutesWithSubRoutes } from 'src/components';

import { FeatureRoutes } from './featureRoutes';

const Home = React.lazy(() => import('../pages/Home'));
const Form = React.lazy(() => import('../pages/Form'));
const TablePage = React.lazy(() => import('../pages/TablePage'));
const List = React.lazy(() => import('../pages/List'));
const ListItem = React.lazy(() => import('../pages/ListItem'));
const TestModal = React.lazy(() => import('../pages/Modals/TestModal'));

const AppLayout = ({ routes }) => {
  return <RoutesWithSubRoutes routes={routes} />;
};

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      component: AppLayout,

      routes: [
        { path: '/', component: Home, title: 'Home Page', exact: true },
        { path: '/form', component: Form },
        { path: '/table', component: TablePage },
        {
          path: '/list',
          component: List,
          routes: [
            { path: '/:id', component: ListItem },
            { path: '/:id/edit', component: TestModal },
          ],
        },
      ],
    },
    // { path: '/', component: Home, title: 'Home Page', exact: true },
    // { path: '/form', component: Form },
    // { path: '/table', component: TablePage },
    // {
    //   path: '/list',
    //   component: List,
    //   routes: [
    //     { path: '/:id', component: ListItem },
    //     { path: '/:id/edit', component: TestModal },
    //   ],
    // },
  ];

  return (
    <>
      <RoutesWithSubRoutes routes={routes} />
      <FeatureRoutes />
    </>
  );
};
