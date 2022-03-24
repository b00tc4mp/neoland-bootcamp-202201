import './Search.sass'
import { useState } from 'react'
import RecipeDetails from './RecipeDetails'

function Search({ onSearch, query }) {
    const [view, setView] = useState(query && 'RecipeDetails')

    const search = event => {
        event.preventDefault()

        const { target: { query: { value: query }, type: { value: type } } } = event

        onSearch(type, query)

        showResults()
    }

    const showResults = () => setView('RecipeDetails')


    return <div className="search">
        <form className="search__form" onSubmit={search}>

            <select name="type">
                <option value="title">title</option>
                <option value="type">type</option>
                <option value="distilled">distilled</option>
            </select>
            <input className="search__query-input" type="text" name="query" placeholder="Query" defaultValue={query} />
            <span className="search__icon">🔍</span>

            <button className="search__button">Search</button>
        </form>

        
    </div>
}

export default Search