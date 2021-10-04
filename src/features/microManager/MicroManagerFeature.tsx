import React from 'react';

import { FeatureProvider } from 'src/providers';
import { useFeatureStore } from 'src/stores';
import { RouteDefinition } from 'src/types';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

export default function TasksFeature() {
  const { getFeature } = useFeatureStore();
  const config = getFeature<any>('microManager');

  const routes: RouteDefinition[] = [
    {
      path: '/microManager',
      component: Dashboard,
    },
  ];

  return <FeatureProvider value={config} routes={routes} />;
}
