import React from 'react';
import { PartialRouteObject, Route, useRoutes } from 'react-router';

import { FeatureProvider } from 'src/providers';
import { useFeatureStore } from 'src/stores';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

export default function TasksFeature() {
  const { getFeature } = useFeatureStore();
  const config = getFeature<any>('microManager');

  const routes: PartialRouteObject[] = [
    {
      path: '/microManager',
      element: <Dashboard />,
    },
  ];

  const element = useRoutes(routes);

  return <FeatureProvider value={config}>{element}</FeatureProvider>;
}
