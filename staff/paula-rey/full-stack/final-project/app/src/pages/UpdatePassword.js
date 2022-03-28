import './UpdatePassword.sass'
import { updateUserPassword } from '../logic'
import { Input, Link, Button } from '../components'

export function UpdatePassword() {

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

    // const goBack = event => {
    //     event.preventDefault()

    //     onBack()
    // }


    return <div className="update-password">
        <form className="update-password__form" onSubmit={updatePassword}>
            <Input id="currPassword" className="update-password__curr-password-input" type="password" name="currPassword" label="Contraseña actual" />
            <Input id="password" className="update-password__password-input" type="password" name="newPassword" label="Nueva contraseña"/>
            <Input id="confirmPassword" className="update-password__re-password-input" type="password" name="confirmPassword" label="Confirmar contraseña" />

            <Button type="submit">Cambiar contraseña</Button>

            {/* <Link className="update-password__back-link" href="" onClick={goBack}>Atrás</Link> */}
        </form>
    </div>
}

