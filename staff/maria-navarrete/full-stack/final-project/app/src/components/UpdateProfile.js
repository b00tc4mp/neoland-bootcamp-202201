import './UpdateProfile.sass'
import { useState, useEffect } from 'react'
import { Input, Checkbox, Button, Link, RightArrowIcon, Header, NavigationBar, UserIcon, GoIcon } from '.'
import { retrieveUser, updateUser } from '../logic'


export const UpdateProfile = ({ onUpdate }) => {

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
            onUpdate && onUpdate()

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
        <Header />
        <div>
            <UserIcon />
            <span>{user.doneActs} Acts cumplidas</span>
            <h2>Modificar Perfil</h2>
            <form onSubmit={onSubmit}>
                <Input type='text' name='username' defaultValue={user.username} placeholder='Usuario' required />
                <Input type='text' name='email' defaultValue={user.email} placeholder='Email' required />
                <Checkbox id='notifications' name='notifications' label='Notificaciones' checked={user.notifications} />
                <Button type='submit'> <GoIcon /> </Button>
            </form>
            <Link>Cambiar contraseña <RightArrowIcon /></Link>
            <Link>Eliminar cuenta <RightArrowIcon /></Link>
        </div>
        <NavigationBar />
    </>
}