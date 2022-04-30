import './scss/entry.scss'

export type EntryProps = {
    category: string
    value: string
    spade?: boolean
}

export function Entry(props: EntryProps) {
    return <div className="Entry">
        <span className={`Category ${props.category}`}>{getCategoryLetter(props.category)}</span>
        <span className="Value">{props.value}</span>
        <span className={`Spade ${props.category}`}>{isSpade(props.spade)}</span>
    </div>
}

const getCategoryLetter = (category: string): string => category.substring(0, 1).toUpperCase()

const isSpade = (spade: boolean | undefined): string => spade ? `♠` : String.fromCharCode(160)