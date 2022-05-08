import React, {useState} from 'react';
import './base.scss';
import {Card, CardProps} from "./Card/Card";
import {createCard} from "./Cards/Cards";
import { defaultSet, defaultSetType, wipSet, wipSetType } from './Cards/Sets';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Legend } from './Legend/Legend';

const App = () => {
  const [index, setIndex] = useState(Math.floor(Math.random()*100))
  const [set, setSet] = useState<defaultSetType | wipSetType>(defaultSet)

  const nextPerson = () => {
      setIndex(index + 1)
  }

  return (
    <>
    <Header/>
    <div className="App">
      <div className="changeSets">
        <button className="setSet button-59" onClick={() => setSet(defaultSet)}>Default</button>
        <button className="setSet button-59" onClick={() => setSet(wipSet)}>WIP</button>
      </div>
      <button className="Next" onClick={nextPerson}>
        <Card {...createCard<defaultSetType|wipSetType, CardProps>(set, index)}/>
      </button>
    </div>
    <Legend set={Object.keys(set)}/>
    <Footer/>
  </>
  );
}

export default App;
