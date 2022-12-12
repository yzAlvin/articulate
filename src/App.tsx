import React, {useState} from 'react';
import './base.scss';
import {Card as Card} from "./Card/Card";
import { newAdjectives } from './Cards/Adjectives';
import { newAnime } from './Cards/Anime';
import { newBrands } from './Cards/Brands';
import { newFastFoods } from './Cards/FastFoodRestaurants';
import { newGames } from './Cards/Games';
import { newNatures } from './Cards/Natures';
import { newObject } from './Cards/Objects';
import { newPerson } from './Cards/People';
import { newRandom } from './Cards/Randoms';
import { setType } from './Cards/Sets';
import { newTwitchStreamers } from './Cards/TwitchStreamers';
import { newWorld } from './Cards/Worlds';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Legend } from './Legend/Legend';

const defaultSet = [newPerson, newWorld, newObject, newAdjectives, newNatures, newRandom]
const wipSet = [newTwitchStreamers, newAnime, newGames, newFastFoods, newBrands]

const App = () => {
  const [index, setIndex] = useState(Math.floor(Math.random()*100))
  const [set, setSet] = useState<setType[]>(defaultSet)

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
        <Card deck={set}/>
      </button>
    </div>
    <Legend set={set.map(deck => deck.category)}/>
    <Footer/>
  </>
  );
}

export default App;
