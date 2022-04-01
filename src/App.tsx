import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, CardProps} from "./Card";

function App() {
  const entries: CardProps = {
    person: {value: 'Sean Connery', spade: true},
    world: {value: 'Harvard'},
    object: {value: 'Christmas Cracker'},
    adjective: {value: 'Consulting'},
    nature: {value: 'Mosquito'},
    random: {value: 'Alien'}
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
