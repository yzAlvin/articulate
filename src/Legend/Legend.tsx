import './legend.scss'

export const Legend = (props: {set: string[]}) => {
    return <div className="Legend">
        <h2>Legend</h2>
        {props.set.map((k, i) => 
        <div className="key" key={i}>
            <span className={`Category ${k}`} style={{background: `var(--${k}-color)`}}>{k[0].toUpperCase()}</span>
            <span> = </span>
            <span className={`${k} LegendKey`} style={{color: `var(--${k}-color)`}}>{k.toUpperCase()}</span>
        </div>
        )}
    </div>
}