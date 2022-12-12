import './entry.scss'
import '../_colours.scss'

export type EntryProps = {
    category: String
    value: string[]
    idx: number
    isSpadee: boolean
}

export function Entry(props: EntryProps) {
    const {category, value, idx, isSpadee} = props

    return <div className="Entry">
        <span className={`Category ${category}`} style={{background: `var(--${category}-color)`}}>{getCategoryLetter(category)}</span>
        <span className="Value">{value[idx % value.length]}</span>
        <span className={`Spade ${props.category}`} style={{background: `var(--${props.category}-color)`}}>{isSpade(isSpadee)}</span>
    </div>
}

const getCategoryLetter = (category: String): String => category.substring(0, 1).toUpperCase()

const isSpade = (spade: boolean | undefined): String => spade ? `♠` : String.fromCharCode(160)