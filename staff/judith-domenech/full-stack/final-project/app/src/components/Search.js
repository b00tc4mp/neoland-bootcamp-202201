import './Search.sass'
import { useState } from 'react'
import { Button, ListSearchRackets, Input, SearchIcon, CancelIcon } from '.'

export function Search() {
    const [query, setQuery] = useState()

    const search = event => {
        event.preventDefault()

        const query = event.target.query.value

        setQuery(query)
    }

    const cleanQuery = event =>{
     setQuery('')
    }

    return <div className="search">
        <form onSubmit={search}>
            <Input className="search__query-input" type="text" name="query" placeholder="Busca..." defaultValue={query} />
            <Button className="search__button" type='submit'><SearchIcon />Enviar</Button>
            <Button className="search__button" type='reset' onClick={cleanQuery}><CancelIcon />Limpiar</Button>
            <ListSearchRackets query={query} />
        </form>

    </div>
}
