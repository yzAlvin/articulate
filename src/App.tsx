import React from 'react';
import './App.css';
import {Card, CardProps} from "./Card";
import {cards} from "./Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {cards.map(card => <Card {...card}/>)}
      </header>
    </div>
  );
}

export default App;
