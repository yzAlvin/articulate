import './entry.scss'

export type EntryProps = {
    category: String
    value: String
    spade?: boolean
}

export function Entry(props: EntryProps) {
    return <div className="Entry">
        <span className={`Category ${props.category}`}>{getCategoryLetter(props.category)}</span>
        <span className="Value">{props.value}</span>
        <span className={`Spade ${props.category}`}>{isSpade(props.spade)}</span>
    </div>
}

const getCategoryLetter = (category: String): String => category.substring(0, 1).toUpperCase()

const isSpade = (spade: boolean | undefined): String => spade ? `♠` : String.fromCharCode(160)