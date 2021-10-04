import React from 'react';
import { Route, Switch } from 'react-router';

import { RoutesWithSubRoutes } from 'src/components';
import { FeatureProvider } from 'src/providers';
import { useFeatureStore } from 'src/stores';
import { RouteDefinition } from 'src/types/routeDefinition';

const Task = React.lazy(() => import('./pages/Task'));
const Tasks = React.lazy(() => import('./pages/Tasks'));
const Manager = React.lazy(() => import('./pages/Manager'));
const Managers = React.lazy(() => import('./pages/Managers'));

export default function TasksFeature() {
  const { getFeature } = useFeatureStore();
  const config = getFeature<any>('tasks');

  const routes: RouteDefinition[] = [
    {
      path: '/tasks',
      component: Tasks,
      routes: [
        {
          path: '/:id',
          component: Task,
          routes: [
            {
              path: '/again',
              component: Task,
            },
          ],
        },
      ],
    },
    {
      path: '/managers',
      component: Managers,
      routes: [
        {
          path: '/:id',
          component: Manager,
        },
      ],
    },
  ];

  return <FeatureProvider value={config} routes={routes}></FeatureProvider>;
}
