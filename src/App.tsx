import './App.css';

import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from 'src/routes';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Router>
          <AppRoutes />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
