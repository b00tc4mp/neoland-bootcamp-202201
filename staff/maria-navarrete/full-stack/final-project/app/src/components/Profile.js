import './Profile.sass'
import { UserIcon, Header, NavigationBar, Link, RightArrowIcon, Button } from '.'
import { retrieveUser } from '../logic'
import { useState, useEffect } from 'react'

export const Profile = ({}) => {

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
        <Header />
        <div >
            <UserIcon />
            <span>{user.username}</span>
            <span>{user.doneActs} Acts cumplidas</span>
            <Link>Modificar Perfil <RightArrowIcon /></Link>
            <Link>Actividad <RightArrowIcon /></Link>
            <Button>Cerrar sesión</Button>
        </div>
        <NavigationBar />
    </>
}