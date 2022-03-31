import './Profile.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, updateUser } from '../logic'
import { Button } from '../components'
import { Input } from '../components/form-elements'
import ModalCreateProduct from './elements/ModalCreateProduct'


function Profile({ onUpdatePassword, onDeleteAccount, onLogout }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [role, setRole] = useState()
    const [isShowModal, setIsShowModal] = useState()
    const [showProductList, setShowProductList] = useState(false)


    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(({ name, email, role }) => {
                    setName(name)
                    setEmail(email)
                    setRole(role)
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
                    alert('¡Usuario actualizado!')
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


    return (
    <div className='container'>
        {isShowModal && <ModalCreateProduct onClose={closeModal} />}
            <form className='profile' onSubmit={onSubmit} method='post'>
                <h1 className='profile__title' >Perfil</h1>
                    <Input className='profile__input' type='text' name='name' placeholder='Nombre' defaultValue={name} />
                    <Input className='profile__input' type='email' name='email' placeholder='E-mail' defaultValue={email} />
                    <Button className='profile__button-update' type='submit' >Actualizar</Button>
                    <Button className='profile__button-logout' type='submit' onClick={logOut}>Cerrar sesión</Button>

                    <a href='' className='profile__update-password-link' onClick={goToUpdatePassword}>
                        Actualizar contraseña
                    </a>
                    <a href='' className='profile__delete-account-link' onClick={goToDeleteAccount}>Eliminar mi cuenta</a>
                    {role === 'admin' && <Button onClick={toggleModal}>
                        Añadir
                    </Button>}
            </form>
            <div>
            </div>
        </div>
)
}

export default Profile