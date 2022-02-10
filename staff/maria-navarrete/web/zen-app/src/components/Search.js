import './Search.css'
import Results from './Results'
import {findQuotes} from '../logic'
import {fortunes, yoguis, zens} from '../data'
import {useState} from 'react'

function Search() {
    const [results, setResults] = useState()
    const [feedback, setFeedback] = useState()

    const search = event => {
        event.preventDefault()
        const query = event.target.query.value

        try{
            setResults(findQuotes(yoguis, query))
            setFeedback()
        }
        catch({message}){
            setResults()
            setFeedback(message)
        }   
    }
    return <>
        <form onSubmit={search}>
            <input className="search__input" type="text" name="query" placeholder="Search Quote ☯︎"></input>
            <button className="search__button">Search</button>
            {feedback && <p className="search__feedback">{feedback}</p>}
        </form>
        <Results items={results}/>
    </>
}

export default Search