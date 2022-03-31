import './UpdatePassword.sass'
import { updateUserPassword } from '../logic'
import { Button } from "../components"
import { Input } from "../components/form-elements"

function UpdatePassword({ onBack }) {

    const updatePassword = event => {
        event.preventDefault()

        const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event

        try {
            updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
                .then(() => alert('Contraseña actualizada!'))
                .catch(error => {throw error})
        } catch ({message}) {
            alert(message)
        }
    }

    const goBack = event => {
        event.preventDefault()

        onBack()
    }

    return (
    <div className='container'>
        <form className='update-password' onSubmit={updatePassword} method='post'>
            <h1 className='update-password__title'>Actualizar contraseña</h1>
            <Input id='currPassword' className='update-password__input' type='password' name='currPassword' placeholder='Actual contraseña' />
            <Input id='password' className='update-password__input' type='password' name='newPassword' placeholder='Nueva contraseña' />
            <Input id='confirmPassword' className='update-password__input' type='password' name='confirmPassword' placeholder='Confirmar contraseña' />
            <Button className='update-password__button' type='submit'>Cambiar contraseña</Button>
            <a className='' href='' onClick={goBack}>Atrás</a>
        </form>
    </div>
)
}

export default UpdatePassword