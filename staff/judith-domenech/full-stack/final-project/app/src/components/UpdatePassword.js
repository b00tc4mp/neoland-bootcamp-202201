import { updateUserPassword } from '../logic'
import { Input } from './form-elements'
import { Button } from './elements'

function UpdatePassword({ onBack }) {

        const updatePassword = async event => {
            event.preventDefault()

            const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event
            try {
                await updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
            } catch (error) {
                alert(error.message)
            }
        }

        const goBack = event => {
            event.preventDefault()

            onBack()
        }

        return <div className="update-password">
            <form className="update-password__form" onSubmit={updatePassword}>

                <Input id="currPassword" className="update-password__curr-password-input" type="password" name="currPassword" label="Contraseña Actual" />
                <Input id="password" className="update-password__password-input" type="password" name="newPassword" label="Nueva contraseña"/>
                <Input id="confirmPassword" className="update-password__re-password-input" type="password" name="confirmPassword" label="Confirmar contraseña" />

                <Button type='submit' innertext='Editar' />

                <a className="update-password__back-link" href="" onClick={goBack}>back</a>
            </form>
        </div>

    }

export default UpdatePassword