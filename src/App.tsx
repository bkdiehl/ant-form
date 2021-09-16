import './App.css';

import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from 'src/routes';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Router>
          <AppRoutes />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
