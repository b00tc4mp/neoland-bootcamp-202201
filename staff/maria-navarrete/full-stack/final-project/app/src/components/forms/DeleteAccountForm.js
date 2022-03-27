import './DeleteAccountForm.sass'
import { Input, Button } from '../../components'
import { deleteUser } from '../../logic'

export const DeleteAccountForm = ({ className = '', onDeleted }) => {

    const deleteAccount = async event => {
        try {
            const { target: { password: { value: password } } } = event

            await deleteUser(sessionStorage.token, password)
            delete sessionStorage.token
            onDeleted && onDeleted()
            alert('Cuenta eliminada :(')

        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        deleteAccount(event)
    }

    return <>
        <form className={className} onSubmit={onSubmit}>
            <Input type='password' name='password' placeholder='Contraseña' required />
            <Button type='submit'> Eliminar </Button>
        </form>
    </>
}
