import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <div>App</div>
          <div>Dev branch commit 1</div>
          <div>Developer/popup branch commit 1</div>
          <div>Developer/popup branch commit 2</div>
          <div>developer/login branch commit 1</div>
          <div>developer/login branch commit 2</div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </header>
    </div>
  );
}

export default App;
