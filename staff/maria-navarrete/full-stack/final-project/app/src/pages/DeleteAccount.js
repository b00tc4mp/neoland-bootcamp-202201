import './DeleteAccount.sass'
import { DeleteAccountForm, UserIcon } from '../components'


export const DeleteAccount = ({ goToLogin }) => {


    return <>
        <div>
            <UserIcon />
            <h2>Eliminar cuenta</h2>
            <DeleteAccountForm onDeleted={goToLogin} />
        </div>
    </>
}