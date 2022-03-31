import './Search.sass'
import { Button } from '../components'
import { Input } from '../components/form-elements'
import { useNavigate } from 'react-router-dom'
import {findProducts} from "../logic"


function Search({ className, onSearch }) {
    const navigate = useNavigate()
   
    const search = event => {
        event.preventDefault()

        const { target: { query: { value: query } }} = event
        onSearch(query)
    }

    return <>
        <div className={`search ${className}`}>
            <form className='search-form' onSubmit={search}>
                <Input className='search__input' name='query' placeholder='Buscar productos...' />
                <Button className='search__button' type='submit'>Buscar</Button>
            </form>
        </div>
    </>

}

export default Search