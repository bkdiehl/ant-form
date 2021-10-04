import { Fragment, useMemo } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { RouteDefinition } from 'src/types';

function RouteWithSubRoutes(route: RouteDefinition) {
  console.log('route', route.path);
  return (
    <Route path={route.path} exact={route.exact}>
      <route.component routes={route.routes} />
    </Route>
  );
}

type RoutesWithSubRoutesType = {
  routes: RouteDefinition[];
  exclusive?: boolean;
  props?;
};

export function RoutesWithSubRoutes({ routes, exclusive = true }: RoutesWithSubRoutesType) {
  const Wrapper = exclusive ? Switch : Fragment;
  const renderRoutes = useMemo(() => {
    routes.forEach((route) => {
      // route.path = route.path.replace('//', '/');
      route.routes?.forEach((x) => {
        x.path = `${route.path}${x.path}`;
      });
    });
    return routes;
  }, [routes]);
  console.log('renderRoutes', renderRoutes);
  return (
    <Wrapper>
      {renderRoutes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Wrapper>
  );
}
