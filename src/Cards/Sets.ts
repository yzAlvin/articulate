import { natures } from "./Natures";
import { objects } from "./Objects";
import { people } from "./People";
import { adjectives } from "./Adjectives";
import { randoms } from "./Randoms";
import { worlds } from "./Worlds";
import { twitchStreamers } from "./TwitchStreamers";
import { anime } from "./Anime";
import { fastFoods } from "./FastFoodRestaurants";
import { games } from "./Games";
import { brands } from "./Brands";

export type defaultSetType = {
    nature: String[],
    object: String[],
    person: String[],
    adjective: String[],
    random: String[],
    world: String[],
}
export const defaultSet: defaultSetType = {
    person: people, 
    world: worlds,
    object: objects,
    adjective: adjectives,
    nature: natures,
    random: randoms, 
}
export type wipSetType = {
    twitch: String[],
    anime: String[],
    game: String[],
    fastFood: string[],
    brand: string[],
}
export const wipSet: wipSetType = {
    twitch: twitchStreamers,
    anime: anime,
    game: games,
    fastFood: fastFoods,
    brand: brands,
}