import './Search.sass'
import { useState } from 'react'

export function Search({ onItem, onQuery, query }) {
    const [view, setView] = useState(query && 'results')
    const icon = '🔍'

    const search = event => {
        event.preventDefault()

        const query = event.target.query.value

        onQuery(query)

        showResults()
    }

    const showResults = () => setView('results')

    return <div className="search">
        <form className="search__form" onSubmit={search}>
            
                <input className="search__query-input" type="text" name="query" placeholder="Query" defaultValue={query} />
                <span className="search__icon">🔍</span>
            
            <button className="search__button">Search</button>
        </form>

      {/* {view === 'results' && <Results query={query} /* onItem={onItem} */ />}  */}
    </div>
}
