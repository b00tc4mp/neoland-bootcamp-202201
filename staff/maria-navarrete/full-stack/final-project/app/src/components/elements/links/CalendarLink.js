import './CalendarLink.sass'
import { Link } from '.'
import { CalendarIcon } from '../../icons'


export const CalendarLink = ({ onClick: _onClick }) => {

    const onClick = event => {
        _onClick && _onClick(event)
    }

    return <>
        <Link onClick={onClick}>
            <CalendarIcon />
        </Link>
    </>
}

