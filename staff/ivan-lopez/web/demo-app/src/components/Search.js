import './Search.css'
import Details from './Details'
//import { searchVehicles } from '../logic'
import { useState } from 'react'
import Results from './Results'

function Search({ token }) {
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
        setView('details')
    }

    const showResults = () => setView('results')

    return <div className="search">
        <form className="search__form" onSubmit={search}>
            <input className="search__query-input" type="text" name="query" placeholder="query" />
            <button>Search</button>
        </form>

        {view === 'results' && <Results query={query} onItem={goToDetail} />}

        {view === 'details' && <Details token={token} vehicleId={vehicleId} onBack={showResults} />}
       
    </div>
}

export default Search