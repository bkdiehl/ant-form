import React from 'react';

import { useProgramStore } from 'src/stores';

const TasksManager = React.lazy(() => import('../features/taskManager/TasksFeature'));
const MicroManager = React.lazy(() => import('../features/microManager/MicroManagerFeature'));

export function FeatureRoutes() {
  const { hasFeature } = useProgramStore();
  return (
    <>
      {hasFeature('tasks') && <TasksManager />}
      {hasFeature('microManager') && <MicroManager />}
    </>
  );
}
