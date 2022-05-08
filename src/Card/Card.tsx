import {Entry} from "../Entry/Entry";
import './card.scss'

type CardValue = {
    value: String;
    spade?: boolean;
}

export type CardProps = {
    person: CardValue
    world: CardValue
    object: CardValue
    adjective: CardValue
    nature: CardValue
    random: CardValue
};

export const Card = (props: CardProps) =>
    <div className="Card">
        {
            Object.entries(props)
                .map((entry, i) =>
                    <Entry key={i} category={entry[0]} value={entry[1].value} spade={entry[1].spade}/>
                )
        }
    </div>;