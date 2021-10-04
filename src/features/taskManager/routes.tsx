import React from 'react';

const Task = React.lazy(() => import('./pages/Task'));
const Tasks = React.lazy(() => import('./pages/Tasks'));
const Manager = React.lazy(() => import('./pages/Manager'));
const Managers = React.lazy(() => import('./pages/Managers'));

export const taskManagerRoutes = [
  {
    path: '/tasks',
    component: Tasks,
    routes: [
      {
        path: '/:id',
        component: Task,
      },
    ],
  },
  { path: '/managers', component: Managers, routes: [{ path: '/:id', component: Manager }] },
];
