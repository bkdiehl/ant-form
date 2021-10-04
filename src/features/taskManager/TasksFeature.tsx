import React from 'react';
import { PartialRouteObject, Route, useRoutes } from 'react-router';

import { FeatureProvider } from 'src/providers';
import { useFeatureStore } from 'src/stores';

const Task = React.lazy(() => import('./pages/Task'));
const Tasks = React.lazy(() => import('./pages/Tasks'));
const Manager = React.lazy(() => import('./pages/Manager'));
const Managers = React.lazy(() => import('./pages/Managers'));

export default function TasksFeature() {
  const { getFeature } = useFeatureStore();
  const config = getFeature<any>('tasks');

  const routes: PartialRouteObject[] = [
    {
      path: '/tasks',
      element: <Tasks />,
      children: [
        {
          path: '/:id',
          element: <Task />,
        },
      ],
    },
    {
      path: '/managers',
      element: <Managers />,
      children: [{ path: '/:id', element: <Manager /> }],
    },
  ];

  const element = useRoutes(routes);

  return <FeatureProvider value={config}>{element}</FeatureProvider>;
}
