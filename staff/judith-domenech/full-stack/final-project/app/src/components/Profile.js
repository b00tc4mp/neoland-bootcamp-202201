import './Profile.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import { Button, Link } from './elements'
import { Input } from './form-elements'

function Profile({onUpdatePassword, onDeleteAccount, onLogOut}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect( () => {
        try {
            retrieveUser(sessionStorage.token)
                .then(({ name, email }) => {
                    setName(name)
                    setEmail(email)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateProfile = async event => {
        event.preventDefault()
        const { target: { name: { value: name }, email: { value: email } } } = event
        
        try {
            
           await updateUser(sessionStorage.token, name, email)
                    setName(name)
                    setEmail(email)
        } catch ({ message }) {
            alert({ message })
        }
    }

    const goToUpdatePassword = event => {
        event.preventDefault()

        onUpdatePassword()
    }

    const goToDeleteAccount = event => {
        event.preventDefault()

        onDeleteAccount()
    }

    return <div className='profile'>
        <form className='profile__form' onSubmit={updateProfile} method='post'>
            <Input className="profile__name-input" type="text" name="name" placeholder="name" defaultValue={name} label="Nombre"/>
            <Input className="profile__email-input" type="email" name="email" placeholder="e-mail" defaultValue={email} label="E-mail" />
            <Button type ='submit' innertext='Editar'/>
            <Button type= 'button' onClick={onLogOut} innertext='Log out' /> 
       
            <Link  href="" onClick={goToUpdatePassword} children={"Cambiar Contraseña"}/> 
            <Link  href="" onClick={goToDeleteAccount} children={"Borrar Cuenta"}></Link>
        </form>

    </div>
}

export default Profile
