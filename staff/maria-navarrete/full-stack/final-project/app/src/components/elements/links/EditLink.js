import './EditLink.sass'
import { Link } from '.'
import { EditIcon } from '../../icons'


export const EditLink = ({ onClick: _onClick }) => {

    const onClick = event => {
        _onClick && _onClick(event)
    }

    return <>
        <Link onClick={onClick}>
            <EditIcon />
        </Link>
    </>
}




