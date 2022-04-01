import {Entry} from "./Entry";

export type CardProps = {
    person: string;
    world: string;
    object: string;
    adjective: string;
    nature: string;
    random: string;
};

export const Card = (props: CardProps) =>
    <div className="Card">
        {
            Object.entries(props)
                .map((entry) =>
                    <Entry category={entry[0]} value={entry[1]}/>
                )
        }
    </div>;