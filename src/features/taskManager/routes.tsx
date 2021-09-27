import React from 'react';
import { PartialRouteObject } from 'react-router';

const Task = React.lazy(() => import('./pages/Task'));
const Tasks = React.lazy(() => import('./pages/Tasks'));
const Manager = React.lazy(() => import('./pages/Manager'));
const Managers = React.lazy(() => import('./pages/Managers'));

export const taskManagerRoutes: PartialRouteObject[] = [
  { path: '/tasks', element: <Tasks />, children: [{ path: '/:id', element: <Task /> }] },
  { path: '/managers', element: <Managers />, children: [{ path: '/:id', element: <Manager /> }] },
];
