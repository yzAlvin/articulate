import React, {useState} from 'react';
import './scss/base.scss';
import {Card} from "./Card";
import {cards as data} from "./Cards";

const App = () => {
  const [cards] = useState(data)
  const [index, setIndex] = useState(0)

    const prevPerson = () => {
        setIndex((index) => (index - 1) < 0 ? cards.length - 1 : index - 1)
    }

    const nextPerson = () => {
        setIndex((index) => (index + 1) % (cards.length))
    }

  return (
    <div className="App">
        <button className="Next" onClick={nextPerson}>
            <Card {...cards[index]}/>
        </button>
        <button className="Prev" onClick={prevPerson}>{'<'}</button>
    </div>
  );
}

export default App;
