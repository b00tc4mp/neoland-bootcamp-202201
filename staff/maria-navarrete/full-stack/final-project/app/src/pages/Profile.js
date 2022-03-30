import './Profile.sass'
import { UserIcon, Link, RightArrowIcon, Button } from '../components'
import { retrieveUser } from '../logic'
import { useState, useEffect } from 'react'

export const Profile = ({ onUpdateProfile, onActivity, onLogout }) => {

    const [user, setUser] = useState({})

    useEffect(async () => {
        try {
            const user = await retrieveUser(sessionStorage.token)
            setUser(user)
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const handleLogout = event => {
        event.preventDefault()
        delete sessionStorage.token
        onLogout(event)
    }

    return <>
        <div >
            <UserIcon />
            <span>{user.username}</span>
            <span>{user.doneActs} Acts cumplidas</span>
            <Link onClick={onUpdateProfile}>Modificar Perfil <RightArrowIcon /></Link>
            {/* <Link onClick={onActivity}>Actividad <RightArrowIcon /></Link> */}
            <Button type='button' onClick={handleLogout}>Cerrar sesión</Button>
        </div>
    </>
}