import {Entry} from "./Entry";

export type CardProps = {
    person: {value: string; spade?: boolean}
    world: {value: string; spade?: boolean}
    object: {value: string; spade?: boolean}
    adjective: {value: string; spade?: boolean}
    nature: {value: string; spade?: boolean}
    random: {value: string; spade?: boolean}
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