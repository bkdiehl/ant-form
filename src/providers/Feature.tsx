import React from 'react';

type State = Record<string, unknown>;

type FeatureProviderProps = {
  children: React.ReactNode;
  value: State;
};

const FeatureContext = React.createContext<any>(undefined);

export function useFeatureContext<T = Record<string, unknown>>() {
  const context = React.useContext<T>(FeatureContext);
  if (!context) {
    throw new Error(`Feature components cannot be rendered outside the FeatureContext`);
  }
  return context;
}

export function FeatureProvider({ children, value }: FeatureProviderProps) {
  return <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>;
}
