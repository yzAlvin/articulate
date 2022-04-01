import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from "./Card";

function App() {
  const entries = {
    person: 'Sean Connery',
    world: 'Harvard',
    object: 'Christmas Cracker',
    adjective: 'Consulting',
    nature: 'Mosquito',
    random: 'Alien'
  };
  return (
    <div className="App">
      <header className="App-header">
        <Card {...entries}/>
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
      </header>
    </div>
  );
}

export default App;
