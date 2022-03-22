import './AddComment.sass'
import { retrieveLocation, createComment } from '../logic'
import { useState, useEffect } from 'react'
import { Input } from './form-elements'
import { Button } from './elements'

function AddComment({ onCreated, locationId }) {
    const [title, setTitle] = useState('')

    useEffect(async () => {
        try {

            const location = await retrieveLocation(sessionStorage.token, locationId)
            const { title } = location

            setTitle(title)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const addComment = async event => {
        try {
            const { target: { text: { value: text } } } = event

            await createComment(sessionStorage.token, locationId, text)
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
            <Input type="text" name="title" defaultValue={title} label disabled />
            <Input type="text" name="text" placeholder="Escribe aquí..." required={true}/>
            <Button type="submit" innerText="Crear" />
        </form>
    </>

}

export default AddComment