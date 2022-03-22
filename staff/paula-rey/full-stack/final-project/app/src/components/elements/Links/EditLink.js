import './EditLink.sass'
import { Link } from './Link'
import { EditIcon } from '../Icons'

function EditLink({ onClick }) {

    return <>
        <Link onClick={onClick}>
            <EditIcon/>
        </Link>
    </>
}

export default EditLink