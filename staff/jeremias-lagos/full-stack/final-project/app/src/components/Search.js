import './Search.sass'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'
import { Input } from './form-elements'


function Search({ className }) {
    const navigate = useNavigate()

    const search = event => {
        event.preventDefault()

        const { target: { query: { value: query }, location: { value: location }, date: { value: date} } } = event

        navigate(`search?query=${query}&location=${location}&date=${date}`)   
    }

    return <>
        <div className={`search ${className}`}>
            <form className='search__form' onSubmit={search}>
                <div>
                <Input type="text" className='search__input' name="query" placeholder='Title' /></div>
                
                <Input type="text" className='search__input' name="location" placeholder='City' />
                <Input type="date" className='search__input' name="date" />

                <Button type="submit">Search</Button>            
            </form>
        </div>
    </>

}

export default Search