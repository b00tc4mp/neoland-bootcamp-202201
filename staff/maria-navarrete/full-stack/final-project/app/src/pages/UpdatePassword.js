import './UpdatePassword.sass'
import { Input, Button, UserIcon } from '../components'
import { updateUserPassword } from '../logic'


export const UpdatePassword = () => {

    const onUpdatePassword = async event => {
        try {
            const { target: { currentPassword: { value: currentPassword }, newPassword: { value: newPassword }, confirmNewPassword: { value: confirmNewPassword } } } = event

            await updateUserPassword(sessionStorage.token, currentPassword, newPassword, confirmNewPassword)

        } catch (error) {
            alert(error.message)
        }

    }

    const onSubmit = event => {
        event.preventDefault()
        onUpdatePassword(event)
    }

    return <>
        <div>
            <UserIcon />
            <h2>Actualizar contraseña</h2>
            <form onSubmit={onSubmit}>
                <Input type='password' name='currentPassword' placeholder='Contraseña actual' required />
                <Input type='password' name='newPassword' placeholder='Nueva contraseña' required />
                <Input type='password' name='confirmNewPassword' placeholder='Confirmar contraseña' required />
                <Button type='submit'> Actualizar </Button>
            </form>
        </div>
    </>
}