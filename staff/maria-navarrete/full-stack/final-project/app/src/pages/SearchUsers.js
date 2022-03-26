import './SearchUsers.sass'
import { useState } from 'react'
import { Input, Button, ListSearchUsersResults, XMarkIcon } from '../components'

export const SearchUsers = () => {
    const [query, setQuery] = useState('')

    const search = event => {
        event.preventDefault()
        const { target: { query: { value: query } } } = event

        setQuery(query)
    }

    const cleanSearch = event => {
        setQuery('')
    }

    return <>
        <div>
            <form onSubmit={search} >
                <Input type='text' name='query' placeholder='Busca Hoomans' defaultValue={query && query} />
                <Button type='reset' onClick={cleanSearch}> <XMarkIcon /></Button>
            </form>
            <ListSearchUsersResults query={query} />
        </div>
    </>
}