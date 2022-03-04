import './Search.css'
import Results from './Results'
import { useState } from 'react'

function Search({ onItem, onQuery, query, token }) {
    
    const [view, setView] = useState(query && 'results')
    
    const search = event => {
        event.preventDefault()

        const query = event.target.query.value

        onQuery(query)
        showResults()
    }

    const showResults = () => setView('results')

    return <div className="search">
        <form className="search__form" onSubmit={search}>
            <input className="search__query-input" type="text" name="query" placeholder="query" defaultValue={query}/>
            <button>Search</button>
        </form>
        {view === 'results' && <Results token={token} query={query} onItem={onItem}/>}
    </div>
}

export default Search