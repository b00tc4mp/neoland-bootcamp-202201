import './DeleteAccount.sass'
import { deleteUser } from '../logic'
import { Button } from "../components"
import { Input } from '../components/form-elements'

const DeleteAccount = ({onBack, onDeletedAccount}) => {

     const goBack = event => {
        event.preventDefault()
        onBack()
    }

    const deleteAccount = event => {
        event.preventDefault()
        
        //const { target: { password: { value: password } } } = event
        const password = event.target.password.value

        try{
            deleteUser(sessionStorage.token, password)
                .then(() => onDeletedAccount())
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    } 

    return (
    <div className="container">
        <form className="delete-account" method="post" onSubmit={deleteAccount}>
            <h1 className='delete-account__title'>Eliminar mi cuenta</h1>
            <Input className='delete-account__input' type="password" name="password" placeholder="Contraseña" />
            <Button className='delete-account__button' type='submit' >Eliminar</Button>
            <a className="delete-account__back-link" href="" onClick={goBack}>Atrás</a>
        </form>
    </div>
    )
}

export default DeleteAccount