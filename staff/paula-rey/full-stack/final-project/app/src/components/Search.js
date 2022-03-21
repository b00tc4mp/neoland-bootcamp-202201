import './Search.sass'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import Results from './Results'

function Search(onFilter, filter, onItem) {
    // const [view, setView] = useState(filter && 'results')
    // const [name, setName] = useState('name')

    // const {query,type,city} = filter
    
    const search = event => {
        event.preventDefault()
        debugger

        const query = event.target.query.value
        const type = event.target.query.value
        const city = event.target.city.value
        
        onFilter(query, type, city)
        // showResults()
    }

    // const showResults = () => setView('results')

    useEffect(() => {
        // try {
        //     retrieveUser(sessionStorage.token)
        //         .then(user => setName(user.name))
        //         .catch(error => alert(error.message))
        // } catch (error) {
        //     alert(error.message)
        // }
    })


    return <div className="search">
        <form className="search__form" onSubmit={search}>
            <input className="search__query-input" type="text" name="query" placeholder="query"/>
            <select className="search__type-input" type="text" name="type" placeholder="type">
                <option value="null">type</option>
                <option value="Bar">Bar</option>
                <option value="Restaurante">Restaurante</option>
                <option value="Playa">Playa</option>
                <option value="Hotel">Hotel</option>
            </select>
            <select className="search__city-input" type="text" name="city" placeholder="city"> 
                <option value="null">city</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Girona">Girona</option>
                <option value="Tarragona">Tarragona</option>
            </select>

            <button>Search</button>
        </form>

        {/* {view === 'resuts' && <Results filter={filter} onItem={onItem}/>}  */}
    </div>

}

export default Search

