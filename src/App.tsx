import React, {useState} from 'react';
import './base.scss';
import {Card, CardProps} from "./Card/Card";
import {createCard} from "./Cards/Cards";
import { defaultSet, defaultSetType } from './Cards/Sets';

const App = () => {
  const [index, setIndex] = useState(Math.floor(Math.random()*100))

    const prevPerson = () => {
        setIndex(index - 1)
    }

    const nextPerson = () => {
        setIndex(index + 1)
    }

  return (
    <div className="App">
        <button className="Next" onClick={nextPerson}>
            <Card {...createCard<defaultSetType, CardProps>(defaultSet, index)}/>
        </button>
        <button className="Prev" onClick={prevPerson}>{'<'}</button>
    </div>
  );
}

export default App;
