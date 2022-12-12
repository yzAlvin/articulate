import { useState } from "react";
import { setType } from "../Cards/Sets";
import { Entry} from "../Entry/Entry";
import './card.scss'

export type CardProps = {
    deck: setType[]
};

export const Card = (props: CardProps) => {
    const [idx, setIdx] = useState(0)

    const handleClick = () => setIdx(idx + 1)

    const spadeIdx = Math.floor(Math.random() * props.deck.length)
    return <div className="Card" onClick={handleClick}>
        {
            props.deck.map((entry, i) => {
                return <Entry key={i} category={entry.category} value={entry.targets} idx={idx} isSpadee={spadeIdx === i}/>
            }
            )
        }
    </div>;
}