import { Link } from 'react-router-dom';

import logo from './../logo.svg';

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link className="App-link" to="/form">
        Form
      </Link>
      <Link className="App-link" to="/list">
        List
      </Link>
      <Link className="App-link" to="/table">
        Table
      </Link>
      {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a> */}
    </header>
  );
}

export default Home;
