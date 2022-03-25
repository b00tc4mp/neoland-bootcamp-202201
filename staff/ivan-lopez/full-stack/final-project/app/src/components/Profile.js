import { useState, useEffect } from 'react'
import { retrieveUser, updateUser } from '../logic'
import { Button } from '../components'
import { Input } from '../components/form-elements'
import ModalCreateProduct from './elements/ModalCreateProduct'


function Profile({ onUpdatePassword, onDeleteAccount, onLogout }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [isShowModal, setIsShowModal] = useState()


    useEffect(() => {
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


    const updateProfile = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email } } } = event

        try {
            updateUser(sessionStorage.token, name, email)
                .then(() => {
                    setName(name)
                    setEmail(email)
                })
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
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

    const logOut = event => {
        event.preventDefault()
        delete sessionStorage.token
        onLogout()
    }

    const onSubmit = event => {
        event.preventDefault()
        updateProfile(event)
    }

    const toggleModal = () => {
        setIsShowModal(true)
    }

    const closeModal = () => {
        setIsShowModal(false)
    }

    return <div className='profile'> 
        {isShowModal && <ModalCreateProduct onClose={closeModal}/> }
        <div>
            <h1>PERFIL</h1>
            Bienvenid@ a tu perfil, {name} !

            <form className='profile__form' onSubmit={onSubmit} method='post'>

                <div className="profile__field">
                    <Input className='profile__name-input' type='text' name='name' placeholder='Nombre' defaultValue={name} />
                </div>

                <div className="profile__field">
                    <Input className='profile__email-input' type='email' name='email' placeholder='E-mail' defaultValue={email} />
                </div>

                <Button type='submit' className='profile__submit'>Actualizar perfil</Button>

                <a href='' className='profile__update-password-link' onClick={goToUpdatePassword}>Actualizar contraseña</a>
                <a href='' className='profile__delete-account-link' onClick={goToDeleteAccount}>Eliminar mi cuenta</a>
                <Button type='submit' onClick={logOut}>Cerrar sesión</Button>
            </form>
                <div>
                <Button onClick={toggleModal}>Añadir Producto</Button>
                </div> 
        </div>
        </div>
}

export default Profile