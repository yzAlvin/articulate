import React from 'react';
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
  const entries2: CardProps = {
    person: {value: 'Captain Kirk'},
    world: {value: 'Ascot'},
    object: {value: 'Tissue'},
    adjective: {value: 'Broadcasting'},
    nature: {value: 'Mullet', spade: true},
    random: {value: 'Fragment'}
  };
  const cards = [entries, entries2]
  return (
    <div className="App">
      <header className="App-header">
        {cards.map(card => <Card {...card}/>)}
      </header>
    </div>
  );
}

export default App;
