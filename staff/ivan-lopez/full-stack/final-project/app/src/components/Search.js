import './Search.sass'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'

function Search({ className, onSearch, query }) {
    const navigate = useNavigate()

    const search = event => {
        event.preventDefault()

        const { target: { query: { value: query } } } = event

        navigate(`search?q=${query}`)   
    }

    return <>
        <div className={`search ${className}`}>
            <form className='search__form' onSubmit={search}>
                <input className='search__input' name="query" />
                <Button type="submit">Buscar</Button>
            </form>
        </div>
    </>

}

export default Search