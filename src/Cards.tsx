import {CardProps} from "./Card";

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
const entries3: CardProps = {
    person: {value: 'The Wizard of Oz'},
    world: {value: 'The Sea of Galilee'},
    object: {value: 'Shotgun'},
    adjective: {value: 'Cutting'},
    nature: {value: 'Leopard', spade: true},
    random: {value: 'Keep Off The Grass'}
};
export const cards = [entries, entries2, entries3]