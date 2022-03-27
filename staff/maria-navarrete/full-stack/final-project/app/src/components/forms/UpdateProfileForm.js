import './UpdateProfileForm.sass'
import { Input, Checkbox, Button } from '..'
import { retrieveUser, updateUser } from '../../logic'
import { useState, useEffect } from 'react'

export const UpdateProfileForm = ({ className = '', onUpdated }) => {

    const [user, setUser] = useState({})

    useEffect(async () => {
        try {
            const user = await retrieveUser(sessionStorage.token)
            setUser(user)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const onUpdateUser = async event => {
        try {
            const { target: { username: { value: username }, email: { value: email }, notifications: { checked: notifications } } } = event

            await updateUser(sessionStorage.token, username, email, notifications)
            onUpdated && onUpdated()
            alert('Perfil Actualizado')

            const user = await retrieveUser(sessionStorage.token)
            setUser(user)

        } catch (error) {
            alert(error.message)
        }

    }

    const onSubmit = event => {
        event.preventDefault()
        onUpdateUser(event)
    }


    return <>
        <form className={className} onSubmit={onSubmit}>
            <Input type='text' name='username' defaultValue={user.username} placeholder='Usuario' required />
            <Input type='text' name='email' defaultValue={user.email} placeholder='Email' required />
            <Checkbox id='notifications' name='notifications' label='Notificaciones' checked={user.notifications} />
            <Button type='submit'> Actualizar </Button>
        </form>
    </>
}
