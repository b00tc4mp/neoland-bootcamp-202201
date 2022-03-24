import './Results.css'

function Results({ items }) {
    if (items)
        if (items.length)
            return <ul className="results__list">
                {items.map(item => <li key={item} className="results__item">"{item}"</li>)}
            </ul>
        else
            return <p className="results__feedback">no results</p>
        else return null
}

export default Results