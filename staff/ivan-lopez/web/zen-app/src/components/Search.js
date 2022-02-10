import './Search.css'
import Results from './Results'
import { findYoguis } from '../logic'
import { useState } from 'react'

function Search() {
    const [results, setResults] = useState()
    const [feedback, setFeedback] = useState()

    const search = event => {
        event.preventDefault()

        const query = event.target.query.value

        try {
            const yoguis = findYoguis(query)

            setFeedback()
            setResults(yoguis)
        } catch ({ message }) {
            setResults()
            setFeedback(`${message} `)
        }
    }

    return <>
        <form onSubmit={search}>
            <input className="search__input" type="text" name="query" placeholder='query' />
            <button className='search__button'>Search</button>
            {feedback && <p className='search_feedback'>{feedback}</p>}
        </form>

        <Results items={results} />
    </>
}

export default Search