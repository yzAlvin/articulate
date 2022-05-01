import { CardProps } from "./Card";
const people: string[] = ["Alvin Zhao", "andy", "brian", "david"];
const worlds = ["Australia", "china", "ukraine", "new zealand"];
const objects = [
  "Bubble Wrap",
  "rubbish bin",
  "scratch post",
  "computer monitor",
];
const adjectives = ["Struggling", "digesting", "fishing", "flushing"];
const natures = ["Watermelon", "grape", "apple", "banana"];
const randoms = ["Beeline", "anime", "shadow", "sword"];

export const createCard = (
  people: string[],
  worlds: string[],
  objects: string[],
  adjectives: string[],
  natures: string[],
  randoms: string[]
): CardProps => {
  return {
    person: { value: people[0], spade: true },
    world: { value: worlds[0] },
    object: { value: objects[0] },
    adjective: { value: adjectives[0] },
    nature: { value: natures[0] },
    random: { value: randoms[0] },
  };
};
export const cards: CardProps[] = [
  {
    person: { value: "Sean Connery", spade: true },
    world: { value: "Harvard" },
    object: { value: "Christmas Cracker" },
    adjective: { value: "Consulting" },
    nature: { value: "Mosquito" },
    random: { value: "Alien" },
  },
  {
    person: { value: "Captain Kirk" },
    world: { value: "Ascot" },
    object: { value: "Tissue" },
    adjective: { value: "Broadcasting" },
    nature: { value: "Mullet", spade: true },
    random: { value: "Fragment" },
  },
  {
    person: { value: "The Wizard of Oz" },
    world: { value: "The Sea of Galilee" },
    object: { value: "Shotgun" },
    adjective: { value: "Cutting" },
    nature: { value: "Leopard", spade: true },
    random: { value: "Keep Off The Grass" },
  },
  {
    person: { value: "Denise Welch", spade: true },
    world: { value: "London Zoo" },
    object: { value: "Kilt" },
    adjective: { value: "Dozing" },
    nature: { value: "Mouse" },
    random: { value: "Pygmy" },
  },
  {
    person: { value: "Keirar Knightley" },
    world: { value: "Coventry" },
    object: { value: "Sock" },
    adjective: { value: "Winking" },
    nature: { value: "Deciduous Tree" },
    random: { value: "Artery", spade: true },
  },
  {
    person: { value: "J R R Tolkien", spade: true },
    world: { value: "St Tropez" },
    object: { value: "Portrait" },
    adjective: { value: "Judging" },
    nature: { value: "Reindeer" },
    random: { value: "Gruesome" },
  },
  {
    person: { value: "Russel Crowe" },
    world: { value: "The Galapagos Islands" },
    object: { value: "Paper Clip" },
    adjective: { value: "Drumming" },
    nature: { value: "Mango", spade: true },
    random: { value: "Summer" },
  },
  {
    person: { value: "Cameron Diaz" },
    world: { value: "Pluto" },
    object: { value: "Bullet" },
    adjective: { value: "Wheezing", spade: true },
    nature: { value: "Pansy" },
    random: { value: "Acrobatic" },
  },
  {
    person: { value: "Jude Law" },
    world: { value: "Zaire" },
    object: { value: "Rung" },
    adjective: { value: "Hopping", spade: true },
    nature: { value: "Dusk" },
    random: { value: "Sign Language" },
  },
  {
    person: { value: "Dennis the Menace", spade: true },
    world: { value: "Algeria" },
    object: { value: "Blackboard" },
    adjective: { value: "Twitching" },
    nature: { value: "Insect" },
    random: { value: "Bunch" },
  },
  {
    person: { value: "Rasputin" },
    world: { value: "The Greek Islands" },
    object: { value: "Satellite Dish" },
    adjective: { value: "Pushing", spade: true },
    nature: { value: "Bedbug" },
    random: { value: "Hocus Pocus" },
  },
  {
    person: { value: "Sir Edmund Hillary" },
    world: { value: "St Lucia" },
    object: { value: "Beard", spade: true },
    adjective: { value: "Bombing" },
    nature: { value: "Flounder" },
    random: { value: "Tomato Ketchup" },
  },
  {
    person: { value: "Louis Spence", spade: true },
    world: { value: "The Saraha Desert" },
    object: { value: "Antler" },
    adjective: { value: "Stealing" },
    nature: { value: "Whelk" },
    random: { value: "Sanctuary" },
  },
  {
    person: { value: "Santa Claus" },
    world: { value: "Leicester" },
    object: { value: "Bonfire" },
    adjective: { value: "Glistening" },
    nature: { value: "Virus" },
    random: { value: "Cosmetic" },
  },
  {
    person: { value: "Napolean Bonaparte" },
    world: { value: "Cambridge" },
    object: { value: "Mask" },
    adjective: { value: "Exploding", spade: true },
    nature: { value: "Guinea Fowl" },
    random: { value: "Innocent" },
  },
  {
    person: { value: "Ernest Hemingway" },
    world: { value: "Lake Victoria" },
    object: { value: "Ladle" },
    adjective: { value: "Congesting" },
    nature: { value: "Dromedary", spade: true },
    random: { value: "Anorexia" },
  },
  {
    person: { value: "The Phantom" },
    world: { value: "The Vatican" },
    object: { value: "Bunsen Burner", spade: true },
    adjective: { value: "Struggling" },
    nature: { value: "Aubergine" },
    random: { value: "Beeline" },
  },
  createCard(people, worlds, objects, adjectives, natures, randoms),
];
