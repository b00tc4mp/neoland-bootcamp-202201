//import './UpdatePassword.css'
import { updateUserPassword } from '../logic'
import { Button } from "../components"
import { Input } from "../components/form-elements"

function UpdatePassword({ onBack }) {

    const updatePassword = event => {
        event.preventDefault()

        const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event

        try {
            updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
                .then(() => alert('password updated'))
                .catch(error => {throw error})
        } catch ({message}) {
            alert(message)
        }
    }

    const goBack = event => {
        event.preventDefault()

        onBack()
    }

    return <div className='update-password'>
        <form className='update-password__form' onSubmit={updatePassword} method='post'>

            <h1>Actualizar contraseña</h1>

            <div className="update-password__field">
                
                <Input id='currPassword' className='update-password__curr-password-input' type='password' name='currPassword' placeholder='Actual contraseña' />
            </div>
            <div className="update-password__field">
                
                <Input id='password' className='update-password__password-input' type='password' name='newPassword' placeholder='Nueva contraseña' />
            </div>
            <div className="update-password__field">
                
                <Input id='confirmPassword' className='update-password__re-password-input' type='password' name='confirmPassword' placeholder='Confirmar contraseña' />
            </div>
                <Button type='submit'>Cambiar contraseña</Button>

                <a className='update-password__back-link' href='' onClick={goBack}>Atrás</a>
        </form>
    </div>
}

export default UpdatePassword