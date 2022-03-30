import './Search.sass'
import { Button, Input, SearchIcon, CancelIcon } from '.'

export function Search({ onSearch }) {

    const search = event => {
        event.preventDefault()

        const query = event.target.query.value
        onSearch(query)

    }

    return <div className="search">
        <form onSubmit={search}>
            <Input className="search__query-input" type="text" name="query" placeholder="Busca..." />
            <Button type='submit'><SearchIcon className='search__button-icon'/>Enviar</Button>
            <Button onClick={onSearch}  type='reset' ><CancelIcon className='clean__button-icon' />Limpiar</Button>
            
        </form>

    </div>
}
