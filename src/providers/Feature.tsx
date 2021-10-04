import React from 'react';

import { RoutesWithSubRoutes } from 'src/components';
import { RouteDefinition } from 'src/types';

type State = Record<string, unknown>;

type FeatureProviderProps = {
  value: State;
  routes: RouteDefinition[];
};

const FeatureContext = React.createContext<any>(undefined);

export function useFeatureContext<T = Record<string, unknown>>() {
  const context = React.useContext<T>(FeatureContext);
  if (!context) {
    throw new Error(`Feature components cannot be rendered outside the FeatureContext`);
  }
  return context;
}

export function FeatureProvider({ value, routes }: FeatureProviderProps) {
  return (
    <FeatureContext.Provider value={value}>
      {/* TODO.filter routes based off permissions */}
      <RoutesWithSubRoutes routes={routes} />
    </FeatureContext.Provider>
  );
}
