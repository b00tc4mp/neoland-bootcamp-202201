import './CreateComment.sass'
import { createComment, retrieveRacket } from '../logic'
import { useEffect, useState } from 'react'
import { Button } from './elements'
import { Input } from './form-elements'

function CreateComment({ onCreated, racketId }) {
    const [model, setModel] = useState('')

    useEffect(async () => {
        try {
            const racket = await retrieveRacket(racketId)
            const { model } = racket
            setModel(model)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const addComment = async event => {
        try {
            const { target: { text: { value: text } } } = event
            await createComment(sessionStorage.token, racketId, text)
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
            <Input type='text' name="model" defaultValue={model} label disabled />
            <Input type='text' name='text' placeholder='Comentario' />
            <Button type='submit' innertext='Crear' />
        </form>
    </>
}

export default CreateComment