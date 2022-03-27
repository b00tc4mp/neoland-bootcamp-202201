import './UpdatePasswordForm.sass'
import { Input, Button } from '..'
import { updateUserPassword } from '../../logic'

export const UpdatePasswordForm = ({ className = '', onUpdated }) => {

    const onUpdatePassword = async event => {
        try {
            const { target: { currentPassword: { value: currentPassword }, newPassword: { value: newPassword }, confirmNewPassword: { value: confirmNewPassword } } } = event

            await updateUserPassword(sessionStorage.token, currentPassword, newPassword, confirmNewPassword)
            onUpdated && onUpdated()

        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        onUpdatePassword(event)
    }


    return <>
        <form className={className} onSubmit={onSubmit}>
            <Input type='password' name='currentPassword' placeholder='Contraseña actual' required />
            <Input type='password' name='newPassword' placeholder='Nueva contraseña' required />
            <Input type='password' name='confirmNewPassword' placeholder='Confirmar contraseña' required />
            <Button type='submit'> Actualizar </Button>
        </form>
    </>
}
