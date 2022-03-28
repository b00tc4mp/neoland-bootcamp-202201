import './UpdateProfile.sass'
import { Link, RightArrowIcon, UserIcon, UpdateProfileForm } from '../components'
import { retrieveUser } from '../logic'
import { useState, useEffect } from 'react'

export const UpdateProfile = ({ goToProfile, onUpdatePassword, onDeleteAccount }) => {

    const [user, setUser] = useState({})

    useEffect(async () => {
        try {
            const user = await retrieveUser(sessionStorage.token)
            setUser(user)
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return <>
        <div>
            <UserIcon />
            <span>{user.doneActs} Acts cumplidas</span>
            <h2>Modificar Perfil</h2>
            <UpdateProfileForm onUpdated={goToProfile} />
            <Link onClick={onUpdatePassword}>Cambiar contraseña <RightArrowIcon /></Link>
            <Link onClick={onDeleteAccount}>Eliminar cuenta <RightArrowIcon /></Link>
        </div>
    </>
}