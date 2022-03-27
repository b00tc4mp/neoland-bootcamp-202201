import './Search.sass'
import { Button } from '../components'
import { Input } from '../components/form-elements'
import { useNavigate } from 'react-router-dom'

function Search({ className, onSearch, query }) {
    const navigate = useNavigate()

    const search = event => {
        event.preventDefault()

        const { target: { query: { value: query } } } = event

        navigate('search')
    }

    return <>
        <div className={`search ${className}`}>
            <form onSubmit={search}>
                <Input className='search__input' name='query' />
                <Button className='search__button' type='submit'>Buscar</Button>
            </form>
        </div>
    </>

}

export default Search