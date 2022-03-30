import './Search.sass'
import { useState } from 'react'
import RecipeDetails from './RecipeDetails'
import { Button } from "../components"
import { Input } from './form-elements'
import { useSearchParams, useNavigate } from 'react-router-dom'

function Search({ onSearch, query }) {

    const navigate = useNavigate()

    const search = event => {
        event.preventDefault()

        const { target: { query: { value: query }, type: { value: type } } } = event

        navigate(`/search?type=${type}&query=${query}`)
    }

    return <div className="search">
        <form className="search__form" onSubmit={search}>

            <select name="type">
                <option value="title">title</option>
                <option value="type">type</option>
                <option value="distilled">distilled</option>
            </select>
            <input className="search__query-input" type="text" name="query" placeholder="Query" defaultValue={query} />
            <Button className="search__button" type='submit'>Search</Button>
        </form>


    </div>
}

export default Search