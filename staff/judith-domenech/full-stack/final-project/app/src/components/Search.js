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
            <Button className="search__button" type='submit'><SearchIcon />Enviar</Button>
            <Button className="search__button" type='reset' ><CancelIcon />Limpiar</Button>
            
        </form>

    </div>
}
