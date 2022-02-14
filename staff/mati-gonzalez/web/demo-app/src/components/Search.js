import './Search.css'
import Detail from './Detail'
import { useState } from 'react'
import Results from './Results'


function Search() {
    const [query, setQuery] = useState()
    const [view, setView] = useState()
    const [vehicleId, setVehicleId] = useState()

    const search = event => {
        event.preventDefault()

        const query = event.target.query.value

        setQuery(query)
        
        showResults()
    }

    const goToDetail = id => {
        setVehicleId(id)
        setView('detail')
    }

    const showResults = () => setView('results')

    return <div className="search">
        <form className="search__form" onSubmit={search}>
            <input className="search__query-input" type="text" name="query" placeholder="query" />
            <button>Search</button>
        </form>

        {view === 'results' && <Results query={query} onItem={goToDetail} />}

        {view === 'detail' && <Detail vehicleId={vehicleId} onBack={showResults} />}
    </div>
}

export default Search