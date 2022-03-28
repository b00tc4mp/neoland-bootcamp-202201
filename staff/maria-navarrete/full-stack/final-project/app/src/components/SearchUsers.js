import './SearchUsers.sass'
import { Input, Button, XMarkIcon, SearchIcon } from '.'


export const SearchUsers = ({ onSearchUsers }) => {

    const search = event => {
        const { target: { query: { value: query } } } = event
        onSearchUsers && onSearchUsers(query)
    }

    const onSubmit = event => {
        event.preventDefault()
        search(event)
    }

    return <>
        <div>
            <form onSubmit={onSubmit} >
                <Input type='text' name='query' placeholder='Busca Hoomans' />
                <Button type='submit'><SearchIcon /></Button>
                <Button type='reset'> <XMarkIcon /></Button>
            </form>
        </div>
    </>


}