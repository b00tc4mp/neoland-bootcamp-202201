import './Search.sass'
import { useNavigate } from 'react-router-dom'



function Search({ className }) {
    const navigate = useNavigate()

    const search = event => {
        event.preventDefault()

        const { target: { query: { value: query }, location: { value: location }, date: { value: date } } } = event

        navigate(`search?query=${query}&location=${location}&date=${date}`)
    }

    return <>
        <div className={`search ${className}`}>
            <h1 className='search__title'>FIND TOURNAMENTS 🏆</h1>
            <form className='search__form' onSubmit={search}>

                <input type='text' className='search__input-title' name='query' placeholder=' Title' />

                <input type='text' className='search__input-city' name='location' placeholder=' City' />
                <input type='date' className='search__input-date' name='date' />

                <button className='search__button' type='submit'>Search</button>
            </form>
        </div>

    </>

}

export default Search