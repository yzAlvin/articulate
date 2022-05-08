import React, {useState} from 'react';
import './base.scss';
import {Card, CardProps} from "./Card/Card";
import {createCard} from "./Cards/Cards";
import { defaultSet, defaultSetType } from './Cards/Sets';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Legend } from './Legend/Legend';

const App = () => {
  const [index, setIndex] = useState(Math.floor(Math.random()*100))

    const nextPerson = () => {
        setIndex(index + 1)
    }

  return (
    <>
    <Header/>
    <div className="App">
      <button className="Next" onClick={nextPerson}>
        <Card {...createCard<defaultSetType, CardProps>(defaultSet, index)}/>
      </button>
    </div>
    <Legend set={Object.keys(defaultSet)}/>
    <Footer/>
  </>
  );
}

export default App;
