import './AddComment.sass'
import { createComment } from '../logic'
import { useState } from 'react'
import { Input, Button } from '.'
import { useParams } from 'react-router-dom'

export function AddComment({ onCreatedComment }) {
    const { locationId } = useParams()
    const [text, setText] = useState(null)

    const addComment = async event => {
        try {
            const { target, target: { text: { value: text } } } = event

            await createComment(sessionStorage.token, locationId, text)

            setText(null)
            target.reset()
            onCreatedComment()

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
            <Input type="text" name="text" placeholder="Escribe aquí..." required={true} />
            <Button type="submit" innerText="Crear" />
        </form>
    </>

}

// key={`${Math.floor((Math.random() * 1000))}`}