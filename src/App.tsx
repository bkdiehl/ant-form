import './App.css';

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path="/form" component={React.lazy(() => import('./pages/Form'))} />
          <Route path="/" component={React.lazy(() => import('./pages/Home'))} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
