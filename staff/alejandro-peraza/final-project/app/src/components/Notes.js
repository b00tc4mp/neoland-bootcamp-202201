import './Notes.sass'
import { createNote, deleteNote, findRecipesByDistilled, findRecipesByTitle } from '../logic'
import { useEffect, useState } from 'react'
import { Button } from './elements'
import { Input } from './form-elements'

function createNote({ onCreated, recipeId }) {
    const [model, setModel] = useState('')

    useEffect(async () => {
        try {
            const recipe = await findRecipesByDistilled(recipeId) 
            const recipe = await findRecipesByTitle(recipeId)
            const recipe = await findRecipesByType(recipeId)
            const { model } = recipe
            setModel(model)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const createNote = async event => {
        try {
            const { target: { text: { value: text } } } = event
            await createNote(sessionStorage.token, recipeId, text)
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
            <Input type='text' name='text' placeholder='Note' />
            <Button type='submit' innertext='Note' />
        </form>
    </>
}

export default createNote