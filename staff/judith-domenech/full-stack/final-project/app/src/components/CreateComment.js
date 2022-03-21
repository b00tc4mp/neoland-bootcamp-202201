import './CreateComment.sass'
import { createComment }  from '../logic'
import { Button } from './elements'
import { Input } from './form-elements'

function CreateComment({ racketId, onCreated }) {

    const addComment = async event => {
        try {
            const { target: { description: { value: description } } } = event
            await createComment(sessionStorage.token, racketId, description)
            onCreated && onCreated()
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        addComment(event)
    }

    return <>
        <form onSubmit={onSubmit}>
            <Input type='text' name='description' placeholder='Descripción' />
            <Button type='submit' innertext='Crear' />
        </form>
    </>
}

export default CreateComment