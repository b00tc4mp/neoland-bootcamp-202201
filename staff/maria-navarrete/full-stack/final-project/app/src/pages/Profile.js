import './Profile.sass'
import { UserIcon, Link, RightArrowIcon, Button } from '../components'
import { retrieveUser } from '../logic'
import { useState, useEffect } from 'react'

export const Profile = ({ onUpdateProfile: _onUpdateProfile, onActivity: _onActivity, onLogout: _onLogout }) => {

    const [user, setUser] = useState({})

    useEffect(async () => {
        try {
            const user = await retrieveUser(sessionStorage.token)
            setUser(user)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const onUpdateProfile = event => {
        _onUpdateProfile && _onUpdateProfile(event)
    }

    const onActivity = event => {
        _onActivity && _onActivity(event)
    }

    const onLogout = event => {
        delete sessionStorage.token
        _onLogout && _onLogout(event)
    }

    return <>
        <div >
            <UserIcon />
            <span>{user.username}</span>
            <span>{user.doneActs} Acts cumplidas</span>
            <Link onClick={onUpdateProfile}>Modificar Perfil <RightArrowIcon /></Link>
            <Link onClick={onActivity}>Actividad <RightArrowIcon /></Link>
            <Button type='button' onClick={onLogout}>Cerrar sesión</Button>
        </div>
    </>
}