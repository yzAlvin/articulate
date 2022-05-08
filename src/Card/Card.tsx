import {Entry} from "../Entry/Entry";
import './card.scss'

type CardValue = {
    value: string;
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
                .map((entry) =>
                    <Entry category={entry[0]} value={entry[1].value} spade={entry[1].spade}/>
                )
        }
    </div>;