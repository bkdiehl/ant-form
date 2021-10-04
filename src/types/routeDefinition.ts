import { ComponentType } from 'react';
import { RouteProps } from 'react-router';

export type RouteDefinition = Omit<RouteProps, 'component' | 'path'> & {
  path: string;
  component: ComponentType<any>;
  routes?: RouteDefinition[];
};
