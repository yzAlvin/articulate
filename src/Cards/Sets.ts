import { natures } from "./Natures";
import { objects } from "./Objects";
import { people } from "./People";
import { adjectives } from "./Adjectives";
import { randoms } from "./Randoms";
import { worlds } from "./Worlds";

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
export type personSetType = {
    dude: String[],
}
export const personSet: personSetType = {
    dude: people
}