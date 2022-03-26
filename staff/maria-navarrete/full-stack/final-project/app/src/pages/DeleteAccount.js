import './DeleteAccount.sass'
import { Input, Button, UserIcon } from '../components'
import { deleteUser } from '../logic'


export const DeleteAccount = () => {

    const onDeleteAccount = async event => {
        try {
            const { target: { password: { value: password } } } = event

            await deleteUser(sessionStorage.token, password)
            alert('Cuenta eliminada :(')

        } catch (error) {
            alert(error.message)
        }

    }

    const onSubmit = event => {
        event.preventDefault()
        onDeleteAccount(event)
    }

    return <>
        <div>
            <UserIcon />
            <h2>Eliminar cuenta</h2>
            <form onSubmit={onSubmit}>
                <Input type='password' name='password' placeholder='Contraseña' required />
                <Button type='submit'> Eliminar </Button>
            </form>
        </div>
    </>
}